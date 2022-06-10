// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import dbConnect from "./../../../utils/dbConnect";
import Review from "../../../models/Review";
import NextCors from 'nextjs-cors';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await NextCors(req, res, {
      // Options
      methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
      origin: 'https://www.google.com',
      optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
   });

  const {method} = req;
  await dbConnect()
  
  if(method === "GET"){
    try{
      const review = await Review.find({});
      res.status(200).json({ success:true, data:review} )
    }catch(err){
      console.log(err)
      res.status(500).json({ success:false, error: err })
    }
  }
  if(method === "POST"){
    try{
      const review = await Review.create(req.body);
      res.status(201).json({ success:true, data:review})
    }catch(error){
      console.log(error)
      res.status(500).json({ success:false, error:error})
    }

  }
  
}
