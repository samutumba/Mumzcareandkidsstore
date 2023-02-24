import { Accordion, Checkbox, Label } from "flowbite-react"
import React, { useCallback, useEffect, useState } from "react"
import { useRecoilState } from "recoil"
import { searchState, sortState } from "../../atoms"
import { ISort,ACategory, determineSubCategories, minPriceOptions, maxPriceOptions  } from "../../types"
import CreatableSelect from 'react-select/creatable';
import { ActionMeta, OnChangeValue } from 'react-select';
import { Format } from "../../utils/formatter"

export const FilterOptions = () => {
  const [filter, setFilter] = useRecoilState(searchState)
  const [categories, setCategories] = useState(filter.category || [])
  const [subCategories, setSubCategories] = useState<string[]>(filter.subCategory || [])
  const [selectedSubCategories, setSelectedSubCategories] = useState(filter.subCategory || [])
  const [minPrice, setMinPrice] = useState(filter.minPrice || 0)
  const [maxPrice, setMaxPrice] = useState(filter.minPrice)
  const [minAge, setMinAge] = useState(filter.minAge)
  const [maxAge, setMaxAge] = useState(filter.maxAge)

  const addCategory = useCallback((value: string) => {

    if (!categories.includes(value)) {
        setCategories([...categories, value])

        setFilter({ ...filter, category: [...categories, value] })
    } else {
      let newCategories = categories.filter((c) => c != value)
      if (newCategories.length == 0) { 
          setCategories([])
          setFilter({...filter, category: undefined})
        } else {
          setCategories(newCategories)
          setFilter({...filter, category: newCategories})
      }
      
    }
  
    
  }, [filter, setFilter, categories, ACategory])

  const changeSubCategory = useCallback((value: string) => {

    if (!selectedSubCategories.includes(value)) {
        setSelectedSubCategories([...selectedSubCategories, value])

        setFilter({ ...filter, subCategory: [...selectedSubCategories, value] })
    } else {
      let newCategories = selectedSubCategories.filter((c) => c != value)
      if (newCategories.length == 0) { 
          setSelectedSubCategories([])
          setFilter({...filter, subCategory: undefined})
        } else {
          setSelectedSubCategories(newCategories)
          setFilter({...filter, subCategory: newCategories})
      }
      
    }
  
    
  }, [filter, setFilter, selectedSubCategories, ACategory])

  const changeMaxPrice = useCallback((value: any) => {
 
  }, [])

  const changeMinimumAge = useCallback((value: number) => {
    
  }, [])

   
  useEffect(() => {
    let subCat: string[] = []
    categories.forEach((cat) => {
      //let subCate = subCat
      const s = determineSubCategories(cat)
      const filtered = s.filter((newS) => !subCat.includes(newS) )
      subCat = subCat.concat(filtered)
    })

    subCat.sort()
    setSubCategories(subCat)

    
    
  }, [categories])

  useEffect(() => {
    selectedSubCategories.forEach((selected) => {
      if (!subCategories.includes(selected)) {
        changeSubCategory(selected)
      }
    })
  }, [subCategories])

 return (<div className=" bg-[#FCFBFB] font-p h-full w-full rounded-lg">
  <h3 className="text-gray-500 ml-6 font-title text-lg font-semibold">
    Filter
   </h3>
   <Accordion flush={true} alwaysOpen>
  <Accordion.Panel>
    <Accordion.Title className="font-title">
      Category
    </Accordion.Title>
    <Accordion.Content>
      { ACategory.map((category, i) => <div key={i} className="flex items-center gap-2">
    <Checkbox
      id={category+i}
      defaultChecked={categories.includes(category)}
          onClick={(e) => {
        addCategory(category)
      }}    
    />
    <Label htmlFor={category+i}>
      {category}
    </Label>
  </div>)}
    </Accordion.Content>
     </Accordion.Panel>
     <Accordion.Panel>
    <Accordion.Title className="font-title">
      Sub Category
    </Accordion.Title>
       <Accordion.Content className="flex flex-col gap-2">
         {subCategories.length === 0 && <div className="text-center text-xs">Select atleast one category above first</div>}
      { subCategories.map((category, i) => <div key={i} className="flex items-center gap-2">
    <Checkbox
      id={category+i}
      defaultChecked={selectedSubCategories.includes(category)}
          onClick={(e) => {
        changeSubCategory(category)
      }}    
    />
    <Label htmlFor={category+i}>
      {category}
    </Label>
  </div>)}
    </Accordion.Content>
     </Accordion.Panel>
     <Accordion.Panel>
    <Accordion.Title className="font-title">
      Price
    </Accordion.Title>
       <Accordion.Content>
         <EditPrice />
    </Accordion.Content>
     </Accordion.Panel>
     <Accordion.Panel>
    <Accordion.Title className="font-title">
      Age
    </Accordion.Title>
       <Accordion.Content>
         <EditAge />
    </Accordion.Content>
     </Accordion.Panel>
     <Accordion.Panel>
    <Accordion.Title className="font-title">
      Other
    </Accordion.Title>
       <Accordion.Content className="flex flex-col gap-4">
         <div className="flex items-center gap-2">
            <Checkbox
            id={"hasImages"}
            defaultChecked={false}
                onClick={(e) => {
              console.log("clicked")
            }}    
          />
          <Label htmlFor={"hasImages"}>
            Includes Images
          </Label>
         </div>
         <div className="flex items-center gap-2">
            <Checkbox
            id={"hasImages"}
            defaultChecked={false}
                onClick={(e) => {
              console.log("clicked")
            }}    
          />
          <Label htmlFor={"hasImages"}>
            Exclude Out of Stock
          </Label>
         </div>
         <div className="flex items-center gap-2">
            <Checkbox
            id={"hasImages"}
            defaultChecked={false}
                onClick={(e) => {
              console.log("clicked")
            }}    
          />
          <Label htmlFor={"hasImages"}>
            Discounted
          </Label>
         </div>
        
    </Accordion.Content>
  </Accordion.Panel>

</Accordion>
 </div>)
}

export const SortOptions = () => {
  const [sort, setSort] = useRecoilState(sortState)

  const options = Object.entries(ISort).map(([key, value]) => ({ key, value }));

  const handleChange = useCallback((value: string) => {
    if (ISort.featured === value) {
      setSort(ISort.featured)
    } else if (ISort.newest === value) {
      setSort(ISort.newest)
    } else if (ISort.priceHigh === value) {
      setSort(ISort.priceHigh)
    } else if (ISort.priceLow === value) {
      setSort(ISort.priceLow)
    }
  }, [sort])
  return (<>
<select value={sort} onChange={(e) => handleChange(e.target.value)} id="sortBy" className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-rose focus:border-rose block w-full max-w-[10rem] p-1 h-fit mr-0">
     {options.map((opt, i) => <option key={i} value={opt.value}>{opt.value}</option>)}
</select></>)
}

export const EditPrice = () => {
  const [filter, setFilter] = useRecoilState(searchState)
  const [minPrice, setMinPrice] = useState(filter.minPrice || 0)
  const [maxPrice, setMaxPrice] = useState(filter.maxPrice || 99)

  const changeMinimumPrice = useCallback((label: string, value?: number) => {
      
      setFilter({...filter, minPrice: value})
  }, [minPrice, filter]) 

  const handleChange = (
    newValue: OnChangeValue<{value: number, label: string}, false>,
    actionMeta: ActionMeta<{value: number, label: string}>
  ) => {
    console.group('Value Changed');
    console.log(newValue);
    console.log(`action: ${actionMeta.action}`);
    console.groupEnd();
  };
  const handleInputChange = (inputValue: any, actionMeta: any) => {
    console.group('Input Changed');
    console.log(inputValue);
    console.log(`action: ${actionMeta.action}`);
    console.groupEnd();
  };

  const createOption = (nlabel: string) => ({
  label: Format.currency(parseInt(nlabel)),
  value: parseInt(nlabel),
  });
  
  const handleCreate = (inputValue: string) => {
      const newOption = createOption(inputValue);
  };
  
  return (<div>
     Minimum Price
      <div className="flex items-center w-full gap-2">
           <CreatableSelect
            isClearable
            onChange={handleChange}
            onInputChange={handleInputChange}
            options={minPriceOptions}
            onCreateOption={handleCreate}
            className="w-full"
            placeholder="Minimum Price"
        
           />
        </div>
             Maximum Price
      <div className="flex items-center w-full gap-2">
           <CreatableSelect
             
            isClearable
            onChange={handleChange}
            onInputChange={handleInputChange}
            options={maxPriceOptions}
            onCreateOption={handleCreate}
             className="w-full"
             placeholder="Maximum Price"
      />
      </div>
  </div>)
}

export const EditAge = () => {
   const [filter, setFilter] = useRecoilState(searchState)

  const handleChange = (
    newValue: OnChangeValue<{value: number, label: string}, false>,
    actionMeta: ActionMeta<{value: number, label: string}>
  ) => {
    console.group('Value Changed');
    console.log(newValue);
    console.log(`action: ${actionMeta.action}`);
    console.groupEnd();
  };
  const handleInputChange = (inputValue: any, actionMeta: any) => {
    console.group('Input Changed');
    console.log(inputValue);
    console.log(`action: ${actionMeta.action}`);
    console.groupEnd();
   };
  return (<div>
    Minimum Age
      <div className="flex items-center w-full gap-2">
           <CreatableSelect
            isClearable
            onChange={handleChange}
            onInputChange={handleInputChange}
             options={minPriceOptions}
             className="w-full"
             placeholder="Mininum Age"
           />
        </div>
             Maximum Age
      <div className="flex items-center w-full gap-2">
           <CreatableSelect
             
            isClearable
            onChange={handleChange}
            onInputChange={handleInputChange}
             options={maxPriceOptions}
             className="w-full"
             placeholder="Maximum Age"
      />
  </div>
  </div>)
}