import logo from "../assets/logo.png"

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
          <span className="text-xl">Rental Company</span>
        </div>
        <div className="flex-grow"></div> 
        <div>
          <ul className="flex justify-end mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a href="#" className="hover:underline pr-8 text-lg">About</a> 
            </li>
            <li>
              <a href="#" className="hover:underline pr-8 text-lg">Contact</a>
            </li>
            <li>
              <a href="#" className="hover:underline pr-8 text-lg">Placeholder</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
