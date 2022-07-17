import { Icon } from "@iconify/react"
import { Layout, SectionTitle } from "../../components"

export const HelpPage = () => {
    return(<Layout>
        <div className="relative flex flex-col md:flex-row md:items-end justify-center gap-4 h-[15rem] md:h-[26rem] bg-[#fceeca]">
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
            <div className="w-[60rem] font-p p-5 mx-auto m-5 shadow-lg shadow-gray-300 rounded-lg">
                <form action="">
                    <div className="flex flex-row justify-evenly my-4">
                        <div className="w-1/3">
                            <input 
                                type="text" 
                                id="name" 
                                className="w-23 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" 
                                placeholder="Full Name..." 
                                required 
                            />
                        </div>
                        <div className="w-1/3">
                        <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected>Choose a category</option>
                            <option value="US">Account</option>
                            <option value="CA">Billing</option>
                            <option value="FR">Website Management</option>
                            <option value="FR">Order or Sales</option>
                            <option value="FR">Delivery</option>
                            <option value="DE">Other</option>
                        </select>
                        </div>
                    </div>
                    <div className="flex flex-row justify-evenly my-4">
                        <div className="flex items-center mr-4">
                            <input 
                                id="inline-radio" 
                                type="radio" 
                                value="" 
                                name="inline-radio-group" 
                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            />
                            <label htmlFor="inline-radio" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email</label>
                        </div>
                        <div className="flex items-center mr-4">
                            <input 
                                id="inline-radio" 
                                type="radio" 
                                value="" 
                                name="inline-radio-group" 
                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            />
                            <label htmlFor="inline-radio" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Whatsapp</label>
                        </div>
                    </div>
                    <div className="w-5/12 my-4 mx-auto">
                        <div className="relative mb-6">
                            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                            </div>
                            <input type="text" id="input-group-1" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter you email" />
                        </div>
                    </div>
                    <div className="w-2/3 mx-auto my-4">                
                        <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your questions:</label>
                        <textarea 
                            id="message" 
                            rows={4} 
                            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                            placeholder="Your inquiry..."
                        >
                        </textarea>
                    </div>
                    <div className="w-1/2 mx-auto my-4">
                        <button className="uppercase font-title font-semibold py-1 w-full bg-gum rounded-full text-lg">
                            Submit
                        </button>
                    </div>

                </form>
            </div>
        </div>

    </Layout>)
}