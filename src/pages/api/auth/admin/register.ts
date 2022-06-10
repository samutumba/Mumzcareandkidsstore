// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { runCorsMiddleware } from '../../../../middleware'
import { APIResponse } from '../../../../types'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<APIResponse>
) {
    await runCorsMiddleware(req, res);

    const {name, password, phone, role, email} = req.body
    
    try{



    }catch(e){
        res.status(400).json(
            {
                success: false,
                data: "Creation failed"
            }
        )

    }

}
