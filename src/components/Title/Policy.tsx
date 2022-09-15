import React from "react"

export const HelpTitle: React.FC<{children: React.ReactNode}> = (props) => {
 return (<div className=" bg-[#fceeca] h-[15rem] flex items-center mb-12 px-6 lg:px-12 text-5xl font-bold font-title">
  {props.children}
 </div>)
}