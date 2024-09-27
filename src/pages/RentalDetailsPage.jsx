import { useParams } from "react-router-dom";
import rentalsData from "../assets/data.json";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function RentalDetailsPage () {
    const {id} = useParams()
    // eslint-disable-next-line react/prop-types

    const foundRental = rentalsData.results.find((rental) => {
        return rental.id == id
    })

    return (
        <div className="flex flex-col min-h-screen w-full">
          <Navbar />
          <div className="flex-grow">
            {foundRental ? (
              <section className="text-white body-font overflow-hidden bg-gray-900 w-full flex justify-center">
                <div className="px-5 py-24">
                  <div className="lg:w-4/5 mx-auto flex flex-wrap">
                    <img
                      className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-900"
                      src={foundRental.picture_url.url}
                    />
                    <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                      <h2 className="text-sm title-font text-gray-500 tracking-widest">
                        {foundRental.city}, {foundRental.country}
                      </h2>
                      <h1 className="text-white text-3xl title-font font-medium mb-1">
                        {foundRental.name}
                      </h1>
                      <div className="flex mb-4">
                        <span className="flex items-center">
                          {[1, 2, 3, 4, 5].map((_, index) => (
                            <svg
                              key={index}
                              fill="currentColor"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              className="w-4 h-4 text-red-500"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                            </svg>
                          ))}
                          <span className="text-gray-600 ml-3">4 Reviews</span>
                        </span>
                      </div>
                      <p className="leading-relaxed">{foundRental.description}</p>
                      <div className="flex items-center">
                        <span className="title-font font-medium text-2xl text-gray-900">
                          ${foundRental.price}
                        </span>
                        <button className="flex ml-auto text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:text-gray-900 rounded">
                          Delete Button
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            ) : null}
          </div>
          <Footer />
        </div>
      );
    }      

export default RentalDetailsPage;