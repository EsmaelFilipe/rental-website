import { Link } from "react-router-dom"
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


function ErrorPage () {
    return (
        <div>
    <Navbar/>
<div className="flex justify-center items-center w-full h-screen">
  <div className="text-center">
    <h3 className="text-white">This property does not exist.</h3>
    <Link to="/">
      <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Return</button>
    </Link>
  </div>
</div>
<Footer/>
</div>
    )
}

export default ErrorPage;