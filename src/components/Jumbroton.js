// import logo from '../assets/logo.svg';
// import Container from '../assets/container.png';
import '../components/jumbroton.css';
import Mint from "./Mint";

const Jumbroton = () => {
    function showDialog() {
        document.getElementById("openDialog").style.display = "block";
        document.getElementById("overlay").style.display = "block";
    }

    return (
      <div>
          <div className="text-center text-gray-800 py-24 px-6 mt-8" id='bg'>
              <h3 className="text-3xl text-white  md:text-2xl xl:text-5xl font-bold tracking-tight mb-12">A Home Away From Home<br /><span
                      className="text-green-600	text-3xl md:text-1xl xl:text-3xl">Buy, Rent and Sell Properties</span></h3>
              <div className="mb-6 md:mb-0">
                  <div className="flex flex-col mr-40 ml--30 md:flex-row justify-center">
                      <input type="text"
                         id='input' className="form-control inline-block w-full mr-20 md:w-2/6 px-4 py-2 mb-2 md:mb-0 md:mr-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                          placeholder="Enter an address,neighborhood, city or zip code" />
                      <button type="submit"
                          className="inline-block px-7 py-3 bg-green-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-#4CCE30-800 active:shadow-lg transition duration-150 ease-in-out"
                          data-mdb-ripple="true" data-mdb-ripple-color="light">
                          Search
                      </button>
                  </div>
              </div>               
          </div> 
          
          <section className="text-gray-600 body-font mt-10">
            <div id='mint' className="container bg-green-900 space-x-40 h-40 rounded-2xl ml-20 px-5 py-4 mx-auto flex items-center md:flex-row flex-row w-100% pr-10 ">
                <div className="flex flex-col ml-10 pl-20  md:pr-10 md:mb-0 mb-6  md:w-auto md:text-left text-center">
                    <h2 className="text-3xl text-white tracking-widest font-medium title-font mb-1">Have property to sell?</h2>
                    <h1 className="md:text-xl text-l font-medium title-font text-slate-300">Upload your property for free</h1>
                </div>
                <div className="flex md:ml-auto flex-row md:mr-0 mx-auto items-center flex-shrink-0 space-x-1">
                    <button
                        onClick={showDialog}
                        className="bg-green-600 text-white inline-flex py-3 px-5 rounded-lg items-center ml-20 hover:bg-gray-200 focus:outline-none">
                        <span className="ml-4 flex items-start flex-row leading-none">
                            <span className="title-font font-medium mr-8">Mint now</span>
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
  