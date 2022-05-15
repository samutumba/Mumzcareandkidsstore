import { useForm, SubmitHandler, useFieldArray, Controller } from "react-hook-form";
import Select from "react-select";
import { ToolTip } from "../ToolTip";
import { MdInfoOutline, MdClose } from "react-icons/md";
import { useEffect, useState, useRef } from "react";
import { useDropzone} from 'react-dropzone';
import Image from "next/image";
import {BsCartPlusFill} from "react-icons/bs"
import { RiDeleteBin6Line, RiAddCircleLine, RiRestartLine} from "react-icons/ri"
import CreatableSelect from 'react-select/creatable';
import { Alert, AlertType } from "../Alert";

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

interface IDetailInput{
    segment: string;
    price: number;
}

interface IProductFormInput {
   brand: string,
    title: string;
    description: string;
    images: any[];
    detail: IDetailInput[];
    quantity: {
        available: number;
    };
    keywords: string[];
    category: string;
    subCategory: string;
}

interface IProductInput {
    brand: string,
    title: string;
    description: string;
    images: string[];
    detail: [{
        segment: string;
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
  const { register, handleSubmit, control, watch, formState: { errors }, setValue, reset, getValues } = useForm<IProductFormInput>({
    mode: "onBlur",
    defaultValues: {
      detail: [{ segment: "Default", price: 50000 }]
    }
  });
  const { fields, append, remove } = useFieldArray(
    {
      control, // control props comes from useForm (optional: if you are using FormContext)
      name: "detail", // unique name for your Field Array
    }
  );
  const [subcategory, setSubCategory] = useState(options)
  const {acceptedFiles, getRootProps, getInputProps} = useDropzone( {
    accept: {
      'image/*': []
    }
  });
  
  const files = acceptedFiles.map((file, index) => (
    <li key={index}>
     {index+1}:{} {file.name} - {file.size} bytes
    </li>
  ));


  let category = watch("category");

  function onSubmit(data: any) 
  {
        // display form data on success
        console.log('SUCCESS!! :-)\n\n' + JSON.stringify(data, null, 4));
  }

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
  return (
    <>
      <div className="w-4/5 mx-auto bg-base text-black p-3 rounded-lg">
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
                        " h-28 border-2  border-dashed rounded-lg",
                    })}
                  >
                    <input {...getInputProps()} {...register("images")} accept="images/*" />
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
                {errors.brand?.type === "required" && (
                  <Alert type={AlertType.Error}>Brand is required</Alert>
                )}
                {errors.brand?.type === "maxLength" && (
                  <Alert type={AlertType.Error}>
                    Brand cannot be more than 20 characters
                  </Alert>
                )}
                Brand:
                <input
                  type="text"
                  placeholder="Brand"
                  {...register("brand", { required: true, maxLength: 20 })}
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
                  className="input w-full h-10 font-normal "
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
                      value={keywordsOptions.filter((c) =>
                        value.includes(c.value)
                      )}
                      onBlur={onBlur}
                      className="font-normal rounded-lg"
                      placeholder="Give some keywords"
                      isMulti
                      options={keywordsOptions}
                      onChange={(val) => onChange(val.map((c) => c.value))}
                    />
                  )}
                />
              </label>
            </div>
            <div>
              <label className="font-bold w-full px-3">
                Pricing:
                <ul className="flex flex-row  flex-wrap">
                  {fields.map((detail, index) => (
                    <li key={index} className="flex flex-row flex-wrap w-full">
                      <label className="font-bold w-5/12 px-3">
                        Type:
                        <input
                          {...register(`detail.${index}.segment`)}
                          name={`detail[${index}].segment`}
                          defaultValue={`${detail.segment}`}
                          className="input w-full "
                        />
                      </label>
                      <label className="font-bold w-5/12 px-3">
                        Price: (in Ugandan Shillings (shs))
                        <input
                          {...register(`detail.${index}.price`)}
                          type="number"
                          defaultValue={`${detail.price}`}
                          className="input w-full p-2 "
                        />
                      </label>
                      <button
                        type="button"
                        className="text-3xl hover:text-4xl w-2/12"
                        onClick={() => remove(index)}
                      >
                        <RiDeleteBin6Line />
                      </button>
                    </li>
                  ))}
                </ul>
                <div className="m-auto flex flex-row gap-3 w-10/12">
                  <button
                    className="w-full rounded-md text-white p-2 bg-primary m-4"
                    type="button"
                    onClick={() => {
                      append({ segment: "Default", price: 50000 });
                    }}
                  >
                    <RiAddCircleLine /> Add Price Point
                  </button>
                  <button
                    className="w-full rounded-md text-white p-2 bg-primary m-4"
                    type="button"
                    onClick={() =>
                      reset({
                        detail: [{ segment: "Default", price: 50000 }],
                      })
                    }
                  >
                    <RiRestartLine /> Reset Prices
                  </button>
                </div>
              </label>
            </div>
            <button
              type="submit"
              className="w-full bg-secondary hover:p-4 text-white p-3 text-2xl rounded-lg"
            >
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </>
  );
};