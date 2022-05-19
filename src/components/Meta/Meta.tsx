import React , { FC } from "react"
import Head from "next/head";

interface IMetaProps {
    title?: string,
    description?: string,
    keywords?: string[],
    robot?: boolean
}

export const Meta: FC<IMetaProps> = ({title, description, keywords, robot}) => {
    let key:string = '';
    if (keywords != undefined){
        key+= keywords.join(",");
    }

    return (
      <>
        <Head>
          <title>{title}</title> 
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta
            name="viewport"
            content="width=device-width,initial-scale=1.0"
          ></meta>
          <meta name="description" content={description}></meta>
          <meta
            name="robots"
            content={robot ? "index, follow" : "noindex, nofollow"}
          ></meta>
          <meta name="keywords" content={key}></meta>
        </Head>
      </>
    );
}

Meta.defaultProps = {
  title: "Mumz Care and Kids Store",
  description: "Mumzcare",
  keywords: ["baby", "mother", "pregnancy", "maternal"],
  robot: true,
};