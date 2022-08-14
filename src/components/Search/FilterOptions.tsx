export const FilterOptions = () => {
 return (<div className="bg-gray-100 h-96 w-80 rounded-lg">
  <h3 className="text-gray-500 ml-6 text-lg font-semibold">
    Filter
  </h3>
 </div>)
}

export const SortOptions = () => {
 return(<>
<select id="sortBy" className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-rose focus:border-rose block w-full max-w-[10rem] p-1 h-fit mr-0">
  <option selected>Featured</option>
  <option value="US">Price (Low to High)</option>
  <option value="CA">Price (High to Low)</option>
  <option value="FR">Newest</option>
</select></>)
}