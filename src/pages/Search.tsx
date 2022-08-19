import { Footer, Layout, SearchBar, FilterOptions, SortOptions } from "../components"

export const SearchPage = () => {
    return (
    <Layout>
        <div className="flex flex-col gap-4">
            <SearchBar />
        </div>
        <div className="flex mt-3 flex-col gap-4 lg:mx-16 justify-center md:flex-row">
            <FilterOptions />
            <div className="w-full mx-2">
                <SortOptions />
            </div>
        </div>
    </Layout>)
}