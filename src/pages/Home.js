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
            <Navigation />
            <Jumbroton />
            <Properties />
            <Blog />
            <Contact />
            <Footer />
        </div>
    );
}

export default Home;
