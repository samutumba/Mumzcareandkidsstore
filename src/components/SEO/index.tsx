import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom"

export const SEO = ({ title, description, image, keywords }: { title: string, description?: string, image?: string , keywords?: string[] }) => {

 const location = useLocation()
 
 return (<Helmet>
  <title>{title}</title>
  {
   description &&
   <meta name="description" content={description} />
  }
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:image" content={image} />
  <meta
   name="twitter:title"
   content={title}
  />
  <meta name="twitter:creator" content="@diepsteph" />
  <meta name="twitter:site" content="@diepsteph" />
  <meta
   name="twitter:description"
   content={description}
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content={"https://www.mumzcareandkidsstore.com"+location.pathname} />
  <meta
   property="og:title"
   content={ title }
  />
  <meta
   property="og:description"
   content={description}
  />
  <meta
   property="og:image"
   content={image}
  />
 </Helmet>)
}