import { useState, useEffect } from "react";
import { ethers } from "ethers";

import RealEstateAbi from "../src/abis/contractsData/RealEstate.json";
import RealEstateAddress from "../src/abis/contractsData/RealEstate-address.json";
import EscrowAbi from "../src/abis/contractsData/Escrow.json";
import EscrowAddress from "../src/abis/contractsData/Escrow-address.json";

import Home from "./pages/Home";
import Community from "./pages/Community";
import Property from "./pages/Property";
import NotFoundPage from "./pages/NotFoundPage";
import Navigation from "./components/Navigation";

// import Search from './components/Search';
// import Home from './components/Home';

// Config
// import config from './config.json';
import { Route, Routes } from "react-router-dom";

function App() {
  // const [loading, setLoading] = useState(true);
  const [account, setAccount] = useState(null);
  const [realestate, setrealEstate] = useState({});
  const [escrow, setEscrow] = useState({});
  // MetaMask Login/Connect
  const web3Handler = async () => {
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    setAccount(accounts[0]);
    // Get provider from Metamask
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    // Set signer
    const signer = provider.getSigner();

    // window.ethereum.on("chainChanged", (chainId) => {
    //   window.location.reload();
    // });

    window.ethereum.on("accountsChanged", async function (accounts) {
      setAccount(accounts[0]);
      await web3Handler();
    });
    // Get deployed copies of contracts
    const escrow = new ethers.Contract(
      EscrowAddress.address,
      EscrowAbi.abi,
      signer
    );
    setEscrow(escrow);

    const realestate = new ethers.Contract(
      RealEstateAddress.address,
      RealEstateAbi.abi,
      signer
    );

    setrealEstate(realestate);
    // const ss = await nft.name();
    console.log(await escrow.feePercent());
    // console.log(await realestate.mint());

    // loadContracts(signer);
  };
  // const loadContracts = async (signer) => {
  //   // setLoading(false);
  // };
  useEffect(() => {
    web3Handler();
  }, []);
  return (
    <div>
      {/* <>
        <Navigation web3Handler={web3Handler} account={account} />
      </> */}
      <Routes>
        <Route
          path="/"
          element={
            <Home
              escrow={escrow}
              realestate={realestate}
              web3Handler={web3Handler}
              account={account}
            />
          }
        ></Route>
        <Route
          path="/community"
          element={<Community escrow={escrow} realestate={realestate} />}
        ></Route>
        <Route
          path="/property"
          element={<Property escrow={escrow} realestate={realestate} />}
        ></Route>
        <Route path="*" component={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
