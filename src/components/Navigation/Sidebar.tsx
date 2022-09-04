import { Icon } from "@iconify/react";
import { FC } from "react"
import { SignInButton } from "../Auth/Button";


export const Sidebar = () => {
    return(<div className="relative font-title flex flex-col w-full h-full">
        <div className="w-full h-fit font-semibold py-3 bg-sea text-center uppercase">
            Welcome!!
        </div>
        <div className="mt-9 w-full font-semibold  text-md divide divide-black flex flex-col gap-3">
            <SidebarItem href="/category/babies-and-kids">
                Babies &#38; kids
            </SidebarItem>
            <SidebarItem href="/category/motherhood">
                Motherhood
            </SidebarItem>
            <SidebarItem href="/category/apparel">
                Apparel
            </SidebarItem>
            <div className="border-b py-5 border-darkBase uppercase text-center w-full">
                <SignInButton />
            </div>
        </div>
        <div className="mt-11 flex font-medium justify-center gap-2 items-center text-sm font-p flex-row ">
            <a href="/help" className="hover:font-semibold">Help</a>
            <Icon className="inline text-gold text-md" icon="carbon:dot-mark" />
            <a href="/about" className="hover:font-semibold">About</a>
        </div>
    </div>)
}

const SidebarItem: FC<{href: string, children: React.ReactNode}> = ({href, children}) => {
    
    if(href === "/sign-in"){
        return (<>
            <a href={href} className="border-b pt-5 pb-6 uppercase text-rose text-center w-full">
                {children}
            </a>
        </>)
    }

    return (<>
        <a href={href} className="border-b py-5 border-darkBase uppercase text-center w-full">
            {children}
        </a>
    </>)

}