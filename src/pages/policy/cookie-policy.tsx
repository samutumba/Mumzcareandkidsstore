import { Icon } from "@iconify/react"
import { Layout,HelpTitle } from "../../components"

export const CookiePolicy = () => {
 return (<Layout>
   <HelpTitle>
   Cookie Policy
  </HelpTitle>
   <div className="flex flex-col lg:flex-row gap-4 justify-evenly">
       <div className="lg:w-1/3 px-6 font-title">
          <h4 className="text-2xl font-bold ">Policies</h4>
          <ul className="mt-5">
             <li>
                <a href="/policy/terms-of-service" className="hover:bg-ocean rounded-lg hover:text-white text-xl font-semibold flex flex-row gap-4 items-center my-2 py-2 px-5">
                   <Icon icon="ic:round-policy" className="inline text-3xl" /> Terms of Service
                </a>
                
             </li>
             <li>
                <a href="/policy/privacy-policy" className="flex hover:bg-ocean rounded-lg hover:text-white my-2 py-2 px-5 text-xl font-semibold flex-row gap-4 items-center">
                     <Icon icon="dashicons:privacy" className="inline text-3xl"/> Privacy Policy
               </a>
               
             </li>
             <li>
                <a href="/policy/cookie-policy" className="flex text-white bg-rose rounded-lg hover:bg-ocean hover:text-white text-xl items-center  my-2 py-2 px-5 font-semibold flex-row gap-4">
                   <Icon icon="carbon:cookie" className="inline text-3xl" /> Cookie Policy
                </a>
             </li>
          </ul> 
          
   </div><article className="my-4 px-3 lg:px-12 prose">
<p>We use cookies to help improve your experience of our website at <a href="https://mumzcareandkidsstore.com/">https://mumzcareandkidsstore.com/</a>. This cookie policy is part of Mumz Care And Kids Store&#39;s privacy policy. It covers the use of cookies between your device and our site. </p>
<p>We also provide basic information on third-party services we may use, who may also use cookies as part of their service. This policy does not cover their cookies. </p>
<p>If you don’t wish to accept cookies from us, you should instruct your browser to refuse cookies from <a href="https://mumzcareandkidsstore.com/">https://mumzcareandkidsstore.com/</a>. In such a case, we may be unable to provide you with some of your desired content and services. </p>
<h3>What is a cookie?</h3>
<p>A cookie is a small piece of data that a website stores on your device when you visit. It typically contains information about the website itself, a unique identifier that allows the site to recognize your web browser when you return, additional data that serves the cookie’s purpose, and the lifespan of the cookie itself. </p>
<p>Cookies are used to enable certain features (e.g. logging in), track site usage (e.g. analytics), store your user settings (e.g. time zone, notification preferences), and to personalize your content (e.g. advertising, language). </p>
<p>Cookies set by the website you are visiting are usually referred to as first-party cookies. They typically only track your activity on that particular site. </p>
<p>Cookies set by other sites and companies (i.e. third parties) are called third-party cookies They can be used to track you on other websites that use the same third-party service. </p>
<h3>Types of cookies and how we use them</h3>
<h4>Essential cookies</h4>
<p>Essential cookies are crucial to your experience of a website, enabling core features like user logins, account management, shopping carts, and payment processing. </p>
<p>We use essential cookies to enable certain functions on our website. </p>
<h4>Performance cookies</h4>
<p>Performance cookies track how you use a website during your visit. Typically, this information is anonymous and aggregated, with information tracked across all site users. They help companies understand visitor usage patterns, identify and diagnose problems or errors their users may encounter, and make better strategic decisions in improving their audience’s overall website experience. These cookies may be set by the website you’re visiting (first-party) or by third-party services. They do not collect personal information about you. </p>
<p>We use performance cookies on our site. </p>
<h4>Functionality cookies</h4>
<p>Functionality cookies are used to collect information about your device and any settings you may configure on the website you’re visiting (like language and time zone settings). With this information, websites can provide you with customized, enhanced, or optimized content and services. These cookies may be set by the website you’re visiting (first-party) or by third-party services. </p>
<p>We use functionality cookies for selected features on our site. </p>
<h4>Targeting/advertising cookies</h4>
<p>Targeting/advertising cookies help determine what promotional content is most relevant and appropriate to you and your interests. Websites may use them to deliver targeted advertising or limit the number of times you see an advertisement. This helps companies improve the effectiveness of their campaigns and the quality of content presented to you. These cookies may be set by the website you’re visiting (first-party) or by third-party services. Targeting/advertising cookies set by third-parties may be used to track you on other websites that use the same third-party service. </p>
<p>We use targeting/advertising cookies on our site. </p>

       </article>

  </div>
 </Layout>)
}