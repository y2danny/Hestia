// import { useEffect, useState } from 'react';
// import { ethers } from 'ethers';

// Components
import Navigation from './components/Navigation';
import Jumbroton from './components/Jumbroton';
import Properties from './components/Properties';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';

// import Search from './components/Search';
// import Home from './components/Home';

// ABIs
// import RealEstate from './abis/RealEstate.json'
// import Escrow from './abis/Escrow.json'

// Config
// import config from './config.json';

function App() {

  return (
    <div className="relative bg-white w-[1280px] h-[4142px] overflow-clip">
      <Navigation />
      <Jumbroton />
      <Properties />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
