// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import dbConnect from "./../../../utils/dbConnect";
import Product from "../../../models/Product";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {method} = req;
  dbConnect()

  if(method === "GET"){
    try{
      const products = await Product.find({});
      res.status(200).json({ success:true, data:products })
    }catch(err){
      res.status(500).json({ success:false })
    }
  }
  if(method === "POST"){
    try{
      const product = await Product.create(req.body);
      res.status(201).json({ success:true, data:product })
    }catch(error){
      res.status(500).json({ success:false, error:error})
    }

  }
  
}
