import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import hero from "../assets/hero.png";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="min-h-screen flex flex-col w-full bg-gray-900">
      <Navbar />
      <div className="flex-grow flex items-center justify-center">
        <div className=" px-4 lg:px-0 w-full">
          <div className="flex flex-wrap items-center">
            <div className="w-full lg:w-1/2">
              <div className="max-w-2xl mb-8 m-20">
                <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-4xl xl:leading-tight dark:text-white">
                Welcome to UrbNest: Your Premier Destination for Exceptional Living</h1>
                <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
                  At UrbNest, we redefine the standards of modern living, offering unparalleled comfort, style, and convenience in every rental apartment. Step into a world where every detail is meticulously crafted to elevate your lifestyle.
                </p>

                <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
                  <Link to="/rentals"
                    target="_blank"
                    rel="noopener"
                    className="px-8 py-4 text-lg font-medium text-center text-white bg-orange-500 rounded-md"
                  >
                    Check Out Our Rentals
                  </Link>
              
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="">
                <img
                  src={hero}
                  className="object-cover w-full"
                  alt="Hero Illustration"
                  loading="eager"
                  placeholder="blur"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
