import { Avatar } from "@mui/material";
import { Modal, Rating } from "flowbite-react";

import _ from "lodash";
import moment from "moment";
import { useMemo, useState } from "react";

export const Review: React.FC<{ reviews: any[] }> = ({ reviews }) => {
 const average = useMemo(() => {
  let count = 4.5
  let total = 0
  let sum = reviews.length > 1 ? reviews.length : 1
  reviews.forEach((r) => {
   total += r.rating
  })

  if (total > 0) {
   count = total/sum
  }

  return count;

 }, [reviews])
 return (<div className="bg-gray-50 text-sm lg:text-lg flex flex-col gap-2 rounded-lg p-3 lg:p-8">
  <h3 className="font-title font-semibold text-2xl ">
   Reviews
  </h3>
   <Rating>
    <Rating.Star filled={average > 0.4}/>
    <Rating.Star filled={average > 1.4}/>
    <Rating.Star filled={average > 2.4}/>
    <Rating.Star filled={average > 3.4}/>
    <Rating.Star filled={average > 4.5}/>
    <p className="ml-2 font-medium text-gray-500 dark:text-gray-400">
      {average} out of 5
    </p>
  </Rating>
  <p className=" font-medium text-gray-500 dark:text-gray-400">
    {reviews.length} ratings
  </p>
  <Rating.Advanced percentFilled={reviews.filter(r => r > 4.6).length/reviews.length || 0}>
    5 star
  </Rating.Advanced>
  <Rating.Advanced percentFilled={reviews.filter(r => r > 3.6 && r < 4.5).length/reviews.length || 0}>
    4 star
  </Rating.Advanced>
  <Rating.Advanced percentFilled={reviews.filter(r => r > 2.6 && r < 3.6).length/reviews.length || 0}>
    3 star
  </Rating.Advanced>
  <Rating.Advanced percentFilled={reviews.filter(r => r > 1.6 && r < 2.5).length/reviews.length || 0}>
    2 star
  </Rating.Advanced>
  <Rating.Advanced percentFilled={reviews.filter(r => r > 0 && r < 1.5).length/reviews.length || 0}>
    1 star
  </Rating.Advanced>

 
  <div className="mt-7 flex flex-row flex-wrap">
   <SpecificReview rating={{
    author: {
      name: "Samuel Mutumba"
    },
    createdAt: new Date(),
    title: "Fantasic Product",
    comment: "It was so hard when I had to exclusively pump try to keep up my breastmilk for my baby my supply started to drop around her first birthday and it was a great peace of mind to find a formula that did not have all the typical junk in it especially that it is goats milk.This formula has been incredibly easy and affordable to use but most importantly I did not have to order overseas to get goats milk formula that is clean and still has a decent shelflife. We use a can a week.",
    rating: 3.5
    }} />
  </div>
 </div>)
}

export const SpecificReview: React.FC<{ rating: any }> = ({rating}) => {
 const [open, setOpen] = useState(false)
 return (<div>
  <button className="flex flex-row gap-2 items-center text-sm justify-evenly flex-wrap" onClick={() => {setOpen(!open)}}>
   <div className="flex flex-col gap-1 ">
    <span className="flex gap-2 p-5 items-center">
     <Avatar alt={rating.author?.name} src={`https://avatars.dicebear.com/api/initials/${rating.author?.name}.svg`} />
   {_.truncate(rating.author?.name, {
    'length': 13,
   })}</span>
    
   </div>
   <div className="w-96 text-left flex flex-col gap-2">
    <h3 className="w-full flex items-center justify-between font-semibold font-title text-md">
     {rating.title}
    <span className="text-xs font-p font-medium text-gray-400">{ moment(rating.createdAt).fromNow() }</span>
    </h3>
    <div>
     <Rating>
    <Rating.Star filled={rating.rating > 0.4}/>
    <Rating.Star filled={rating.rating > 1.4}/>
    <Rating.Star filled={rating.rating > 2.4}/>
    <Rating.Star filled={rating.rating > 3.4}/>
    <Rating.Star filled={rating.rating > 4.5}/>
    <p className="ml-2 font-medium text-gray-500 dark:text-gray-400">
      {rating.rating} out of 5
    </p>
  </Rating>
    </div>
    <p>{_.truncate(rating.comment, {
    'length': 100,
   })}</p>
    
   </div>
  </button>
  <Modal
    show={open}
    size="lg"
    popup={true}
    onClose={()=>setOpen(!open)}
  >
    <Modal.Header />
    <Modal.Body>
      <div className="flex flex-col gap-2 font-p">
    <span className="flex gap-2  items-center">
     <Avatar alt={rating.author?.name} src={`https://avatars.dicebear.com/api/initials/${rating.author?.name}.svg`} />
   {rating.author?.name}</span>
    <div className="w-96 text-left flex flex-col gap-2">
    <h3 className="w-full flex flex-col justify-between font-semibold font-title text-2xl">
     {rating.title}
    <span className="text-xs font-p font-medium text-gray-400">{ moment(rating.createdAt).fromNow() }</span>
      </h3>
      <Rating>
    <Rating.Star filled={rating.rating > 0.4}/>
    <Rating.Star filled={rating.rating > 1.4}/>
    <Rating.Star filled={rating.rating > 2.4}/>
    <Rating.Star filled={rating.rating > 3.4}/>
    <Rating.Star filled={rating.rating > 4.5}/>
    <p className="ml-2 font-medium text-gray-500 dark:text-gray-400">
      {rating.rating} out of 5
    </p>
  </Rating>
    <p className="text-sm text-gray-500 ">{rating.comment}</p>
    
   </div>
   </div>
   
    </Modal.Body>
  </Modal>
 </div>
 )
}