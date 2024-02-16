import logo from "../assets/logo.png";
import profile from "../assets/profile.png"
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="dark:bg-gray-900 text-white fixed h-15 shadow-md top-0 left-0 w-full">
      <div className="flex h-20 items-center px-1 w-full">
        <div className="flex items-start w-auto">
          <button className="flex text-l bg-gray-900">
            <img src={logo} alt="Logo" className="h-12 w-auto bg-gray-900" />
          </button>
        </div>
        <div className="flex justify-start w-1/2 text-center">
          <Link to='/'><span className="text-2xl">UrbNest</span></Link>
        </div>
        <div className="flex-grow"></div> 
        <div>
          <ul className="flex justify- mb-6 text-gray-500 sm:mb-0 dark:text-gray-400 w-auto">
            <li>
              <a href="#" className=" list-items hover:underline pr-10 text-xl">About</a> 
            </li>
            <li>
              <a href="#" className="list-items hover:underline pr-10 text-xl">Contact</a>
            </li>
            <li>
            <a href="#"> <img className="profile-logo hover:bg-orange-500 rounded-lg" src={profile} alt=""/></a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
