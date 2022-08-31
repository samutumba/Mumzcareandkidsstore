
export const SectionTitle: React.FC<{title: string}> = ({title}) => {
    return(<>
         <div className="flex justify-center items-center my-5 h-fit text-3xl">
            <h3 className="text-ocean my-2 text-center font-title uppercase font-semibold underline underline-offset-8 decoration-gold decoration-dotted decoration-8">
                <span className=" text-white md:inline"></span> {title}
            </h3>
        </div>
    </>)
}

export const ExploreTitle: React.FC<{title: string}> = ({title}) => {
    return(<>
        <div className="flex flex-row justify-between items-center my-5 h-fit text-3xl">
           <span className="hidden lg:block relative h-[6rem] md:h-[10rem]">
               <img src="/images/butterfly-1.png" alt="" className="object-cover h-full w-full" />
           </span>
           <h3 className="text-ocean my-2 text-center font-title font-semibold underline underline-offset-8 decoration-gold decoration-dotted decoration-8">
               <span className=" text-white md:inline"></span> {title}
           </h3>
           <span className="hidden lg:block relative h-[6rem] md:h-[10rem]">
           <img src="/images/butterfly-2.png" alt="" className="object-cover h-full" />
           </span>
       </div>
   </>)
}