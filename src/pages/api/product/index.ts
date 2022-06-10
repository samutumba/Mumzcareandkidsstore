// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import dbConnect from "./../../../utils/dbConnect";
import {Product} from "../../../models/Product";
import { IProduct } from "./../../../models/Product";
import { runCorsMiddleware } from '../../../middleware';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await runCorsMiddleware(req, res);
  
  const {method} = req;
  
  if(method === "GET"){
     await dbConnect();
    try{
      const products = await Product.find();
      console.log(products);
      res.status(200).json({ success:true, data:products })
    }catch(err){
      res.status(500).json({ success:false, error: err })
    }
  }
  if(method === "POST"){
     await dbConnect();
    try{
      const product = new Product(req.body);
      await product.save();
      res.status(201).json({ success:true, data:product })
    }catch(error){
      res.status(400).json({ success:false, error:error})
    }
  }
  
}
