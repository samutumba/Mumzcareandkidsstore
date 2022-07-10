import { BsFacebook,BsEnvelope, BsTelephone, BsWhatsapp } from "react-icons/bs";

export const Footer = () => {
    return (
      <footer className="footer text-sm font-semibold font-p bg-gum block footer-center p-10 rounded">
        <div className="flex md:flex-row justify-evenly flex-col">
          <div className="flex flex-col gap-3">
            <a href="/">
              Privacy Policy
            </a>
            <a href="/">
              Terms of Service
            </a>

          </div>
          <div className="flex flex-col md:order-last gap-3">
          <a href="/">
              Cookie Policy
            </a>
            <a href="/">
              Refund Policy
            </a>
          </div>
          <div className="flex flex-col">
            <span className="text-rose text-2xl font-title ">
              Connect with Us
            </span>
            <span className="flex flex-row gap-1 pt-2 text-2xl justify-center">
              <a href="https://www.facebook.com/MumzCareandKidsStore/" target="_blank" rel="noreferrer">
                <BsFacebook />
              </a>
              <a href="https://wa.me/256760742576?text=Hello%20I%20have%20a%20quick%20question">
               <BsWhatsapp />
              </a>
              <a href="/">
              <BsTelephone />
              </a> 
              <a href="mailto:info@mumzcareandkidsstore.com">
              <BsEnvelope />
              </a> 
              
            </span>
          </div>
        </div>
        <div className="pt-2 font-normal">
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by
            Mumzcare
          </p>
        </div>
      </footer>
    );
}