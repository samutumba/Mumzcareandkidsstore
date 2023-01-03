import { HelpTitle, Layout } from "../../components"
import { Icon } from '@iconify/react';
import { Link } from "react-router-dom";

export const TermsOfServicePolicy = () => {
   return (<Layout>
      <HelpTitle>
         Terms Of Service
      </HelpTitle>
      <div className="flex flex-col lg:flex-row gap-4 justify-evenly">
         <div className="lg:w-1/3 px-6 font-title">
            <h4 className="text-2xl font-bold ">Policies</h4>
            <ul className="mt-5">
               <li>
                  <Link to="/policy/terms-of-service" className="hover:bg-ocean hover:text-white text-xl font-semibold text-white bg-rose rounded-lg flex flex-row gap-4 items-center my-2 py-2 px-5">
                     <Icon icon="ic:round-policy" className="inline text-3xl" /> Terms of Service
                  </Link>

               </li>
               <li>
                  <Link to="/policy/privacy-policy" className="flex hover:bg-ocean rounded-lg hover:text-white my-2 py-2 px-5 text-xl font-semibold flex-row gap-4 items-center">
                     <Icon icon="dashicons:privacy" className="inline text-3xl" /> Privacy Policy
                  </Link>

               </li>
               <li>
                  <Link to="/policy/cookie-policy" className="flex text-xl items-center rounded-lg hover:bg-ocean hover:text-white my-2 py-2 px-5 font-semibold flex-row gap-4">
                     <Icon icon="carbon:cookie" className="inline text-3xl" /> Cookie Policy
                  </Link>
               </li>
            </ul>

         </div >
         <article className="my-4 px-3 lg:px-12 prose">
            {/* <h2>Terms of Service</h2> */}
            <p>These Terms of Service govern your use of the website located at <Link to="https://mumzcareandkidsstore.com/">https://mumzcareandkidsstore.com/</Link> and any related services provided by Mumz Care And Kids Store. </p>
            <p>By accessing <Link to="https://mumzcareandkidsstore.com/">https://mumzcareandkidsstore.com/</Link> , you agree to abide by these Terms of Service and to comply with all applicable laws and regulations.If you do not agree with these Terms of Service, you are prohibited from using or accessing this website or using any other services provided by Mumz Care And Kids Store. </p >
            <p>We, Mumz Care And Kids Store, reserve the right to review and amend any of these Terms of Service at our sole discretion. Upon doing so, we will update this page. Any changes to these Terms of Service will take effect immediately from the date of publication. </p>
            <p>These Terms of Service were last updated on 9 May 2022. </p>
            <h3>Limitations of Use</h3>
            <p>By using this website, you warrant on behalf of yourself, your users, and other parties you represent that you will not: </p>
            <ol>
               <li>modify, copy, prepare derivative works of, decompile, or reverse engineer any materials and software contained on this website;</li>
               <li>remove any copyright or other proprietary notations from any materials and software on this website;</li>
               <li>transfer the materials to another person or “mirror” the materials on any other server;</li>
               <li>knowingly or negligently use this website or any of its associated services in a way that abuses or disrupts our networks or any other service Mumz Care And Kids Store provides;</li>
               <li>use this website or its associated services to transmit or publish any harassing, indecent, obscene, fraudulent, or unlawful material;</li>
               <li>use this website or its associated services in violation of any applicable laws or regulations;</li>
               <li>use this website in conjunction with sending unauthorized advertising or spam;</li>
               <li>harvest, collect, or gather user data without the user’s consent; or</li>
               <li>use this website or its associated services in such a way that may infringe the privacy, intellectual property rights, or other rights of third parties.</li>
            </ol>
            <h3>Intellectual Property</h3>
            <p>The intellectual property in the materials contained in this website are owned by or licensed to Mumz Care And Kids Store and are protected by applicable copyright and trademark law. We grant our users permission to download one copy of the materials for personal, non-commercial transitory use. </p>
            <p>This constitutes the grant of a license, not a transfer of title. This license shall automatically terminate if you violate any of these restrictions or the Terms of Service, and may be terminated by Mumz Care And Kids Store at any time. </p>
            <h3>User-Generated Content</h3>
            <p>You retain your intellectual property ownership rights over content you submit to us for publication on our website. We will never claim ownership of your content, but we do require a license from you in order to use it. </p>
            <p>When you use our website or its associated services to post, upload, share, or otherwise transmit content covered by intellectual property rights, you grant to us a non-exclusive, royalty-free, transferable, sub-licensable, worldwide license to use, distribute, modify, run, copy, publicly display, translate, or otherwise create derivative works of your content in a manner that is consistent with your privacy preferences and our Privacy Policy. </p>
            <p>The license you grant us can be terminated at any time by deleting your content or account. However, to the extent that we (or our partners) have used your content in connection with commercial or sponsored content, the license will continue until the relevant commercial or post has been discontinued by us. </p>
            <p>You give us permission to use your username and other identifying information associated with your account in a manner that is consistent with your privacy preferences, and our Privacy Policy. </p>
            <h3>Liability</h3>
            <p>Our website and the materials on our website are provided on an 'as is' basis. To the extent permitted by law, Mumz Care And Kids Store makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property, or other violation of rights. </p>
            <p>In no event shall Mumz Care And Kids Store or its suppliers be liable for any consequential loss suffered or incurred by you or any third party arising from the use or inability to use this website or the materials on this website, even if Mumz Care And Kids Store or an authorized representative has been notified, orally or in writing, of the possibility of such damage. </p>
            <p>In the context of this agreement, &ldquo;consequential loss&rdquo; includes any consequential loss, indirect loss, real or anticipated loss of profit, loss of benefit, loss of revenue, loss of business, loss of goodwill, loss of opportunity, loss of savings, loss of reputation, loss of use and/or loss or corruption of data, whether under statute, contract, equity, tort (including negligence), indemnity, or otherwise. </p>
            <p>Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you. </p>
            <h3>Accuracy of Materials</h3>
            <p>The materials appearing on our website are not comprehensive and are for general information purposes only. Mumz Care And Kids Store does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on this website, or otherwise relating to such materials or on any resources linked to this website. </p>
            <h3>Links</h3>
            <p>Mumz Care And Kids Store has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement, approval, or control by Mumz Care And Kids Store of the site. Use of any such linked site is at your own risk and we strongly advise you make your own investigations with respect to the suitability of those sites. </p>
            <h3>Right to Terminate</h3>
            <p>We may suspend or terminate your right to use our website and terminate these Terms of Service immediately upon written notice to you for any breach of these Terms of Service. </p>
            <h3>Severance</h3>
            <p>Any term of these Terms of Service which is wholly or partially void or unenforceable is severed to the extent that it is void or unenforceable. The validity of the remainder of these Terms of Service is not affected. </p>
            <h3>Governing Law</h3>
            <p>These Terms of Service are governed by and construed in accordance with the laws of Kampala, Uganda. You irrevocably submit to the exclusive jurisdiction of the courts in that State or location. </p>

         </article >
      </div >

   </Layout >)
}