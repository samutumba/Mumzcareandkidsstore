import { useForm, SubmitHandler, useFieldArray, Controller } from "react-hook-form";
import Select from "react-select";
import { ToolTip } from "../ToolTip";
import { MdInfoOutline, MdClose } from "react-icons/md";
import { useEffect, useState, useRef } from "react";
import {useDropzone} from 'react-dropzone';
import Image from "next/image";
import {BsCartPlusFill} from "react-icons/bs"
import CreatableSelect from 'react-select/creatable';

enum ICategory {
    BabiesAndKids = "Babies and Kids",
    MotherHood = "Mother Hood",
    FatherHood = "Father Hood",
    General = "General"
}

const keywordsOptions = [
  {
    label: "Baby",
    value: "baby"
  },
   {
    label: "Mother",
    value: "mother"
  },
   {
    label: "Bibs",
    value: "bibs"
  },
   {
    label: "Clothing",
    value: "clothing"
  },
   {
    label: "Infant",
    value: "infant"
  },
   {
    label: "Medium",
    value: "medium"
  },
   {
    label: "Small",
    value: "small"
  },
   {
    label: "Large",
    value: "large"
  },
   {
    label: "Father",
    value: "father"
  },
   {
    label: "Bottle",
    value: "bottle"
  },
   {
    label: "Milk",
    value: "milk"
  },
   {
    label: "NewBorn",
    value: "newborn"
  },
   {
    label: "Bath",
    value: "bath"
  },
]

enum IBabyCategory {
    OutAndAbout = "Out and About",
    BathTime = "Bath Time",
    BedTime = "Bed Time",
    Gadgets = "Gadgets",
    Apparel = "Apparel",
    Other = "Other",
    HealthCare = "Health Care",
    OralCare ="Oral Care",
    MealTime = "Meal Time",
    BabyFoodAndFormula = "Baby Food and Formula",
    Toys = "Toys",
    Nursery = "Nursery",
    Books = "Books"
    
}

enum IMotherCategory {
  OutAndAbout = "Out and About",
  BathTime = "Bath Time",
  BedTime = "Bed Time",
  Gadgets = "Gadgets",
  Apparel = "Apparel",
  Other = "Other",
  HealthCare = "Health Care",
  OralCare = "Oral Care",
  MealTime = "Meal Time",
  Literature = "Literature",
}

enum IFatherCategory {
  OutAndAbout = "Out and About",
  BathTime = "Bath Time",
  BedTime = "Bed Time",
  Gadgets = "Gadgets",
  Apparel = "Apparel",
  Other = "Other",
  HealthCare = "Health Care",
  OralCare = "Oral Care",
  MealTime = "Meal Time",
  Literature = "Literature",
}

interface IProductInput {
    brand: string,
    title: string;
    description: string;
    images: string[];
    detail: [{
        type: string;
        price: number;
    }];
    quantity: {
        available: number;
        ordered: number;
        sold: number;
    };
    keywords: string[];
    category: string;
    subCategory: string;
}

var details: IDetail[] = new Array();

const babyOptions = new Array();
const motherOptions = new Array();
const fatherOptions = new Array();
const options = new Array();
const categoryOptions = new Array();

for (const [key,value] of Object.entries(ICategory)){
  categoryOptions.push({
    label: value,
    value: value,
  });
}

options.push({
    label: "any",
    value: "any"
})


for (const [key,value] of Object.entries(IBabyCategory)) {
  babyOptions.push({
     label: value,
      value: value
  });
};

for (const [key, value] of Object.entries(IMotherCategory)) {
  motherOptions.push({
     label: value,
    value: value
  });
};

for (const [key,value] of Object.entries(IFatherCategory)) {
  fatherOptions.push({
    label: value,
    value: value,
  });
};

interface IOptionsType {
  label: string;
  value: string;
  __isNew__?: boolean;
}

type valueType = IOptionsType | undefined | string

export const AddProduct: React.FC = () => {
  const { register, handleSubmit, control, watch, setValue, getValues } = useForm<IProductInput>({ mode: "onBlur" });
  const onSubmit: SubmitHandler<IProductInput> = (data) => alert("Something");
  const [subcategory, setSubCategory] = useState(options)
  const {acceptedFiles, getRootProps, getInputProps} = useDropzone();
  
  const files = acceptedFiles.map((file, index) => (
    <li key={index}>
     {index+1}: {file.name} - {file.size} bytes
    </li>
  ));
  
  let category = watch("category");

  useEffect(()=>{

      if (category !== undefined){
        if (category === "Babies and Kids"){
          setSubCategory(babyOptions)
        }else if (category === "Mother Hood"){
          setSubCategory(motherOptions)
        }else if (category === "Father Hood"){
          setSubCategory(fatherOptions)
        }else{
          setSubCategory(options) 
      } 
      
    };
              
  }, [watch, category])

  console.log(getValues("keywords"));
  //Default values for a new product
  //setValue("quantity.ordered", 0);
  //setValue("quantity.sold", 0);

  return (
    <>
      <div className="w-4/5 mx-auto bg-base p-3 rounded-lg">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1 className="font-bold text-4xl text-center font-title m-5">
            <BsCartPlusFill className="inline-block -mt-3 mr-4" />
            Add Product
          </h1>
          <div className="error"></div>
          <div className="flex flex-col flex-wrap gap-4">
            <div>
              <label className="font-bold w-full">
                Images:
                <ToolTip
                  cname="-my-1/2 font-normal tooltip-right"
                  tip="Drop the professional images of the product (select all at once)"
                >
                  <MdInfoOutline />
                </ToolTip>
                <section className="container  ">
                  <div
                    {...getRootProps({
                      className:
                        "dropzone h-28 border-2  border-dashed rounded-lg",
                    })}
                  >
                    <input {...getInputProps()} />
                    <p className="text-center align-middle font-normal">
                      Drag and drop some images here, or click to select image
                      files
                    </p>
                  </div>
                  <aside>
                    <h4>Files: </h4>
                    <ul>{files}</ul>
                  </aside>
                </section>
              </label>
            </div>
            <div>
              <label className="font-bold">
                Brand:
                <input
                  type="text"
                  placeholder="Brand"
                  {...register("brand")}
                  className="input w-full "
                />
              </label>
            </div>
            <div>
              <label className="font-bold w-full">
                Title:
                <ToolTip
                  cname="-my-1/2 font-normal tooltip-right"
                  tip="Enter the title"
                >
                  <MdInfoOutline />
                </ToolTip>
                <input
                  type="text"
                  {...register("title")}
                  placeholder="Title"
                  className="input font-normal w-full"
                />
              </label>
            </div>
            <div>
              <label className="font-bold ">
                Description:
                <ToolTip
                  cname="-my-1/2 font-normal tooltip-right"
                  tip="Enter the description of the product for customers to read"
                >
                  <MdInfoOutline />
                </ToolTip>
                <textarea
                  {...register("description")}
                  className="textarea  w-full"
                  placeholder="Description"
                ></textarea>
              </label>
            </div>
            <div className="flex flex-wrap flex-row">
              <label className="font-bold w-1/2 px-3">
                Category:
                <ToolTip
                  cname="-my-1/2 font-normal tooltip-right"
                  tip="Enter the category that this product belongs to"
                >
                  <MdInfoOutline />
                </ToolTip>
                <Controller
                  control={control}
                  name="category"
                  render={({ field: { onChange, onBlur, value } }) => (
                    <Select
                      instanceId="subC"
                      onChange={(selectedOption: IOptionsType) => {
                        onChange(selectedOption.value);
                      }}
                      onBlur={onBlur}
                      value={categoryOptions.find((c) => c.value === value)}
                      defaultValue="Mother Hood"
                      placeholder="Pick the Category"
                      className="font-normal "
                      options={categoryOptions}
                    />
                  )}
                />
              </label>
              {category && (
                <label className="font-bold w-1/2 px-3">
                  Sub category:
                  <ToolTip
                    cname="-my-1/2 font-normal"
                    tip="Enter the subcategory"
                  >
                    <MdInfoOutline />
                  </ToolTip>
                  <Controller
                    control={control}
                    name="subCategory"
                    render={({ field: { onChange, onBlur, value } }) => (
                      <Select
                        onChange={(selectedOption: IOptionsType) => {
                          onChange(selectedOption.value);
                        }}
                        onBlur={onBlur}
                        value={subcategory.find((c) => c.value === value)}
                        instanceId="subCat"
                        className="font-normal"
                        placeholder="Pick the subcategory"
                        options={subcategory}
                      />
                    )}
                  />
                </label>
              )}
            </div>
            <div></div>
            <div className="flex flex-row flex-wrap">
              <label className=" font-bold w-1/2 px-3">
                Available:
                <ToolTip
                  cname="-my-1/2 font-normal tooltip-right"
                  tip="Enter the number of this product that is available"
                >
                  <MdInfoOutline />
                </ToolTip>
                <input
                  id="quantity.available"
                  type="number"
                  placeholder="Type here"
                  className="input w-full h-10 font-normal max-w-xs"
                  {...register("quantity.available")}
                />
              </label>
              <label className="font-bold w-1/2 px-3">
                Keywords: 
                <Controller
                  control={control}
                  name={`keywords`}
                  defaultValue={[]}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <CreatableSelect
                      instanceId="keywords"
                      value={keywordsOptions.filter((c) => value.includes(c.value))}
                      onChange={(val) => onChange(val.map((c) => c.value))}
                      onBlur={onBlur}
                      className="font-normal rounded-lg"
                      placeholder="Give some keywords"
                      isMulti
                      options={keywordsOptions}
                    />
                  )}
                />
              </label>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};


interface IDetail{
    type: string,
    price: number
}

const Details: React.FC =()=> {
    const [ourDetails, setOurDetails] = useState(details)


    return (
      <>
        {ourDetails.map((detail, i) => (
          <Detail detail={detail} key={i} index={i} />
        ))}
      </>
    );

}

interface IIndividualDetail {
    detail: IDetail,
    index: number
}

const Detail: React.FC<IIndividualDetail> = ({ detail, index }) => {

  function deleteDetails() {
    details.splice(index, 1);
  }

  return (
    <>
      <div className="border-1" key={index}>
        <div className="flex flex-col flex-wrap">
          <h5> Type: {detail.type}</h5>
          <h5> Price: shs.{detail.price}</h5>
        </div>
        <button onClick={deleteDetails}>
          <MdClose />
        </button>
      </div>
    </>
  );
}