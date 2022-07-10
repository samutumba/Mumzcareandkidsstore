
export const SectionTitle: React.FC<{title: string}> = ({title}) => {
    return(<>
         <div className="flex flex-row justify-center my-5 text-2xl">
            <h3 className="text-ocean my-2 text-center font-semibold underline underline-offset-8 decoration-gold decoration-dotted decoration-8">
                &nbsp; &nbsp;&nbsp;{" "+title}
            </h3>
        </div>
    </>)
}