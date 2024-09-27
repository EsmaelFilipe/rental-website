import logo from "../assets/logo.png";
import profile from "../assets/profile.png"
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="dark:bg-gray-900 text-white h-15 shadow-md top-0 left-0 w-full">
      <div className="flex h-20 items-center px-1 w-full">
        <div className="flex items-start w-auto">
          <Link to='/'><button className="flex text-l bg-gray-900">
            <img src={logo} alt="Logo" className="h-12 w-auto bg-gray-900" />
          </button></Link>
        </div>
        <div className="flex justify-start w-1/2 text-center">
          <Link to='/'><span className="text-2xl">UrbNest</span></Link>
        </div>
        <div className="flex-grow"></div> 
        <div>
          <ul className="flex justify- mb-6 text-gray-500 sm:mb-0 dark:text-gray-400 w-auto">
            <li>
              <Link to='/about' className="list-items hover:underline pr-10 text-xl">About</Link> 
            </li>
            <li>
              <Link to="/contact"><p href="#" className="list-items hover:underline pr-10 text-xl">Contact</p></Link>
            </li>
            <li>
            <Link to="/admin"><a href="#"> <img className="profile-logo hover:bg-orange-500 rounded-lg" src={profile} alt=""/></a></Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
