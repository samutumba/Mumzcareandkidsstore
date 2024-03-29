import { BsFacebook, BsEnvelope, BsTelephone, BsWhatsapp } from "react-icons/bs";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (<>
    <div className="h-36 overflow-hidden">
      <img className="border-none h-[9.01rem] object-top scale-110 w-full" alt="" src="data:image/png;base64,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" />
    </div>
    <footer className="footer text-sm font-semibold font-p bg-gum block footer-center p-10 rounded">
      <div className="flex md:flex-row justify-around gap-4 text-left flex-col">
        <div className="flex flex-col gap-4">
          <Link to="/policy/privacy-policy">
            Privacy Policy
          </Link>
          <Link to="/policy/terms-of-service">
            Terms of Service
          </Link>
        </div>
        <div className="flex flex-col md:order-last text-left gap-4">
          <Link to="/policy/cookie-policy">
            Cookie Policy
          </Link>
          <Link to="/help">
            Help
          </Link>
        </div>
        <div className="flex flex-col gap-4">
          <span className="text-rose text-2xl font-title ">
            Connect with Us
          </span>
          <span className="flex flex-row gap-3 pt-2 text-2xl justify-center">
            <a href="https://www.facebook.com/MumzCareandKidsStore/" target="_blank" rel="noreferrer">
              <BsFacebook />
            </a>
            <a href="https://wa.me/256760742576?text=Hello%20I%20have%20a%20quick%20question">
              <BsWhatsapp />
            </a>
            <a href="tel:+256760742576">
              <BsTelephone />
            </a>
            <a href="mailto:info@mumzcareandkidsstore.com">
              <BsEnvelope />
            </a>
          </span>
        </div>
      </div>
      <div className="pt-2 font-normal mt-4">
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by
          Mumz Care & Kids Store
        </p>
      </div>
    </footer></>

  );
}