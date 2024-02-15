import logo from "../assets/logo.png";


function Footer () {

    return (
  <footer className="fixed-bottom bg-white rounded-lg shadow dark:bg-gray-900 w-full text-center">
    <div className="w-full p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-center">
            <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                <img src={logo} className="h-8" alt="Logo" />
                <span className="self-center text-2x0.5 font-semibold whitespace-nowrap dark:text-white">Rental Company</span>
            </a>
            <hr className="my-3 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="https://github.com/" className="hover:underline">GitHub</a></span>
        </div>
  
    </div>
  </footer>


    
    )
}

export default Footer;