// import { useEffect, useState } from 'react';
// import { ethers } from 'ethers';

import { MoralisProvider } from "react-moralis";

// Components
import Navigation from "./components/Navigation";
import Jumbroton from "./components/Jumbroton";
import Properties from "./components/Properties";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import EscrowAbi from "../src/abis/contractsData/Escrow.json";
import EscrowAddress from "../src/abis/contractsData/Escrow-address.json";
import RealEstateAddress from "../src/abis/contractsData/RealEstate-address.json";
import RealEstateAbi from "../src/abis/contractsData/RealEstate-address.json";

// import Search from './components/Search';
// import Home from './components/Home';

// Config
// import config from './config.json';

function App() {
  const [provider, setProvider] = useState(null);
  const [escrow, setEscrow] = useState(null);
  const [realestate, setrealEstate] = useState(null);
  const [account, setAccount] = useState(null);

  const [homes, setHomes] = useState([]);
  const [home, setHome] = useState({});
  const [toggle, setToggle] = useState(false);

  const loadBlockchainData = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    setProvider(provider);

    const realEstate = new ethers.Contract(
      RealEstateAddress,
      RealEstateAbi,
      provider
    );
    const totalSupply = await realEstate.totalSupply();
    const homes = [];

    for (var i = 1; i <= totalSupply; i++) {
      const uri = await realEstate.tokenURI(i);
      const response = await fetch(uri);
      const metadata = await response.json();
      homes.push(metadata);
    }

    setHomes(homes);

    const escrow = new ethers.Contract(EscrowAddress, EscrowAbi, provider);
    setEscrow(escrow);

    window.ethereum.on("accountsChanged", async () => {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const account = ethers.utils.getAddress(accounts[0]);
      setAccount(account);
    });
  };

  useEffect(() => {
    loadBlockchainData();
  }, []);

  const togglePop = (home) => {
    setHome(home);
    toggle ? setToggle(false) : setToggle(true);
  };

  return (
    <MoralisProvider initializeOnMount={false}>
      <div className="relative bg-white w-[1280px] h-[4142px] overflow-clip">
        <Navigation />
        <Jumbroton />
        <Properties />
        <Blog />
        <Contact />
        <Footer />
      </div>
    </MoralisProvider>
  );
}

export default App;
