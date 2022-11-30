// import { useEffect, useState } from 'react';
// import { ethers } from 'ethers';

import Home from "./pages/Home";
import Community from "./pages/Community";
import Property from "./pages/Property";
import NotFoundPage from "./pages/NotFoundPage";

// import Search from './components/Search';
// import Home from './components/Home';

// ABIs
// import RealEstate from './abis/RealEstate.json'
// import Escrow from './abis/Escrow.json'

// Config
// import config from './config.json';
import {
  Route, Routes
} from "react-router-dom";


function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/community" element={<Community />}></Route>
        <Route path="/property" element={<Property />}></Route>
        <Route path="*" component={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
