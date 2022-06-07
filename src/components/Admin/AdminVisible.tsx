import { useEffect, useState } from "react"
import { isAdmin } from "../../middleware/admin"

export const AdminVisible = (children: any) => {
    const [state, setState] = useState('block')

    useEffect(()=> {

        if(!isAdmin()){
            setState('hidden')
        }

    }, [state])

    return (
        <div className={state}>
            {children}
        </div>
    )
}