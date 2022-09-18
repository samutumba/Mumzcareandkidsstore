import {Navigate, useNavigate, useParams } from "react-router-dom";
import { OrderedCartView, Footer, SectionTitle, Map } from "../components"
import { IDeliveryStatus, IPaymentType, ISales, IService, IDelivery } from "../types";
import { API } from "../api/https";
import toast from "react-hot-toast";
import { useCallback, useEffect, useMemo, useState } from "react";
import { HiClock } from "react-icons/hi"
import { FiCheckCircle, FiClock } from "react-icons/fi"
import { Badge, Table, Timeline } from "flowbite-react"
import { Icon } from '@iconify/react';
import moment from "moment";
import { Format } from "../utils/formatter";
import { formatPhoneNumber } from 'react-phone-number-input';
import { embedState, loadingState, userState } from "../atoms";
import { useRecoilState, useSetRecoilState, useRecoilValue } from "recoil";
import { Helmet } from "react-helmet-async";

export const OrderPage = () => {
 const [order, setOrder] = useState<ISales | undefined>()
 const [embed, setEmbed] = useRecoilState(embedState)
  const setLoading = useSetRecoilState(loadingState)
  const user = useRecoilValue(userState)
 const navigate = useNavigate()

 const { id } = useParams();

 useEffect(() => {
  if(id){
     API.getSale(id).then(res => {
      setOrder(res.data.sale)
     }).catch(err => {
      setOrder(undefined)
     })
  }

 }, [embed])
  
  const paymentMode = useMemo(() => {
     switch(order?.payment.mode) {
          case IPaymentType.flutterwave:
             return (<><img src="/images/Flutter.svg" alt="" className="h-6 w-auto" /> </>)
         break;
       case IPaymentType.mobileMoney:
             return (<>Mobile Money <img src="/images/mtn.png" alt="MTN Mobile Money" className="h-12 w-auto" />
       <img src="/images/Airtel.png" alt="Airtel Mobile Money" className="h-11 w-auto" /></>)
         break;
       case IPaymentType.cash:
             return (<>Cash: <Icon icon="emojione:money-bag" className="inline"/></>)
         break;
       case IPaymentType.debit:
             return (<>Debit: <Icon icon="logos:visa" className="inline"/><Icon icon="logos:mastercard" className="inline"/></>)
         break;
       case IPaymentType.credit:
             return (<>Credit: <Icon icon="logos:visa" /><Icon icon="logos:mastercard" className="inline"/></>)
         break;
        default: 
          return(<>Mixed: <Icon icon="fxemoji:pinkwallet" className="inline" /></>)
               }
  }, [order]) 

  const completePayment = useCallback(() => {
    if (order) {
      setLoading(true)
      API.getPaymentLink({
        amount: order.payment.amount,
        sale: order._id,
        phonenumber: user?.phone?.at(0) || "+256760742576",
        name: user?.name || "Customer",
        email: user?.email
      }).then(res => {
        setEmbed({...embed, title: "Pay with Flutterwave", link: res.data.data.link, open: true, icon: <img src="/images/Flutterwave.png" alt="flutterwave logo" className="w-auto h-6 mr-5 rounded-full" />, color: "#ff9b00"})
      }).catch(err => {
        toast.error("Problem getting payment link")
      }).finally(() => {
        setLoading(false)
      })
    }
  }, [order])
  
const DeliveryStatus: React.FC<{status: IDeliveryStatus, delivery: IDelivery}> = ({status, delivery}) => {
  switch (status) {
    case IDeliveryStatus.ordered: 
      return (
      <Timeline>
  <Timeline.Item>
    <Timeline.Point icon={FiCheckCircle} />
    <Timeline.Content>
      <Timeline.Time>
        {moment(order?.createdAt).calendar()}
      </Timeline.Time>
      <Timeline.Title>
        Delivery Order Placed
      </Timeline.Title>
      <Timeline.Body>
        <img src="/images/ordered.svg" alt={status} className="h-36 my-2 w-auto mx-auto"/>
      </Timeline.Body>
    </Timeline.Content>
  </Timeline.Item>
  <Timeline.Item>
    <Timeline.Point />
    <Timeline.Content>
      <Timeline.Title>
        Confirmed
      </Timeline.Title>
    </Timeline.Content>
  </Timeline.Item>
  <Timeline.Item>
    <Timeline.Point />
    <Timeline.Content>

      <Timeline.Title>
        Out for Delivery
      </Timeline.Title>
    </Timeline.Content>
  </Timeline.Item>
  <Timeline.Item>
    <Timeline.Point />
    <Timeline.Content>
      <Timeline.Title>
        Delivered
      </Timeline.Title>
    </Timeline.Content>
  </Timeline.Item>
</Timeline>
)
    case IDeliveryStatus.received:
      return (
            <Timeline>
  <Timeline.Item>
    <Timeline.Point icon={FiCheckCircle} />
    <Timeline.Content>
      <Timeline.Title>
        Delivery Placed
      </Timeline.Title>
    </Timeline.Content>
  </Timeline.Item>
  <Timeline.Item>
    <Timeline.Point icon={FiCheckCircle} />
    <Timeline.Content>
       <Timeline.Time>
        {moment(delivery?.updatedAt).calendar()}
      </Timeline.Time>
      <Timeline.Title>
        Confirmed
      </Timeline.Title>
       <Timeline.Body>
        <img src="/images/delivered.svg" alt={status} className="h-36 my-2 w-auto mx-auto"/>
       </Timeline.Body>
    </Timeline.Content>
  </Timeline.Item>
  <Timeline.Item>
    <Timeline.Point />
    <Timeline.Content>

      <Timeline.Title>
        Out for Delivery
      </Timeline.Title>
    </Timeline.Content>
  </Timeline.Item>
  <Timeline.Item>
    <Timeline.Point />
    <Timeline.Content>
      <Timeline.Title>
        Delivered
      </Timeline.Title>
    </Timeline.Content>
  </Timeline.Item>
</Timeline>)
    case IDeliveryStatus.out:
      return (<>
         <Timeline>
  <Timeline.Item>
    <Timeline.Point icon={FiCheckCircle} />
    <Timeline.Content>
      <Timeline.Title>
        Delivery Placed
      </Timeline.Title>
    </Timeline.Content>
  </Timeline.Item>
  <Timeline.Item>
    <Timeline.Point icon={FiCheckCircle} />
    <Timeline.Content>
      <Timeline.Time>
        {moment(delivery?.confirmed).calendar()}
      </Timeline.Time>
      <Timeline.Title>
        Confirmed
      </Timeline.Title>
    </Timeline.Content>
  </Timeline.Item>
  <Timeline.Item>
    <Timeline.Point />
    <Timeline.Content>
      <Timeline.Time>
        {moment(delivery?.timeOut).calendar()}
      </Timeline.Time>
      <Timeline.Title>
        Out for Delivery
      </Timeline.Title>
      <Timeline.Body>
        <img src="/images/onTheWay.svg" alt={status} className="h-36 my-2 w-auto mx-auto"/>
       </Timeline.Body>
    </Timeline.Content>
  </Timeline.Item>
  <Timeline.Item>
    <Timeline.Point />
    <Timeline.Content>
      <Timeline.Title>
        Delivered
      </Timeline.Title>
    </Timeline.Content>
  </Timeline.Item>
</Timeline></>)
    default:
      return (
        <Timeline>
  <Timeline.Item>
    <Timeline.Point icon={FiCheckCircle} />
    <Timeline.Content>
      <Timeline.Time>
        {moment(delivery?.createdAt).calendar()}
      </Timeline.Time>
      <Timeline.Title>
        Delivery Placed
      </Timeline.Title>
    </Timeline.Content>
  </Timeline.Item>
  <Timeline.Item>
    <Timeline.Point icon={FiCheckCircle} />
    <Timeline.Content>
      <Timeline.Time>
        {moment(delivery?.confirmed).calendar()}
      </Timeline.Time>
      <Timeline.Title>
        Confirmed
      </Timeline.Title>
    </Timeline.Content>
  </Timeline.Item>
  <Timeline.Item>
    <Timeline.Point />
    <Timeline.Content>
      <Timeline.Time>
        {moment(delivery?.timeOut).calendar()}
      </Timeline.Time>
      <Timeline.Title>
        Out for Delivery
      </Timeline.Title>
      
    </Timeline.Content>
  </Timeline.Item>
  <Timeline.Item>
    <Timeline.Point icon={FiCheckCircle} />
    <Timeline.Content>
       <Timeline.Time>
        {moment(delivery?.delivered).calendar()}
      </Timeline.Time>
      <Timeline.Title>
        Delivered
      </Timeline.Title>
      <Timeline.Body>
        <img src="/images/outForDelivery.svg" alt={status} className="h-36 my-2 w-auto mx-auto"/>
       </Timeline.Body>
    </Timeline.Content>
  </Timeline.Item>
</Timeline>)
  }
}

 if(!id){
  toast.error("No Sale Found")
  return (<Navigate to="/" />)
 }

  return (<div className="w-full flex flex-col font-p text-black flex-wrap">
    <Helmet>
                <meta charSet="utf-8" />
                <title>{`Order - ${order?.reference}`}</title>
      <meta name="description" content={ `Order Details for the order ${order?.reference}`} />
            </Helmet> 
  <header className="bg-gum w-full py-3 flex justify-center">
   <a href="/" className="p-2 my-2 rounded-lg bg-white">
    <img src="/logo.png" alt="" className="h-[5rem] w-auto" />
   </a>
  </header>
   <div className="w-full my-3 px-3">
         <section className="bg-[#FCFBFB] h-full w-full">
              <span className="m-5 flex flex-col lg:flex-row gap-4 justify-evenly">
               <div className="flex flex-wrap justify-center gap-4 w-full">
                 <div className="relative drop-shadow-xl bg-white rounded-lg w-full max-w-xl p-4">
             <h2 className="w-full mt-7 lg:mt-0  text-xl font-bold font-title uppercase mb-3">Overview</h2>
             <span className="absolute top-2 right-2 w-fit">  <Badge
    color="success"
    icon={HiClock}
  >
    Created: {moment(order?.createdAt).calendar()}
  </Badge></span>
             <Table>
               <Table.Row>
                 <Table.Cell>Reference</Table.Cell>
                 <Table.Cell>{ order?.reference }</Table.Cell>
               </Table.Row>
               {
                 order?.salesman && <Table.Row>
                 <Table.Cell>SalesMan</Table.Cell>
                   <Table.Cell>{order?.salesman}</Table.Cell>
               </Table.Row>
               }
               <Table.Row>
                 <Table.Cell>Type</Table.Cell>
                 <Table.Cell>{order?.sale}</Table.Cell>
               </Table.Row>
               <Table.Row>
                 <Table.Cell>Delivery</Table.Cell>
                 <Table.Cell>{order?.isDelivery ? "True" : "False"}</Table.Cell>
               </Table.Row>
                
           
             </Table>
                   </div>
                 <div className="drop-shadow-xl bg-white rounded-lg w-full max-w-md p-4">
             <span className="flex flex-col gap-2 ">
               <h2 className="w-full mt-7 lg:mt-0 text-center text-xl font-bold font-title uppercase mb-3">Payment</h2>
               <Table hoverable={true}>
                 <Table.Row>
                   <Table.Cell>
                     Mode: 
                   </Table.Cell>
                   <Table.Cell>
                     { paymentMode }
                   </Table.Cell>
                 </Table.Row>
                 <Table.Row>
                   <Table.Cell>
                     Amount:
                   </Table.Cell>
                   <Table.Cell>
                     {order?.payment.amount && Format.currency(order?.payment.amount)}
                   </Table.Cell>
                 </Table.Row>
                 <Table.Row>
                   <Table.Cell>
                     Status:
                   </Table.Cell>
                   <Table.Cell>
                     { order?.paid ? <Badge color="success" size="sm">
                            Paid
                          </Badge>: <Badge color="warning" size="sm">
                            Not Paid
                          </Badge> }
                   </Table.Cell>
                 </Table.Row>
                 {
                  !order?.paid && <Table.Row>
                   <Table.Cell>
                     Pay:
                   </Table.Cell>
                   <Table.Cell>
                     <button onClick={completePayment} className="py-2 px-9 rounded-lg bg-rose text-white uppercase animate-pulse">
                       Complete payment
                    </button>
                   </Table.Cell>
                 </Table.Row>

                 }
                
               </Table>
           </span>     
                 </div>{order?.isDelivery &&
              <div className="drop-shadow-xl relative  bg-white flex flex-col gap-2 rounded-lg w-full max-w-md p-4">
               <h2 className="w-full mt-7 lg:mt-0 text-xl font-bold font-title uppercase mb-3">Delivery</h2>
               {
                 order?.delivery?.map((delivery) =>
                   <div key={delivery._id} className="flex flex-col gap-1 px-1 w-full"><span className="absolute top-2 right-2 w-fit">  <Badge
    color="gray"
    icon={HiClock}
  >
    Last Updated: {moment(delivery.updatedAt).fromNow()}
  </Badge></span>
                     <DeliveryStatus delivery={delivery} status={delivery.status} />
                    <div>
                       <h2 className="w-full text-center text-md font-bold font-title uppercase mb-3">Contact Information</h2>
                       <Table hoverable={true}>
                         <Table.Row >
                            <Table.Cell>
                              Name
                            </Table.Cell>
                            <Table.Cell>
                              {delivery.user.name}
                            </Table.Cell>
                          </Table.Row>
                          <Table.Row >
                            <Table.Cell>
                              Phone Number
                            </Table.Cell>
                            <Table.Cell>
                              {formatPhoneNumber(delivery.user.contact)}
                            </Table.Cell>
                          </Table.Row>
                          <Table.Row >
                            <Table.Cell>
                              District
                            </Table.Cell>
                            <Table.Cell>
                              {delivery.user.district}
                            </Table.Cell>
                          </Table.Row>
                          {
                            delivery.user.town && <Table.Row >
                            <Table.Cell>
                              Town
                            </Table.Cell>
                            <Table.Cell>
                              {delivery.user.town}
                            </Table.Cell>
                          </Table.Row>
                          }
                           {
                            delivery.user.pin &&  <Table.Row >
                            <Table.Cell>
                              Location
                            </Table.Cell>
                            <Table.Cell>
                              <button className="py-3 opacity-75 px-9 bg-[#4285F4] rounded-lg text-sm font-semibold text-white" onClick={() => {
                                window.open(`https://www.google.pl/maps/search/?api=1&query=${delivery.user.pin?.lat},${delivery.user.pin?.lgt}`, '_blank')
                              }}>
                                <Icon icon="logos:google-maps" className="inline text-lg mr-3 "/> Est. Location
                              </button>
                            </Table.Cell>
                          </Table.Row>
                           }
                            <Table.Row >
                            <Table.Cell>
                              Note
                            </Table.Cell>
                            <Table.Cell>
                              {delivery.user.note}
                            </Table.Cell>
                          </Table.Row>
                       </Table>
                       
                       
                       
                       
                       
                      </div>
                   </div>)
               }
             </div>
           }
                 <div className="drop-shadow-xl bg-white rounded-lg w-full max-w-xl p-4">
                    {order?.items.length === 0 ? <div className="flex flex-col gap-2 flex-wrap">
     <h2 className="w-full mt-7 lg:mt-0 text-center text-xl font-bold font-title uppercase mb-3">Items</h2>
      {order?.ordered?.map((item) => <div className="flex-col w-full flex justify-center" key={item._id}>
       <OrderedCartView {...item} />
   </div>)}
    </div> : <div className="flex flex-col gap-2 flex-wrap">
    <h2 className="w-full mt-7 lg:mt-0 text-center text-xl font-bold font-title uppercase mb-3">Items</h2>
     {order?.items?.map((item) => <div className="flex-col w-full flex justify-center" key={item._id}>
       {item.productID.title}
   </div>)}
    </div>}

           </div>
           
          
     </div>

             </span>
            
           </section>

  </div>
   <Map />
  <Footer />
 </div>)
}

