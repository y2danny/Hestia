// import logo from '../assets/logo.svg';
// import Container from '../assets/container.png';
// import '../components/jumbroton.css';
import Mint from "./Mint";

const Jumbroton = () => {
    function showDialog() {
        document.getElementById("openDialog").style.display = "block";
        document.getElementById("overlay").style.display = "block";
    }

    return (
      <div>
          <div className="text-center bg-gray-50 text-gray-800 py-24 px-6">
              <h3 className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12">A Home Away From Home<br /><span
                      className="text-blue-600">Buy, Rent and Sell Properties</span></h3>
              <div className="mb-6 md:mb-0">
                  <div className="flex flex-col md:flex-row justify-center">
                      <input type="text"
                          className="form-control inline-block w-full md:w-2/6 px-4 py-2 mb-2 md:mb-0 md:mr-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                          placeholder="Enter an address,neighborhood, city or zip code" />
                      <button type="submit"
                          className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                          data-mdb-ripple="true" data-mdb-ripple-color="light">
                          Search
                      </button>
                  </div>
              </div>               
          </div> 
          
          <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto flex items-center md:flex-row flex-col">
                <div className="flex flex-col md:pr-10 md:mb-0 mb-6 pr-0 w-full md:w-auto md:text-left text-center">
                    <h2 className="text-xs text-purple-500 tracking-widest font-medium title-font mb-1">Have property to sell?</h2>
                    <h1 className="md:text-3xl text-2xl font-medium title-font text-gray-900">Upload your property for free</h1>
                </div>
                <div className="flex md:ml-auto md:mr-0 mx-auto items-center flex-shrink-0 space-x-4">
                    <button
                        onClick={showDialog}
                        className="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 512 512">
                            <path
                                d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z">
                            </path>
                        </svg>
                        <span className="ml-4 flex items-start flex-col leading-none">
                            <span className="title-font font-medium">Mint now</span>
                        </span>
                    </button>
                </div>
            </div>
            <div id="overlay" className="fixed
                inset-0
                z-40
                hidden
                h-screen
                w-screen
                bg-gray-900 bg-opacity-60"></div>  
            <div id="openDialog" className="
                fixed
                top-1/2
                left-1/2
                z-50
                hidden
                w-96
                -translate-x-1/2 -translate-y-1/2
                space-y-5
                rounded-md
                bg-white
                px-8
                py-6
                drop-shadow-lg">
                <Mint />
            </div>          
          </section>                 
      </div>
    );
  }
  
  export default Jumbroton;
  