import Cookies from 'js-cookie'
import { useCallback, useEffect, useState } from 'react'
import { Icon } from '@iconify/react';
import { Modal } from "flowbite-react"
import { useRecoilState } from 'recoil';
import { acceptedState } from '../../atoms';
import { Link } from "react-router-dom";


export const CookieBanner = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [accepted, setAccepted] = useRecoilState(acceptedState)


    useEffect(() => {
        //const acceptedCookies = Cookies.get('cookiePermission');
        if (!accepted)
        {
            setIsOpen(true)
        } else
        {
            setIsOpen(false);
        }
    }, [accepted])

    const acceptCookies = () => {
        setIsOpen(false);
        setAccepted(true);
        //Cookies.set('cookiePermission', 'true');
    }

    // function denyCookies(){
    //     setIsOpen(false);
    //     Cookies.remove('cookiePermission');
    // }

    if (isOpen)
    {
        return <>
            <Modal
                show={isOpen}
                size="7xl"
                position="bottom-center"
                popup={true}
            >
                <Modal.Body>
                    <div className="space-y-3 flex flex-col md:flex-row pt-3 pb-2">
                        <div className="flex flex-row  md:flew-col flex-wrap">
                            <h2 className="font-title text-center text-4xl font-bol mx-2">
                                Your Privacy
                            </h2>
                            <p className="font-p text-md mx-2">
                                By continuing on this platform, you agree to our use of cookies to provide a highly individualized user experience. <br />
                                For more information be sure to check out our <Link to="/help/privacy-policy" className='underline'>privacy policy</Link>, <Link to="/help/cookie-policy" className='underline'>cookie policy</Link> and just for good measure our <Link to="/help/terms-of-service" className='underline'>terms of service</Link> as well <br />
                            </p>
                        </div>
                        <button title="button"
                            type="button"
                            className="bg-rose mt-2 items-center w-auto max-h-96 flex justify-center text-center flex-row rounded-lg text-xl px-5 py-2.5 mr-2 mb-2 flex-nowrap text-white"
                            onClick={acceptCookies}
                        >
                            <Icon icon="iconoir:half-cookie" className='-mb-1 text-3xl' />&nbsp;
                            <p>ACCEPT</p>
                        </button>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    }

    return (<></>)
}