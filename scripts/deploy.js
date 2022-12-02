async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);
  console.log("Account balance:", (await deployer.getBalance()).toString());

  // Get the ContractFactories and Signers here.
  const realEstate = await ethers.getContractFactory("RealEstate");
  const Escrow = await ethers.getContractFactory("Escrow");
  // deploy contracts
  const escrow = await Escrow.deploy(1);
  const realestate = await realEstate.deploy();

  // Save copies of each contracts abi and address to the frontend.
  saveFrontendFiles(escrow, "Escrow");
  saveFrontendFiles(realestate, "RealEstate");
}

function saveFrontendFiles(contract, name) {
  const fs = require("fs");
  const contractsDir = process.cwd() + "/src/abis/contractsData";

  if (!fs.existsSync(contractsDir)) {
    fs.mkdirSync(contractsDir);
  }

  fs.writeFileSync(
    contractsDir + `/${name}-address.json`,
    JSON.stringify({ address: contract.address }, undefined, 2)
  );

  const contractArtifact = artifacts.readArtifactSync(name);

  fs.writeFileSync(
    contractsDir + `/${name}.json`,
    JSON.stringify(contractArtifact, null, 2)
  );
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
