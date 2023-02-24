import { Pagination } from "flowbite-react"
import React, { useCallback, useEffect, useMemo, useState } from "react"
import { useRecoilValue, useSetRecoilState } from "recoil"
import { loadingState, searchState, sortState } from "../atoms"
import { Footer, Layout, SearchBar, FilterOptions, SortOptions, ProductPreview } from "../components"
import { useProductQuery } from "../hooks"
import { ProductFilter } from "../utils/filter"
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import { Icon } from '@iconify/react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';

export const SearchPage = () => {
    const filter = useRecoilValue(searchState)
    const sort = useRecoilValue(sortState)
    const setLoading = useSetRecoilState(loadingState)
    const productData = useProductQuery()
    const [entryNum, setEntryNum] = useState<number>(24)
    const [page, setPage] = useState<number>(1)


    const products = useMemo(() => {
        setLoading(true)

        if (!productData.data)
        {
            return []
        } else
        {
            const results = ProductFilter(productData.data, filter, sort)
            setLoading(false)
            return results
        }

    }, [filter, productData, sort])

    const pageItems = useMemo(() => {
        return products.slice((page - 1) * entryNum, ((page - 1) * entryNum) + entryNum)
    }, [products])

    const endItems = useMemo(() => {
        const num = (((page - 1) * entryNum) + (pageItems.length + page))
        if (num > (products.length))
        {
            return products.length
        }
        return num
    }, [pageItems, page])

    useEffect(() => {
        setPage(1);
        console.log(filter)
    }, [filter, sort])


    const startItems = useMemo(() => {
        const num = endItems - pageItems.length
        return (num === 0 ? 1 : num)
    }, [pageItems, page, endItems])

    const onPageChange = useCallback((value: number) => {
        setPage(value)
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        if (endItems >= products.length || value > page)
        {
            return;
        }
        else
        {

        }
    }, [page, setPage, endItems])


    return (
        <Layout>
            <div className="flex flex-col gap-4 w-full  pt-3 pb-3 shadow-lg">
                <SearchBar />
                <FilterModal />
            </div>
            <div className="flex bg-[#FCFBFB] flex-col gap-4 pt-3 justify-center md:flex-row">
                <div className="hidden lg:w-80 lg:block ">
                    <FilterOptions />
                </div>
                <div className="w-full h-full bg-[#FCFBFB] px-2">
                    <SortOptions />
                    <div className="flex h-full min-h-[20rem] justify-center flex-row flex-wrap gap-1">
                        {products.length === 0 ? <span>
                            No Products Match
                        </span> :
                            pageItems.map((pro, i) => <React.Fragment key={i}>
                                <ProductPreview {...pro} />
                            </React.Fragment>)
                        }
                    </div>
                    <div className="flex flex-col mb-7 mt-3 items-center justify-center text-center">
                        <p>Showing {startItems} to {endItems} of {products.length} Items <br /></p>
                        <Pagination
                            currentPage={page}
                            layout="navigation"
                            onPageChange={onPageChange}
                            showIcons={true}
                            totalPages={Math.ceil(products.length / entryNum)}
                        />
                    </div>
                </div>
            </div>
        </Layout>)
}

const Transition = React.forwardRef(function Transition (
    props: TransitionProps & {
        children: React.ReactElement;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export const FilterModal = () => {
    const filter = useRecoilValue(searchState)
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (<div className="w-full">
        <button title="button" className="flex lg:hidden w-fit text-center border border-gray-600 mx-auto py-1 px-[7rem] rounded-full" onClick={handleClickOpen}>
            <Icon icon="bi:filter-left" inline={true} className="text-xl inline" /> Edit Filters {filter.category && "(1)"}
        </button>
        <Dialog
            fullScreen
            open={open}
            onClose={handleClose}
            TransitionComponent={Transition}
            className="bg-gray-100 h-full min-h-screen"
        >
            <div className="relative flex justify-end font-title bg-gray-100 p-3  rounded-t-lg">
                <IconButton
                    edge="start"
                    color="inherit"
                    onClick={handleClose}
                    aria-label="close"
                >
                    Close
                </IconButton>
            </div>
            <div className="w-full h-full flex flex-col justify-center">

                <FilterOptions />
            </div>
        </Dialog>
    </div>)
}