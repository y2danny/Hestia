import {
  Link,
} from "react-router-dom";
import One from '../assets/one.png';
import Two from '../assets/two.png';
import Three from '../assets/three.png';
import Four from '../assets/four.png';
import '../components/properties.css'

const Properties = () => {
    return (
<div className=" mx-auto">
    <section className="mb-32 text-gray-800 text-center">
        <section id='prop' className="text-gray-600 body-font mb-4 ">
            <div  className=" py-10 flex items-center md:flex-row flex-col">
                <div className="flex flex-row md:flex-row  mx-auto items-center flex-shrink-0 space-x-4 justify-start">
                    <button
                        className="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none">
                        <span className="ml-4 flex items-start flex-col leading-none">
                            <span className="title-font font-medium">Available properties</span>
                        </span>
                    </button>


                    <button
                        className="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none">
                        <span className="ml-4 flex items-start flex-col leading-none">
                            <span className="title-font font-medium">Auction</span>
                        </span>
                    </button>


                    <button
                        className="bg-gray-100 mr-10 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none">
                        <span className="ml-4 flex items-start flex-col leading-none">
                            <span className="title-font font-medium">NFTs</span>
                        </span>
                    </button>
                </div>
            </div>
          </section>    

        <div id='proty' className="grid xl:grid-cols-4 lg:grid-cols-2  md:grid-cols-2 sm:grid-cols-2 ">
        <Link to="/property"> 
            <div className="mb-6  lg:mb-0">
                <div id='box' className="relative block bg-white mr-10 rounded-lg shadow-lg">
                    <div className="flex">
                        <div className="relative overflow-hidden bg-no-repeat bg-cover shadow-lg rounded-lg mx-4 -mt-4"
                            data-mdb-ripple="true" data-mdb-ripple-color="light">
                            <img id='img' src={One} alt=""/>
                            <a href="/">
                                <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                                  ></div>
                            </a>
                        </div>
                    </div>
                    <div className="p-6">
                        <h5 className="font-bold text-lg mb-3">Duplex- 2 Terrace</h5>
                        <p className="text-gray-500 mb-4">
                            <small>Minted <u>13.01.2022</u> by
                                <a href="/" className="text-gray-900">Joe Wigh</a></small>
                        </p>
                        <p className="mb-4 pb-2 text-2xl">
                           $ 10,000.
                        </p>
                        <a href="/" data-mdb-ripple="true" data-mdb-ripple-color="light"
                            className="inline-block px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Read
                            more</a>
                    </div>
                </div>
            </div>
          </Link>

            <div className="mb-6 lg:mb-0">
                <div id='box' className="relative block bg-white rounded-lg shadow-lg">
                    <div className="flex">
                        <div className="relative overflow-hidden bg-no-repeat bg-cover shadow-lg rounded-lg mx-4 -mt-4"
                            data-mdb-ripple="true" data-mdb-ripple-color="light">
                            <img src={Two} id='img' className="w-full" alt=""/>
                            <a href="/">
                                <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                                  ></div>
                            </a>
                        </div>
                    </div>
                    <div className="p-6">
                        <h5 className="font-bold text-lg mb-3">Duplex- 1 Terrace</h5>
                        <p className="text-gray-500 mb-4">
                            <small>Minted <u>13.01.2022</u> by
                                <a href="/" className="text-gray-900">Joe Wigh</a></small>
                        </p>
                        <p className="mb-4 pb-2 text-2xl">
                           $ 5000.
                        </p>
                        <a href="/" data-mdb-ripple="true" data-mdb-ripple-color="light"
                            className="inline-block px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Read
                            more</a>
                    </div>
                </div>
            </div>



            <div className="mb-6 lg:mb-0">
                <div id='box' className="relative block bg-white rounded-lg shadow-lg">
                    <div className="flex">
                        <div className="relative overflow-hidden bg-no-repeat bg-cover shadow-lg rounded-lg mx-4 -mt-4"
                            data-mdb-ripple="true" data-mdb-ripple-color="light">
                            <img src={Three} id='img'className="w-full" alt=""/>
                            <a href="/">
                                <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                                  ></div>
                            </a>
                        </div>
                    </div>
                    <div className="p-6">
                        <h5 className="font-bold text-lg mb-3">Double Duplex- 2 Terrace</h5>
                        <p className="text-gray-500 mb-4">
                            <small>Minted <u>13.01.2022</u> by
                                <a href="/" className="text-gray-900">Joe Wigh</a></small>
                        </p>
                        <p className="mb-4 pb-2 text-2xl">
                           $ 30,000.
                        </p>
                        <a href="/" data-mdb-ripple="true" data-mdb-ripple-color="light"
                            className="inline-block px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Read
                            more</a>
                    </div>
                </div>
            </div>

            <div className="mb-0">
                <div id='box' className="relative block bg-white rounded-lg shadow-lg">
                    <div className="flex">
                        <div className="relative overflow-hidden bg-no-repeat bg-cover shadow-lg rounded-lg mx-4 -mt-4"
                            data-mdb-ripple="true" data-mdb-ripple-color="light">
                            <img src={Four} id='img' className="w-full" alt="" />
                            <a href="/">
                                <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                                ></div>
                            </a>
                        </div>
                    </div>
                    <div className="p-6">
                        <h5 className="font-bold text-lg mb-3">Bungalow- 2 Terrace</h5>
                        <p className="text-gray-500 mb-4">
                            <small>Minted <u>13.01.2022</u> by
                                <a href="/" className="text-gray-900">Joe Wigh</a></small>
                        </p>
                        <p className="mb-4 pb-2 text-2xl">
                           $ 50,000.
                        </p>
                        <a href="/" data-mdb-ripple="true" data-mdb-ripple-color="light"
                            className="inline-block px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Read
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
  