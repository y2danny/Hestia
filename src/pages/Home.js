// import { ethers } from 'ethers';
// import { useEffect, useState } from 'react';

// import close from '../assets/close.svg';

// Components
import Navigation from '../components/Navigation';
import Jumbroton from '../components/Jumbroton';
import Properties from '../components/Properties';
import Blog from '../components/Blog';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

// Components

const Home = ({ home, provider, escrow, togglePop }) => {

    return (
        <div>
        <div className="flex flex-col h-screen justify-between">
            <header className="h-10 bg-red-500">
            <Navigation />
            </header>
            <main className="mb-auto flex-grow py-4 bg-white">
            <Jumbroton />
            <Properties />
            <Blog />
            <Contact />
            </main>
            <Footer />
        </div>
        </div>
    );
}

export default Home;
