import { NextPage } from "next";
import Link from "next/link";
import { Meta } from "../components";

const NotFound: NextPage =()=> {
    return (
      <div className="not-found">
          <Meta 
            title="404 - Not Found"
            robot={false}
          />
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-5xl font-bold">Oops! Sorry</h1>
              <h1 className="text-5xl font-bold">Page Not Found</h1>
              <p className="py-6">
                Seems like you&#39;ve strayed far away \n Unfortunately this page
                doesn&#39;t exist
              </p>
              <Link href="/" passHref>
                <button className="btn btn-primary">Go to Home Page</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
}

export default NotFound