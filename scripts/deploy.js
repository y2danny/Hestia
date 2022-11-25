const { ethers, network } = require("hardhat");
// const hre = require("hardhat");
const { verify } = require("../utils/verify");
const { developmentChains } = require("../helper-config");

async function main() {
  [seller, agent] = await ethers.getSigners();
  // console.log(seller);
  // const aa = await ethers.getSigners();
  // const agent = "0x602A8B4843790134C92Ad3f0705a2589ed2Cdd20";
  // console.log(aa);

  // Deploy Contract
  const realEstate = await ethers.getContractFactory("RealEstate");
  const realestate = await realEstate.deploy();
  realestate.deployed();
  console.log(
    `The Hestia Real Estate NFT contact address is ${realestate.address}`
  );
  const args = [realestate.address, seller.address, agent.address];
  const Escrow = await ethers.getContractFactory("Escrow");
  const escrow = await Escrow.deploy(
    realestate.address,
    seller.address,
    agent.address
  );
  escrow.deployed();
  console.log(
    `The Hestia Real Estate Escrow contact address is ${escrow.address}`
  );
  // console.log(developmentChains);
  // if (
  //   !developmentChains.includes(network.name) &&
  //   process.env.POLYGONSCAN_API_KEY
  // ) {
  //   await verify(realestate.address, args);
  //   await verify(escrow.address, args);
  // }
  // log("-----------------------------");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
