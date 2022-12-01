import {
  Link,
} from "react-router-dom";
import One from '../assets/one.png';
import Two from '../assets/two.png';
import Three from '../assets/three.png';
import Four from '../assets/four.png';

const Properties = () => {
    return (
<div className="container  mx-auto">
    <section className="mb-32 text-gray-800 text-center">
        <section className="text-gray-600 body-font mb-4 pr-20">
            <div className="container px-5 py-24 mr-10 mx-auto flex items-center md:flex-row flex-col">
                <div className="flex flex-col mr-10 md:flex-row md:ml-auto md:mr-0 mx-auto items-center flex-shrink-0 space-x-4 justify-start">
                    <button
                        className="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 512 512">
                            <path
                                d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z">
                            </path>
                        </svg>
                        <span className="ml-4 flex items-start flex-col leading-none">
                            <span className="title-font font-medium">Available properties</span>
                        </span>
                    </button>


                    <button
                        className="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 512 512">
                            <path
                                d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z">
                            </path>
                        </svg>
                        <span className="ml-4 flex items-start flex-col leading-none">
                            <span className="title-font font-medium">Auction</span>
                        </span>
                    </button>


                    <button
                        className="bg-gray-100 mr-10 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 512 512">
                            <path
                                d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z">
                            </path>
                        </svg>
                        <span className="ml-4 flex items-start flex-col leading-none">
                            <span className="title-font font-medium">NFTs</span>
                        </span>
                    </button>
                </div>
            </div>
          </section>    

        <div className="grid lg:grid-cols-4 gap-6 xl:gap-x-12">
        <Link to="/property"> 
            <div className="mb-6 lg:mb-0">
                <div className="relative block bg-white rounded-lg shadow-lg">
                    <div className="flex">
                        <div className="relative overflow-hidden bg-no-repeat bg-cover shadow-lg rounded-lg mx-4 -mt-4"
                            data-mdb-ripple="true" data-mdb-ripple-color="light">
                            <img src={One} className="w-full" alt=""/>
                            <a href="/">
                                <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                                  ></div>
                            </a>
                        </div>
                    </div>
                    <div className="p-6">
                        <h5 className="font-bold text-lg mb-3">My paradise</h5>
                        <p className="text-gray-500 mb-4">
                            <small>Published <u>13.01.2022</u> by
                                <a href="/" className="text-gray-900">Anna Maria Doe</a></small>
                        </p>
                        <p className="mb-4 pb-2">
                            Ut pretium ultricies dignissim. Sed sit amet mi eget urna
                            placerat vulputate.
                        </p>
                        <a href="/" data-mdb-ripple="true" data-mdb-ripple-color="light"
                            className="inline-block px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Read
                            more</a>
                    </div>
                </div>
            </div>
          </Link>

            <div className="mb-6 lg:mb-0">
                <div className="relative block bg-white rounded-lg shadow-lg">
                    <div className="flex">
                        <div className="relative overflow-hidden bg-no-repeat bg-cover shadow-lg rounded-lg mx-4 -mt-4"
                            data-mdb-ripple="true" data-mdb-ripple-color="light">
                            <img src={Two} className="w-full" alt=""/>
                            <a href="/">
                                <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                                  ></div>
                            </a>
                        </div>
                    </div>
                    <div className="p-6">
                        <h5 className="font-bold text-lg mb-3">My paradise</h5>
                        <p className="text-gray-500 mb-4">
                            <small>Published <u>13.01.2022</u> by
                                <a href="/" className="text-gray-900">Anna Maria Doe</a></small>
                        </p>
                        <p className="mb-4 pb-2">
                            Ut pretium ultricies dignissim. Sed sit amet mi eget urna
                            placerat vulputate.
                        </p>
                        <a href="/" data-mdb-ripple="true" data-mdb-ripple-color="light"
                            className="inline-block px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Read
                            more</a>
                    </div>
                </div>
            </div>



            <div className="mb-6 lg:mb-0">
                <div className="relative block bg-white rounded-lg shadow-lg">
                    <div className="flex">
                        <div className="relative overflow-hidden bg-no-repeat bg-cover shadow-lg rounded-lg mx-4 -mt-4"
                            data-mdb-ripple="true" data-mdb-ripple-color="light">
                            <img src={Three} className="w-full" alt=""/>
                            <a href="/">
                                <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                                  ></div>
                            </a>
                        </div>
                    </div>
                    <div className="p-6">
                        <h5 className="font-bold text-lg mb-3">My paradise</h5>
                        <p className="text-gray-500 mb-4">
                            <small>Published <u>13.01.2022</u> by
                                <a href="/" className="text-gray-900">Anna Maria Doe</a></small>
                        </p>
                        <p className="mb-4 pb-2">
                            Ut pretium ultricies dignissim. Sed sit amet mi eget urna
                            placerat vulputate.
                        </p>
                        <a href="/" data-mdb-ripple="true" data-mdb-ripple-color="light"
                            className="inline-block px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Read
                            more</a>
                    </div>
                </div>
            </div>

            <div className="mb-0">
                <div className="relative block bg-white rounded-lg shadow-lg">
                    <div className="flex">
                        <div className="relative overflow-hidden bg-no-repeat bg-cover shadow-lg rounded-lg mx-4 -mt-4"
                            data-mdb-ripple="true" data-mdb-ripple-color="light">
                            <img src={Four} className="w-full" alt="" />
                            <a href="/">
                                <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                                ></div>
                            </a>
                        </div>
                    </div>
                    <div className="p-6">
                        <h5 className="font-bold text-lg mb-3">Chasing the sun</h5>
                        <p className="text-gray-500 mb-4">
                            <small>Published <u>10.01.2022</u> by
                                <a href="/" className="text-gray-900">Joe Svan</a></small>
                        </p>
                        <p className="mb-4 pb-2">
                        Ut pretium ultricies dignissim. Sed sit amet mi eget urna
                            placerat vulputate.
                        </p>
                        <a href="/" data-mdb-ripple="true" data-mdb-ripple-color="light"
                            className="inline-block px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Read
                            more</a>
                    </div>
                </div>
            </div>
        </div>

    </section>
</div>
    );
  }
  
  export default Properties;
  