import { Pagination } from "flowbite-react"
import React, { useCallback, useEffect, useMemo, useState } from "react"
import { useRecoilValue } from "recoil"
import { searchState, sortState } from "../atoms"
import { Footer, Layout, SearchBar, FilterOptions, SortOptions, ProductPreview } from "../components"
import { useProductQuery } from "../hooks"
import { ProductFilter } from "../utils/filter"

export const SearchPage = () => {
    const filter = useRecoilValue(searchState)
    const sort = useRecoilValue(sortState)
    const productData = useProductQuery()
    const [entryNum, setEntryNum] = useState<number>(24)
    const [page, setPage] = useState<number>(1)
    

    const products = useMemo(() => {
        return productData.data ?
         ProductFilter(productData.data, filter, sort) :
        []
    }, [filter, productData, sort])

    const pageItems = useMemo(() => {
        return products.slice((page-1)*entryNum, ((page-1)*entryNum)+entryNum)
    }, [products])
    
    const endItems = useMemo(() => {
        const num = (((page - 1) * entryNum) + (pageItems.length + page))
        if (num > (products.length)) {
            return products.length
        }
        return num
    }, [pageItems, page])

    useEffect(() => {
        setPage(1);
        console.log(filter)
    }, [filter, sort])


    const startItems = useMemo(() => {
        const num =  endItems - pageItems.length
        return (num === 0 ? 1 : num )
    }, [pageItems, page, endItems])

    const onPageChange = useCallback((value: number) => {
        if (endItems >= products.length || value > page){
            return;
        }
        else {
            setPage(value)
            document.getElementById("root")?.scrollTo(0,0)
        }
    }, [page, setPage, endItems])

  
    return (
    <Layout>
        <div className="flex flex-col gap-4 w-full  pt-3 pb-3 shadow-lg">
            <SearchBar />
        </div>
        <div className="flex bg-[#F4F4F4] flex-col gap-4 pt-3 justify-center md:flex-row">
            <FilterOptions />
            <div className="w-full mx-2">
                    <SortOptions />
                    <div className="flex justify-center flex-row flex-wrap gap-[1.5rem]">
                        {products.length === 0 ? <span>
                            No Products Match
                        </span> : 
                            pageItems.map((pro, i) => <React.Fragment key={i}>
                                <ProductPreview {...pro} />
                            </React.Fragment>)
                        }
                        
                    </div>
                    <div className="flex flex-col items-center justify-center text-center">
                        <p>Showing {startItems} to {endItems} of {products.length } Items <br /></p>
                        <Pagination
                            currentPage={page}
                            layout="navigation"
                            onPageChange={onPageChange}
                            showIcons={true}
                            totalPages={products.length % entryNum }
                        />
                        
                    </div>
            </div>
        </div>
    </Layout>)
}