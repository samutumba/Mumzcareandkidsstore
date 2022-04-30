import { FC } from "react"

interface IContainerProps {
    children: any
}

export const Container: FC<IContainerProps> = ({children}) => {
    return(<>
    <div className="container my-auto mx-auto md:max-w-6xl">
        {children}
    </div>
    
    </>)
}