// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from 'next-auth/react'
import { AccountController } from '../../../controllers/AccountController'
import { APIResponse } from '../../../types'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<APIResponse>
) {
    const session = await getSession({ req })
    let { id } = req.query

    if(session){

        if(!(typeof id === 'string')){
            id = id[0];
        }

        const response = await AccountController.getProfile(id)
        
        res.send(response)
    }
    else
    {
        res.send({
            success: false,
            data: "Unauthorized to access"
        })
    }
}
