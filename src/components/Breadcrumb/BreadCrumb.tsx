import React, { FC } from 'react'
import { Link } from "react-router-dom";
type page = {
    link: string,
    name: string
}

interface IBreadCrumb {
    items: page[]
}

export const BreadCrumb: FC<IBreadCrumb> = ({ items }) => {
    switch (items.length)
    {
        case 1:
            return (<div className='text-4xl w-full font-extrabold'>
                {items.map((page) => {
                    return page.name
                })}
            </div>);
        default:
            const currentPage: page = items.at(0) || { link: "/", name: "Home" };
            const otherPages = items.slice(1)
            return (<div className='flex flex-col w-full font-title'>
                <div className="text-sm breadcrumbs">
                    <ul className='text-black'>
                        <Crumbs items={otherPages} />
                    </ul>
                </div>
                <div className='text-4xl w-full font-extrabold'>
                    {currentPage.name}
                </div>
            </div>);
    }
}

const Crumbs: React.FC<IBreadCrumb> = ({ items }) => {
    return (<>
        {
            items.map((page, index) => {
                return (<li key={index}>
                    <Link to={page.link}>{page.name}</Link>
                </li>)
            })
        }
    </>)
}