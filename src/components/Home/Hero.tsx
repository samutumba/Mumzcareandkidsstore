import Image from "next/image"

interface IHeroProps {
    image: string,
    message: string
}


export const Hero: React.FC<IHeroProps> = ({image, message}) => {
    return (
        <div className='h-[20rem] lg:h-[26rem] w-full absolute'>
            <Image src={image} alt={message} layout={"fill"} objectFit="cover" objectPosition={"center"}/>
            <div className="relative h-full ">
                <div className="absolute bg-blur-sm opacity-100 bottom-5 left-10  text-rose text-3xl lg:text-4xl font-bold underline underline-offset-8 decoration-ocean decoration-dotted decoration-8">
                    &nbsp; &nbsp; &nbsp;{" "+message}
                </div>
            </div>
        </div>
    )
}