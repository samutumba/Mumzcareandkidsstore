import Cors from 'cors'
import { NextApiRequest, NextApiResponse } from 'next'

// Initializing the cors middleware
export const cors = Cors({
    origin: 'https://mumzcareandkidsstore.com',
    methods: ['GET', 'DELETE', 'POST', 'HEAD'],
})

// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
function runMiddleware(req: NextApiRequest, res: NextApiResponse, fn: (arg0: any, arg1: any, arg2: (result: any) => void) => void) {
    return new Promise((resolve, reject) => {
        fn(req, res, (result) => {
            if (result instanceof Error) {
                return reject(result)
            }

            return resolve(result)
        })
    })
}

export function runCorsMiddleware(req: NextApiRequest, res: NextApiResponse){
    return runMiddleware(req, res, cors);
}