import React , { FC } from "react"
import Head from "next/head";

interface IMetaProps {
    title?: string,
    socialTitle?: string,
    socialDesc?: string,
    description?: string,
    keywords?: string[],
    robot?: boolean
}

export const Meta: FC<IMetaProps> = ({title, description, keywords, robot, socialTitle, socialDesc}) => {
    let key:string = '';
    if (keywords != undefined){
        key+= keywords.join(",");
    }

    return (
      <>
        <Head>
          <title>{title}</title>
          <meta charSet="UTF-8"></meta>
          <meta property="og:title" content={socialTitle} />
          <meta property="og:description" content={socialDesc} />
          <meta
            property="og:image"
            content="https://example.com/images/cool-page.jpg"
          />
         
          <link rel="icon" href="/favicon.ico" />
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
  title: "Mumzcare",
  description: "Mumzcare",
  keywords: ["baby", "mother", "pregnancy", "maternal"],
  robot: true,
  socialDesc: "",
  socialTitle: "Mumzcare",
};