import { Icon } from "@iconify/react"
import { useForm } from "react-hook-form"
import { useRecoilValue } from "recoil"
import { userState } from "../../atoms"
import { ErrorText, Layout, SectionTitle, TextInput } from "../../components"
import { IInquiryTypes, INewInquiry } from "../../types"
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import PhoneInputWithCountry from "react-phone-number-input/react-hook-form"
import { useCallback, useEffect } from "react"
import { API } from "../../api/https"
import toast from "react-hot-toast"

export const HelpPage = () => {
    return(<Layout>
        <div className="relative w-full flex flex-col md:flex-row md:items-end justify-center gap-4 h-[15rem] md:h-[26rem] bg-[#fceeca]">
            <img 
                src="/images/Puzzle-piece.png" 
                alt="" 
                className="absolute inset-x-0 z-1 top-0 w-full object-fill h-[4rem] md:h-[8rem]" 
            />
            <span className="w-80 pl-6 md:pl-0 pb-3 md:pb-12 text-4xl font-bold font-title">
                HOW CAN WE HELP?
            </span>
            <span className="w-80  h-[21rem] md:flex hidden">
                <img src="/images/support.svg" alt="" className="self-end" />
            </span>
        </div>
        <div className="w-full m-3">
            <div className="w-full font-title my-[2.7rem]">
                <SectionTitle title="HELP CENTRE" />
            </div>
            <div className="flex flex-row font-p text-center mb-7 mx-9 px-5 flex-wrap gap-7 justify-center">
                <div className="w-[12rem] h-[12rem] flex flex-col justify-center shadow-md shadow-gray-400 mx-2 rounded-2xl">
                    <span className="text-ocean text-6xl mx-auto text-center">
                        <Icon icon="codicon:account" />
                    </span>
                    <span className="uppercase mt-2 text-lg mx-auto font-semibold">
                        Account
                    </span>
                    <span className="text-sm text-center mt-1 mx-auto">
                        Sign in issues?
                    </span>
                </div>
                <div className="w-[12rem] h-[12rem] flex flex-col justify-center shadow-md shadow-gray-400 mx-2 rounded-2xl">
                    <span className="text-ocean text-6xl mx-auto text-center">
                        <Icon icon="teenyicons:money-stack-solid" />
                    </span>
                    <span className="uppercase mt-2 text-lg mx-auto font-semibold">
                        BILLING
                    </span>
                    <span className="text-sm text-center mt-1 mx-auto">
                        For any payment questions?
                    </span>
                </div>
                <div className="w-[12rem] h-[12rem] flex flex-col justify-center shadow-md shadow-gray-400 mx-2 rounded-2xl">
                    <span className="text-ocean text-6xl mx-auto text-center">
                        <Icon icon="bi:globe" />
                    </span>
                    <span className="uppercase mt-2 text-lg mx-auto font-semibold">
                        WEBSITE MANAGEMENT
                    </span>
                    <span className="text-sm mt-1 mx-auto">
                        Sign in issues?
                    </span>
                </div>
                <div className="w-[12rem] h-[12rem] flex flex-col justify-center shadow-md shadow-gray-400 mx-2 rounded-2xl">
                    <span className="text-ocean text-6xl mx-auto text-center">
                        <Icon icon="carbon:delivery" />
                    </span>
                    <span className="uppercase mt-2 text-lg mx-auto font-semibold">
                        Order And Sales
                    </span>
                    <span className="text-sm mt-1 mx-auto">
                        For any delivery, order or return questions?
                    </span>
                </div>
                <div className="w-[12rem] h-[12rem] flex flex-col justify-center shadow-md shadow-gray-400 mx-2 rounded-2xl">
                    <span className="text-ocean text-6xl mx-auto text-center">
                        <Icon icon="ant-design:question-outlined" />
                    </span>
                    <span className="uppercase mt-2 text-lg mx-auto font-semibold">
                        Other
                    </span>
                    <span className="text-sm mt-1 mx-auto">
                        For any inquiries?
                    </span>
                </div>
            </div>
        </div>
        <div className="w-full py-7 m-3">
            <div className="w-full my-[2.7rem]">
                <SectionTitle title="CONTACT US" />
            </div>
                <InquiryForm />
        </div>

    </Layout>)
}

const schema = yup.object({
    name: yup.string().required(),
    category: yup.string().required(),
    type:  yup.string().required(),
    message: yup.string().min(6, "Message must be atleat six characters").required(),
    contact: yup.string().required(), 

}).required();

export const InquiryForm = () => {
    const user = useRecoilValue(userState)

    const { register, handleSubmit,control, reset, watch, setValue, formState: { errors } } = useForm<INewInquiry>({
    mode: "onBlur",
    resolver: yupResolver(schema),
        defaultValues: {
            name: user?.name,
            contact: user?.username,
            type: user?.auth === "whatsapp" ? 'whatsapp' : 'email'
    }
    });
    const current = watch("type")

    useEffect(() => {
        setValue('contact', '')
    }, [current])

    const onSubmit = (data: INewInquiry) => {
        API.createInquiry(data).then(res => {
            toast.success(res.data.message)
            reset()

        }).catch(err => {
            toast.error(err.response.data.message)
        })
    }

    return (
        <div className="w-full font-p p-5 mx-auto m-5 shadow-lg shadow-gray-300 rounded-lg">
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col flex-wrap">
                    <div className="flex flex-row flex-wrap justify-evenly my-4">
                        <div className="w-full lg:w-1/3">
                        <TextInput label="Full Name" type="text" register={register("name")} />
                        {errors.name && <ErrorText message={errors?.name.message} />}
                        </div>
                    <div className="w-full lg:w-1/3">
                        <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Category:</label>
                        <select {...register('category')} ref={register('category').ref} name="category" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-rose focus:border-rose block w-full p-2.5 ">
                            {IInquiryTypes.map((types) => <option key={types} value={types}>{types}</option>
                            )}
                        </select>
                        {errors.category && <ErrorText message={errors?.category.message} />}
                        </div>
                    </div>
                    <div className="flex flex-row flex-wrap justify-evenly my-4">
                        <div className="flex items-center mr-4">
                            <input 
                                id="inline-radio" 
                            type="checkbox" 
                            checked={watch('type') === 'email'}
                                onChange={(e) => setValue('type', 'email')}
                                name="inline-radio-group" 
                                className="w-4 h-4 text-rose bg-gray-100 border-gray-300 focus:ring-rose rounded-lg"
                            />
                            <label htmlFor="inline-radio" className="ml-2 text-sm font-medium text-gray-900 ">Email</label>
                        </div>
                        <div className="flex items-center mr-4">
                            <input 
                                id="inline-radio" 
                            type="checkbox" 
                             checked={watch('type') === 'whatsapp'}
                                onChange={(e) => setValue('type', 'whatsapp')}
                                name="inline-radio-group" 
                                className="w-4 h-4 text-rose bg-gray-100 border-gray-300 focus:ring-rose rounded-lg"
                            />
                            <label htmlFor="inline-radio" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Whatsapp</label>
                        </div>
                    </div>
                    <div className="w-full lg:w-5/12 my-4 mx-auto">
                        <div className="relative mb-6">
                        {
                            current === "whatsapp" ? <>
                                 <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Whatsapp Number:</label>
                            <PhoneInputWithCountry
                                    international    
                                    className="focus:outline-none border-none appearance-none focus:border-none ring-none outline-none"
                                    defaultCountry="UG"
                                    name="contact"
                              control={control}
                               rules={{ required: true }} 
                                 
                                 />
                            </> : <TextInput label="Email" type="email" register={register("contact")} />
                        }
                        {errors.contact && <ErrorText message={errors?.contact.message} />}
                        </div>
                    </div>
                    <div className="w-full lg:w-2/3 mx-auto my-4">                
                        <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Questions / Feedback:</label>
                        <textarea 
                        id="message" 
                        {...register('message')}
                            rows={4} 
                            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-rose focus:border-rose " 
                            placeholder="Your inquiry..."
                        >
                    </textarea>
                    {errors.message && <ErrorText message={errors?.message.message} />}
                    </div>
                    <div className="w-1/2 mx-auto my-4">
                        <button className="uppercase font-title font-semibold py-1 w-full bg-gum rounded-full text-lg">
                            Submit
                        </button>
                    </div>

                </form>
            </div>)
}