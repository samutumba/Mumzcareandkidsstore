import { CartView, Footer, SectionTitle, Map, ErrorMessage, TextAreaInput, SelectInput, BasicInput } from "../components"
import PhoneInput, { formatPhoneNumberIntl, isValidPhoneNumber } from "react-phone-number-input";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Icon } from '@iconify/react';
import { Checkbox, Label } from "flowbite-react";
import CreatableSelect from 'react-select/creatable';
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { authModalState, userState, embedState, loadingState } from "../atoms";
import { Format } from "../utils/formatter";
import { Navigate, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { API } from "../api/https";
import { Districts, getTowns } from "../data/page/Districts";
import { Alert } from "flowbite-react"
import { ISaleType, IPaymentType, CartItem } from '../types'
import { Link } from "react-router-dom";
import { Location } from "../types/create";
import { DeliveryLocation } from "../types/create/types";
import { Transaction } from "../types/create";
import { useForm } from "react-hook-form";
import { closePaymentModal, useFlutterwave } from "flutterwave-react-v3";
import { useLocationQuery } from "../hooks";
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup';
import { FlutterwaveConfig } from "flutterwave-react-v3/dist/types";

interface CreatePickup {
  saleId?: string,
  contact: string,
  note?: string,
  location?: string,
  service: string
}

interface CreateDelivery {
  saleId?: string,
  note: string,
  location?: DeliveryLocation,
  service: string
}





export const CheckOutPage = () => {
  const setAuthModal = useSetRecoilState(authModalState)
  const [number, setNumber] = useState("")
  const [delivery, setDelivery] = useState<boolean | undefined>(undefined)
  const user = useRecoilValue(userState)
  const [embed, setEmbed] = useRecoilState(embedState)
  const [location, setLocation] = useState('')
  const [town, setTown] = useState('')
  const [fee, setFee] = useState(0)
  const [deliveryFee, setDeliveryFee] = useState(0)
  const [note, setNote] = useState("")
  const navigate = useNavigate()
  const locations = useLocationQuery()
  const txt_ref = useMemo(() => {
    return `${Date.now().toString()}-${user?.username}`;
  }, [])

  const handleDeliveryClick = (selection: "pickUp" | "delivery") => {
    if (selection === 'delivery')
    {
      (user && (((subtotal + fee) || 0) < 300000)) ? toast.error("Please add more items to cart to reach shs. 300,000") : setDelivery(true)
    } else
    {
      setDelivery(false)
    }
  }

  const [pin, setPin] = useState<{
    lgt: string,
    lat: string,
    zoom: number
  } | undefined>(undefined)
  const setLoading = useSetRecoilState(loadingState)

  const districtOptions = useMemo(() => {
    return Districts.sort().map((d) => {
      return {
        value: d,
        label: d
      }
    })
  }, [])

  const subtotal = useMemo(() => {
    let total = 0;

    user?.Cart?.items.forEach((cart) => {
      total += (cart.product.basePrice * cart.quantity)
    })
    return total;
  }, [user])

  const deliverySchema = Yup.object({
    location: Yup.object({
      lgt: Yup.string(),
      lat: Yup.string(),
      district: Yup.string().required().label("District"),
      town: Yup.string().required().label("Town/City"),
      street: Yup.string().required().label("Street Address"),
      country: Yup.string().required(),
    }),
    note: Yup.string(),
  });

  const pickupSchema = Yup.object({
    location: Yup.string().min(1, "Please select a location").required("Please select a location").oneOf(locations.data?.flatMap(l => l.id) || ["12345678"]),
    note: Yup.string(),
    contact: Yup.string().test("valid-phone", "Enter a valid phone number",
      function (value) {
        return value ? isValidPhoneNumber(value) : false
      }).required()
  });


  const deliveryForm = useForm<CreateDelivery>({
    mode: "onBlur",
    resolver: yupResolver(deliverySchema),
    defaultValues: {
      note: "",
      service: "Order Delivery",
      location: {
        country: "UG"
      }
    }
  })

  const pickupForm = useForm<CreatePickup>({
    mode: "onBlur",
    resolver: yupResolver(pickupSchema),
    defaultValues: {
      contact: user?.phone?.at(0) || "",
      note: "",
      service: "Order Pickup"
    }
  })

  const config: FlutterwaveConfig = {
    public_key: process.env.REACT_APP_FLW_PUBLIC_KEY || "",
    tx_ref: txt_ref,
    amount: subtotal,
    currency: 'UGX',
    payment_options: 'card,mobilemoney,ussd',
    customer: {
      email: user?.email || "info@mumzcareandkidsstore.com",
      phone_number: number,
      name: user?.name || "Customer",
    },
    customizations: {
      title: 'Mumz Care and Kids Store',
      description: 'Order Payment',
      logo: 'https://www.mumzcareandkidsstore.com/logo.png',
    },
  };

  const handleFlutterPayment = useFlutterwave(config);

  const handleDeliverySubmit = () => {
    deliveryForm.trigger()

    if (deliveryForm.formState.isValid)
    {
      handleFlutterPayment({
        callback: (response) => {
          closePaymentModal()
          if (response.status === "successful")
          {
            closePaymentModal() // this will close the modal programmatically
            setLoading(true)
            const payment: Transaction = {
              amount: subtotal,
              txt_ref: response.tx_ref,
              transaction_id: `${response.transaction_id}`,
              payment_fee: fee
            }

            const data = {
              cartItem: user?.Cart?.items,
              payment
            }

            API.createSale(data).then(res => {
              deliveryForm.setValue('saleId', res.data.sale.id)

              deliveryForm.handleSubmit((data) =>
                API.createDelivery(data).then(res => {
                  toast.success("Order Complete")
                  navigate(`sale/${data.saleId}`)
                  setLoading(false)
                }).catch(err => {
                  setLoading(false)
                })
              )();
            }).catch(err => {
              setLoading(false)
            })
          } else
          {
            toast.error("Payment unsuccessful")
          }
        },
        onClose: () => {
          toast.error("Payment incomplete")
        },
      })
    } else
    {
      toast.error('Check your information')
    }


  }

  const handlePickUpSubmit = () => {
    pickupForm.trigger()

    if (pickupForm.formState.isValid)
    {

      handleFlutterPayment({
        callback: (response) => {
          closePaymentModal()
          if (response.status === "successful")
          {
            closePaymentModal() // this will close the modal programmatically
            setLoading(true)
            const payment: Transaction = {
              amount: subtotal,
              txt_ref: response.tx_ref,
              transaction_id: `${response.transaction_id}`,
              payment_fee: fee
            }

            const data = {
              cartItem: user?.Cart?.items,
              payment
            }

            API.createSale(data).then(res => {
              pickupForm.setValue('saleId', res.data.sale.id)

              pickupForm.handleSubmit((data) =>
                API.createPickUp(data).then(res => {
                  toast.success("Order Complete")
                  navigate(`sale/${data.saleId}`)
                  setLoading(false)
                }).catch(err => {
                  setLoading(false)
                })
              )();
            }).catch(err => {
              toast.error("There was an issue completing the sale")
              setLoading(false)
            })
          } else
          {
            toast.error("Payment unsuccessful")
          }
        },
        onClose: () => {
          toast.error("Payment incomplete")
        },
      })
    } else
    {
      toast.error('Check your information')
    }

  }


  useEffect(() => {
    API.getFee(subtotal).then((res) => {
      setFee(parseInt(res.data.fee))
    }).catch(err => {
      setFee(0)
    })
  }, [subtotal])


  // const getCurrentLocation = () => {
  //   navigator.geolocation.getCurrentPosition(function (position) {
  //     setPin({
  //       lgt: `${position.coords.longitude}`,
  //       lat: `${position.coords.latitude}`,
  //       zoom: 10
  //     })
  //   });
  // }

  if (!user)
  {
    setAuthModal(true)
    toast('Sign in to preceed to checkout', {
      icon: '🛍️',
      duration: 6000
    })
    return (<Navigate to="/" />)
  }

  return (<div className="w-full flex flex-col flex-wrap">
    <header className="bg-ocean w-full py-3  flex justify-center">
      <Link to="/" className="p-2 my-2 rounded-lg bg-white">
        <img src="/logo.png" alt="" className="h-[5rem] w-auto" />
      </Link>
    </header>
    <div className="flex w-full flex-col mt-12 justify-evenly items-start lg:flex-row gap-1 px-2 lg:px-7">
      <div className="flex flex-col w-full lg:w-5/12 lg:px-12">
        <h2 className="w-full mt-7 lg:mt-0 text-center text-xl font-bold font-title uppercase mb-3">Checkout Details</h2>
        <div className="my-2 mx-auto  w-full">
          {
            (user && (((subtotal + fee) || 0) < 300000)) ? <>
              <Alert
                color="warning"
                rounded
              >
                <span>
                  <span className="font-semibold block text-xl font-title">
                    Shop Some More
                  </span>
                  {' '} Orders above <span className="font-semibold">{Format.currency(300000)}</span> get free shipping within Kampala, Wakiso and Mukono! Don't Miss Out
                </span>
              </Alert>
            </> :
              <Alert
                color="success"
                onDismiss={function onDismiss () { }}
              >
                <span>
                  <span className="font-medium">
                    Delivery applied!
                  </span>
                  {' '}You may get free delivery for your order
                </span>
              </Alert>
          }
          <label
            className="block mb-2 text-lg font-semibold text-gray-900 dark:text-gray-300">
            How are you going to collect these items?
          </label>
          <span className="grid grid-cols-2 gap-4 w-full"
          >
            <button title="button" onClick={() => handleDeliveryClick('pickUp')} className="flex flex-row gap-4 font-semibold items-center justify-center bg-gold text-white rounded-lg py-2 px-4">
              <Icon icon="icon-park-outline:delivery" className="inline text-3xl" /> Pick up
            </button>
            <button title="button" onClick={() => handleDeliveryClick('delivery')} className="flex flex-row gap-4 font-semibold rounded-lg py-2 px-4 items-center justify-center bg-rose text-white">
              <Icon icon="ic:outline-delivery-dining" className="inline text-3xl" /> Delivery
            </button>
            <p className="text-xs">Collect your order from one of our locations once it is ready!</p>
            <p className="text-xs">Get it delivered to your home within the Kampala, Wakiso and Mukono Region</p>
          </span>
        </div>
        {
          typeof delivery !== "undefined" &&

            delivery == true ?
            <>
              <div className="my-2 mx-auto flex flex-col gap-1 w-full">
                <label
                  className="block mb-2 text-lg font-semibold text-gray-900 dark:text-gray-300">
                  Delivery Information
                </label>
                <SelectInput
                  name="District"
                  options={['Wakiso', 'Kampala', 'Mukono'].flatMap((d) => { return { label: d, value: d } })}
                  callback={(loc) => {
                    deliveryForm.setValue('location.district', loc)
                    deliveryForm.trigger("location.district")
                  }}
                  error={deliveryForm.formState.errors.location?.district}
                />
                <label>
                  Town/City
                </label>
                <CreatableSelect
                  placeholder="e.g Ntinda, Gayaza"
                  theme={(theme) => ({
                    ...theme,
                    borderRadius: 10,
                    colors: {
                      ...theme.colors,
                      primary25: '#c6e6e6',
                      primary: '#d80945',
                    },
                  })}
                  styles={{
                    control: base => ({
                      ...base,
                      fontFamily: "Quicksand"

                    }),
                    menu: base => ({
                      ...base,
                      fontFamily: "Quicksand"

                    })
                  }}

                  options={getTowns()}
                  onChange={(value, action) => {
                    value && deliveryForm.setValue('location.town', value.value)
                  }}
                />
                <ErrorMessage data={deliveryForm.formState.errors.location?.town} />
                <BasicInput
                  name="Street Address"
                  value={deliveryForm.getValues('location.street')}
                  callback={(p) => {
                    deliveryForm.setValue('location.street', p)
                    deliveryForm.trigger()
                  }}
                  error={deliveryForm.formState.errors.location?.street}
                />
                <TextAreaInput
                  name="Note"
                  defaultValue={pickupForm.getValues('note')}
                  callback={(p) => {

                    deliveryForm.setValue("note", p.toString())
                    deliveryForm.trigger('note')
                  }}
                  error={deliveryForm.formState.errors.note}
                />
              </div>
            </>
            :
            <>
              <div className="flex flex-col gap-1 my-2 mx-auto  w-full">
                <label
                  className="block mb-2 text-lg font-semibold text-gray-900 dark:text-gray-300">
                  Pick Up Information
                </label>
                {
                  user?.phone?.map((p, i) => <div key={i} className=" flex flex-row gap-4 items-center">
                    <Checkbox
                      id={`phoneN-${p}`}
                      checked={number === p}
                      onChange={(e) => setNumber(p)}
                    />
                    <Label htmlFor={`phoneN-${p}`}>
                      {formatPhoneNumberIntl(p)}
                    </Label>
                  </div>)
                }
                <label>Add New Phone Number</label>
                <div className=" flex flex-row gap-4 items-center">
                  <Checkbox
                    checked={!user.phone.includes(pickupForm.getValues('contact'))}
                  />
                  <PhoneInput
                    international

                    defaultCountry="UG"
                    onBlur={() => pickupForm.trigger('contact')}
                    value={pickupForm.getValues('contact')}
                    onChange={(p) => p && pickupForm.setValue("contact", p.toString())}
                  />
                </div>
                <ErrorMessage data={pickupForm.formState.errors.contact} />
                <TextAreaInput
                  name="Note"
                  defaultValue={pickupForm.getValues('note')}
                  callback={(p) => {

                    pickupForm.setValue("note", p.toString())
                    pickupForm.trigger('note')
                  }}
                  error={pickupForm.formState.errors.note}
                />
                <SelectInput
                  name="Pick Up Location"
                  options={locations.data ? locations.data?.flatMap((l) => { return { label: `${l.name} - ${l.address}`, value: l.id } }) : []}
                  callback={(loc) => {

                    pickupForm.setValue('location', loc)
                    pickupForm.trigger('location')
                  }}
                  error={pickupForm.formState.errors.location}
                />
              </div>
            </>
        }
        {
          <>{/* <div className="my-2 mx-auto w-full">
            <label
              className="block mb-2 text-sm w-full font-medium text-gray-900 dark:text-gray-300">
              Select District:
            </label>
            <CreatableSelect
              placeholder="e.g Kampala, Mukono"
              className=" text-gray-700 font-p"
              options={districtOptions}
              onChange={(value, action) => {
                value && setLocation(value.value)
              }}
            />  {(location === "Kampala" || location === "Wakiso" || location === "Mukono") && <>
              <div className="my-2 mx-auto w-full">
                <label
                  className="block mb-2 text-sm w-full font-medium text-gray-900 dark:text-gray-300">
                  Select Town:
                </label>
                <CreatableSelect
                  placeholder="e.g Ntinda, Gayaza"
                  className=" text-gray-700 font-p"
                  options={getTowns()}
                  onChange={(value, action) => {
                    value && setTown(value.value)
                  }}
                />
              </div>
            </>}
            <p className="mb-1 mt-3 text-xs">
              <span className="text-sm">Note:</span> <br /><br /><span className="flex flex-row items-center gap-4 mb-3"> <Icon icon="ic:baseline-delivery-dining" inline={true} className="inline text-lg" /> Deliveries may take between 1-5 days to be delivered </span>

              <span className="flex flex-row items-center gap-4"> <Icon icon="ic:baseline-delivery-dining" inline={true} className="inline text-xl" /> Delivery fees outside of Kampala, Wakiso, and Wakiso are charged on arrival</span>
            </p>
          </div>
            <div className="my-2 mx-auto w-full">
              <label
                className="block mb-2 text-sm w-full font-medium text-gray-900 dark:text-gray-300">
                Use Current Location:
              </label>
              <button title="button" onClick={getCurrentLocation} className="border border-1 flex flex-row gap-4 items-center py-3 px-9 rounded-lg">
                <Icon icon="iconoir:maps-arrow-diagonal" className="inline" inline={true} /> Get current location
              </button>
              {pin && <>
                <button title="button" className="py-3 mt-3 px-9 bg-[#4285F4] rounded-lg text-sm font-semibold text-white" onClick={() => {
                  window.open(`https://www.google.pl/maps/search/?api=1&query=${pin?.lat},${pin?.lgt}`, '_blank')
                }}>
                  <Icon icon="logos:google-maps" className="inline text-lg mr-3 " /> View Est. Location
                </button></>}
            </div>
            <div className="my-2 mx-auto flex flex-col gap-2 w-full">
              <label
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Phone Number:
              </label>
              {
                user?.phone?.map((p, i) => <div key={i} className=" flex flex-row gap-4 items-center">
                  <Checkbox
                    id={`phoneN-${p}`}
                    checked={number === p}
                    onChange={(e) => setNumber(p)}
                  />
                  <Label htmlFor={`phoneN-${p}`}>
                    {formatPhoneNumberIntl(p)}
                  </Label>
                </div>)
              }
              <PhoneInput
                className="box-border appearance-none border border-gray w-full rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-primary mr-2 max-w-md font-p custom_style"
                type="tel"
                name="Phone Number"
                country="UG"
                value={number}
                placeholder="Phone Number"
                onChange={(value) => setNumber(value?.toString() || '')}
                required
              />
              <span className="flex flex-row items-center p-1">
                <Icon icon="icon-park-solid:help" inline className="text-gray-500" />
                <p className="uppercase text-rose text-[.60rem] ml-2 font-bold">Must Be the recipent's phone number</p>
              </span>

            </div>
            <div className="my-2 mx-auto  w-full">
              <label
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Delivery Notes:
              </label>
              <textarea
                id="message"
                rows={4}
                value={note}
                onChange={(e) => setNote(e.currentTarget.value)}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-rose focus:border-rose "
                placeholder="Any Additional Information..."
              />
            </div> */}
          </>
        }

      </div>
      <div className="flex flex-col justify-center px-2 lg:px-2 text-center w-full lg:w-5/12">
        <SectionTitle title="Items" />
        {
          user?.Cart?.items?.map((item) => <div className="flex-col w-full flex justify-center" key={item.id}>
            <CartView {...item} />

          </div>)
        }

      </div>
    </div>
    <div className="px-2 lg:px-7 my-[4rem] w-full flex flex-col">
      <h2 className="w-full mt-7 lg:mt-0 text-center text-xl font-bold font-title uppercase mb-3">Supported Payment Methods</h2>
      <div className="flex flex-row flex-wrap gap-8 justify-center items-center">
        <img src="/images/Visa.png" alt="Visa" className="h-7 w-auto" />
        <img src="/images/Mastercard.png" alt="Mastercard" className="h-[3.7rem] w-auto" />
        <img src="/images/AmericanExpress.png" alt="American Express" className="h-[3.2rem] w-auto" />
        <img src="/images/Discover.png" alt="Discover" className="h-5 w-auto" />
        <img src="/images/mtn.png" alt="MTN Mobile Money" className="h-12 w-auto" />
        <img src="/images/Airtel.png" alt="Airtel Mobile Money" className="h-11 w-auto" />
        <img src="/images/barter.svg" alt="Barter" className="h-8 w-auto" />
      </div>
    </div>
    <div className="mx-auto w-full mb-7 max-w-md rounded-xl mt-5 bg-gray-200 border-1 border-darkBase flex flex-col p-5 font-semibold ">
      <table className="mb-7">
        <tbody>
          <tr>
            <td>SUBTOTAL :</td>
            <td>{Format.currency(subtotal)}</td>
          </tr>
          <tr>
            <td>TRANSACTION FEE :</td>
            <td>{Format.currency(fee)}</td>
          </tr>
          <tr>
            <td>TOTAL :</td>
            <td>{Format.currency(subtotal + fee)}</td>
          </tr>
        </tbody>
      </table>
      <button title="button" onClick={() => {
        typeof delivery !== "undefined" &&
          delivery == true ?
          handleDeliverySubmit()
          :
          handlePickUpSubmit()
      }} className="py-2 uppercase rounded-xl mx-auto text-center px-10 bg-gum border-gray border text-rose">
        Place Order & Pay
      </button>
    </div>
    <div className="flex flex-row items-center mb-[7rem] font-title justify-center font-semibold gap-2 mt-1">
      HANDLED BY <img src="/images/Flutter.svg" alt="" className="h-6 w-auto" />
    </div>
    <Map />
    <Footer />
  </div>
  )
}

