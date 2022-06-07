import React from "react"

interface ISectionType {
    children: any,
    title: string
}

export const Section: React.FC<ISectionType> = ({children, title}) => {
    return (
        <div className="py-8 bg-base-100 px-3 text-center">
            <div className="uppercase text-ocean">
                {title}
            </div>
            <div className="my-3">
                {children}
            </div>
        </div>

    )
}