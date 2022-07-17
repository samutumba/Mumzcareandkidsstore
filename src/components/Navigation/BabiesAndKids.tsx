import { useLocation } from "react-router-dom"
import { Popover, Transition } from '@headlessui/react'
import { useState } from 'react'

export const BabiesAndKids = () => {
  const location = useLocation()  
  
  const isPage = location.pathname === "/category/babies-and-kids"
 
  return (
    <Popover className="relative">
        <Popover.Button className={isPage ? "uppercase text-rose outline-none" : "uppercase outline-none"}>
          BABIES &amp; KIDS
        </Popover.Button>

      <Popover.Panel className="absolute z-10">
        <div className="w-[50rem] m-5 h-[20rem] bg-white rounded-lg">
            
        </div>
      </Popover.Panel>
    </Popover>)
 }