// import { ethers } from 'ethers';
// import { useEffect, useState } from 'react';

// import close from '../assets/close.svg';

// Components
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Home = ({ home, provider, escrow, togglePop }) => {
    return (
      <div>
        <Navigation />

        <section className="text-gray-600 body-font">
    <div className="container mx-auto flex md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img className="object-cover object-center rounded w-[720px] h-[600px] " alt="hero" src="https://uortjlczjmucmpaqqhqm.supabase.co/storage/v1/object/public/firejet-converted-images/images/2e2ca50333750c5aa3ab66719b6409308fd02d92.webp" />
        </div>
        <div
            className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Duplex - 2 Terace Apartment
                <br className="hidden lg:inline-block" />ready made gluten
            </h1>
            <p className="mb-8 leading-relaxed">Fully furnished with householde items all ensuite. 24/hr Electricity, solar powered and smart home</p>
            <div className="flex justify-center">
                <button
                    className="inline-flex text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded text-lg"> $ 50,000</button>
                <button
                    className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Add to basket</button>
            </div>
        </div>
    </div>
</section>

<section className="text-gray-600 body-font">
    <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/3 sm:w-1/2 p-4">
                <div className="flex relative">
                    <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center"
                        src="https://uortjlczjmucmpaqqhqm.supabase.co/storage/v1/object/public/firejet-converted-images/images/6e6b89053f487ccf870d29ecfb4fa6cec6866e6a.webp" />
                    <div
                        className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                        <h2 className="tracking-widest text-sm title-font font-medium text-purple-500 mb-1">THE SUBTITLE
                        </h2>
                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Neptune</h1>
                        <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
                            microdosing tousled waistcoat.</p>
                    </div>
                </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
                <div className="flex relative">
                    <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center"
                        src="https://uortjlczjmucmpaqqhqm.supabase.co/storage/v1/object/public/firejet-converted-images/images/31c2a275a42ed7dcb4cbc20d01a88840bfff2588.webp" />
                    <div
                        className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                        <h2 className="tracking-widest text-sm title-font font-medium text-purple-500 mb-1">THE SUBTITLE
                        </h2>
                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Holden Caulfield</h1>
                        <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
                            microdosing tousled waistcoat.</p>
                    </div>
                </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
                <div className="flex relative">
                    <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center"
                        src="https://uortjlczjmucmpaqqhqm.supabase.co/storage/v1/object/public/firejet-converted-images/images/1882b12cf1a7fabe839d9bd4ca0eb4d9c09692f7.webp" />
                    <div
                        className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                        <h2 className="tracking-widest text-sm title-font font-medium text-purple-500 mb-1">THE SUBTITLE
                        </h2>
                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Alper Kamu</h1>
                        <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
                            microdosing tousled waistcoat.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="flex justify-center mb-4 mt-4">
        <button
            className="bg-purple-800 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none">
            <span className="ml-4 flex items-start flex-col leading-none">
                <span className="title-font font-medium text-white">Mint now</span>
            </span>
        </button>
        </div>
    </div>
</section>
        <Footer />

      </div>
    );
}

export default Home;
