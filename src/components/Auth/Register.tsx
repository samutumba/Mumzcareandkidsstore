import { Button, Modal } from "flowbite-react"
import React, { useEffect } from "react"
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import YupPassword from 'yup-password'
import { ErrorText, TextInput } from "..";
// "With country select" component.
import PhoneInput from 'react-phone-number-input'
import { API } from "../../api/https";
import toast from "react-hot-toast";
YupPassword(yup) // extend yup


const schema = yup.object({
  username: yup.string().required(),
  name: yup.string().required(),
  password: yup.string().label('Password').min(6, "Password must be atleast six digits").required(),
  confirmPassword: yup.string().label('Confirm Password').min(6, "Password must be atleast six digits").oneOf([yup.ref('password'), null], 'Passwords must match').required(),
}).required();

interface IRegister {
  open: boolean,
  setOpen: (value: boolean) => void,
  setLogin: (value: boolean) => void,
  username: string,
  type: "whatsapp" | "email"
}

export const RegisterModal: React.FC<IRegister> = (props) => {
  const { register, handleSubmit, control, setValue, formState: { errors } } = useForm<{
    username: string,
    name: string,
    auth: string,
    password: string,
    confirmPassword: string
  }>({
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: {
    username: string,
    name: string,
    auth: string,
    password: string,
    confirmPassword: string
  }) => {
    if (props.type === "whatsapp")
    {
      API.registerWhatsapp(
        data.name,
        data.username,
        data.password
      ).then(res => {
        toast.success("Successfully Created")
        props.setOpen(false)
        props.setLogin(true)
      }).catch(err => {
        toast.error('Something went wrong')
      })
    }
    else
    {
      API.registerEmail(
        data.name,
        data.username,
        data.password).then(res => {
          toast.success(res.data.message)
          props.setOpen(false)
          props.setLogin(true)
        }).catch(err => {
          toast.error('Something went wrong')
        })
    }

    console.log(data)
  }

  useEffect(() => {
    setValue("username", props.username)
    setValue("auth", props.type)
  }, [props])

  return (
    <React.Fragment>
      <Modal
        show={props.open}
        popup={true}
        size="md"
        onClose={() => props.setOpen(false)}
      >
        <Modal.Header />
        <Modal.Body>
          <form onSubmit={handleSubmit(onSubmit)} className="h-fit flex flex-col w-full">
            <div className="">
              <h2 className="text-3xl font-title font-bold ">Register Account</h2>
            </div>
            <div className="my-2">
              {
                props.type === "whatsapp" ?
                  <div>
                    <label
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                      WhatsApp Number:
                    </label>
                    <PhoneInput

                      international
                      className="focus:outline-none border-none appearance-none focus:border-none ring-none outline-none"
                      defaultCountry="UG"
                      value={props.username}
                      onChange={(value: any) => { }}
                    />
                  </div> :
                  <TextInput
                    label="Email: "
                    type="text"
                    value={props.username}
                    placeholder="e.g Flavia Katamba"
                    disabled

                  />
              }
            </div>
            <div className="my-2">
              <TextInput
                label="Name: "
                type="text"
                register={register('name')}
                placeholder="e.g Flavia Katamba"
              />
              {errors.name && <ErrorText message={errors?.name.message} />}
            </div>
            <div className="my-2">
              <TextInput
                label="Password: "
                type="password"
                register={register('password')}
              />
              {errors.password && <ErrorText message={errors?.password.message} />}
            </div>
            <div className="my-2">
              <TextInput
                label="Confirm Password: "
                type="password"
                register={register('confirmPassword')}
              />
              {errors.confirmPassword && <ErrorText message={errors?.confirmPassword.message} />}
            </div>

            <button title="button"
              className="px-4 self-center py-2 bg-rose my-4 rounded-lg text-white">
              Submit
            </button>
          </form>
        </Modal.Body>
      </Modal>
    </React.Fragment>
  )
}