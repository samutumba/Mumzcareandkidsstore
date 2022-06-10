import Link from 'next/link'
import React, {FC} from 'react'

type page = {
    link: string,
    name: string
}

interface IBreadCrumb {
    items: page[] 
}

export const BreadCrumb: React.FC<IBreadCrumb> = ({items}) => {
    switch (items.length) {
        case 1: 
            return (<div className='text-4xl w-full font-extrabold'>
                {items.map((page) => {
                    return page.name
                })}
            </div>);
            break;
        default: 
            const currentPage: page = items.at(0) || {link: "/", name: "Home"};
            const otherPages = items.slice(1)
            return (<div className='flex flex-col w-full font-title'>
                <div className="text-sm breadcrumbs">
                <ul className='text-black'>
                    <Crumbs items={otherPages}/> 
                </ul>
                </div>
                <div className='text-4xl w-full font-extrabold'>
                    {currentPage.name}
                </div>
            </div>);     
    }
}

const Crumbs: React.FC<IBreadCrumb> =  ({items}) => {
    return (<>
        {
            items.map((page, index)=>{
                return (<li key={index}>
                    <a>{page.name}</a>
                </li>)
            })
        }
    </>)
}