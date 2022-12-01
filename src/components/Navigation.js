import Logo from '../assets/logo.png';

const Navigation = () => {
  return (
    <div>
      <nav
    className="bg-white px-2 sm:px-4 py-2.5 dark:bg-white fixed w-full z-20 top-0 left-0 border-b h-20">
    <div className="container h-18 flex flex-wrap items-center justify-between mx-auto">
        
            <img src={Logo} className="h-10 w-40 ml-20 mr-3 sm:h-9" alt="Flowbite Logo" />   
       
        <div className="flex md:order-2">
            <button type="button"
                className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-blue-800">
                Connect wallet</button>
            <button data-collapse-toggle="navbar-sticky" type="button"
                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-sticky" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                        clip-rule="evenodd"></path>
                </svg>
            </button>
        </div>
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
            <ul
                className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-white md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-white ">
                <li>
                    <a href="/"
                        className="block py-2 pl-3 pr-4 text-white  rounded md:bg-transparent md:text-purple-700 md:p-0 dark:text-white"
                        aria-current="page">Home</a>
                </li>
                <li>
                    <a href="/"
                        className="block py-2 pl-3 pr-4 text-purple-700 rounded hover:bg-purple-100 md:hover:bg-transparent md:hover:text-purple-700 md:p-0 md:dark:hover:text-purple dark:text-purple-400 dark:hover:bg-purple-700 dark:hover:text-purple-500 md:dark:hover:bg-transparent dark:border-gray-700">Place to stay</a>
                </li>
                <li>
                    <a href="/"
                        className="block py-2 pl-3 pr-4 text-purple-700 rounded hover:bg-purple-100 md:hover:bg-transparent md:hover:text-purple-700 md:p-0 md:dark:hover:text-purple dark:text-purple-400 dark:hover:bg-purple-700 dark:hover:text-purple-500 md:dark:hover:bg-transparent dark:border-gray-700">Blog</a>
                </li>
                <li>
                    <a href="/community"
                        className="block py-2 pl-3 pr-4 text-purple-700 rounded hover:bg-purple-100 md:hover:bg-transparent md:hover:text-purple-700 md:p-0 md:dark:hover:text-purple dark:text-purple-400 dark:hover:bg-purple-700 dark:hover:text-purple md:dark:hover:bg-transparent dark:border-gray-700">Community</a>
                </li>
            </ul>
        </div>
    </div>
  </nav>
    </div>
  );
}

export default Navigation;
