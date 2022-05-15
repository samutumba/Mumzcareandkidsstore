import Link from "next/link";
import { BsFacebook, BsInstagram, BsYoutube } from "react-icons/bs";

export const Footer = () => {
    return (
      <footer className="footer  font-title footer-center p-10 rounded">
        <div className="grid grid-flow-col gap-4">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div>
          <div className="grid text-3xl grid-flow-col gap-4">
            <a>
              <BsFacebook />
            </a>
            <a>
              <BsInstagram />
            </a>
            <a>
              <BsYoutube />
            </a>
          </div>
        </div>
        <div>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by
            Mumzcare
          </p>
        </div>
      </footer>
    );
}