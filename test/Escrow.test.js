const { expect } = require("chai");
const { ethers } = require("hardhat");

const tokens = (n) => {
  return ethers.utils.parseUnits(n.toString(), "ether");
};

describe("Hestia Escrow", () => {
  let realEstate, escrow, buyer, seller, agent;

  beforeEach(async function () {
    [seller, buyer, agent] = await ethers.getSigners();

    // Deploy Real Estate
    const HRE = await ethers.getContractFactory("RealEstate");
    realEstate = await HRE.deploy();
    //  Mint Token

    let mintTransaction = await realEstate
      .connect(seller)
      .mint(
        "https://ipfs.io/ipfs/QmTudSYeM7mz3PkYEWXWqPjomRPHogcMFSq7XAvsvsgAPS"
      );
    await mintTransaction.wait();
    // depoly escrow

    const Escrow = await ethers.getContractFactory("Escrow");
    escrow = await Escrow.deploy(
      realEstate.address,
      seller.address,
      agent.address
    );

    // Approve Property
    transaction = await realEstate.connect(seller).approve(escrow.address, 1);
    await transaction.wait();
    //
    // // // List Property
    transaction = await escrow
      .connect(seller)
      .sellerActivity(1, tokens(10), tokens(5), buyer.address);

    await transaction.wait();
  });

  it("NFT Address", async () => {
    const nftAddress = await escrow.nftAddress();
    expect(nftAddress).to.be.equal(realEstate.address);
  });
  it("Seller Address", async () => {
    const sellerAddress = await escrow.seller();
    expect(sellerAddress).to.be.equal(seller.address);
  });
  it("Agent Address", async () => {
    const agentAddress = await escrow.agent();
    expect(agentAddress).to.be.equal(agent.address);
  });
  it("Listing Status", async () => {
    const result = await escrow.isListed(1);
    expect(result).to.be.equal(true);
  });
  it("Purchase Price", async () => {
    const result = await escrow.purchasePrice(1);
    expect(result).to.be.equal(tokens(10));
  });
  it("Escrow Amount", async () => {
    const result = await escrow.escrowAmount(1);
    expect(result).to.be.equal(tokens(5));
  });
  it("Return Buyer", async () => {
    const result = await escrow.buyer(1);
    expect(result).to.be.equal(buyer.address);
  });
  it("Updating Ownership", async () => {
    expect(await realEstate.ownerOf(1)).to.be.equal(escrow.address);
  });
  it("Seller Activity", async () => {
    const transaction = await escrow
      .connect(buyer)
      .buyerActivity(1, { value: tokens(5) });

    transaction.wait();
    const result = await escrow.getBalance();
    expect(result).to.be.equal(tokens(5));
  });
  it("House Status", async () => {
    const transaction = await escrow.connect(agent).inspectorActivity(1, true);
    await transaction.wait();
    const result = await escrow.status(1);
    expect(result).to.be.equal(true);
  });
  it("Approval Sale", async () => {
    const transaction = await escrow.connect(buyer).approvalSale(1);
    await transaction.wait();
    const result = await escrow.approvalStatus(1, buyer.address);
    expect(result).to.be.equal(true);
  });
  describe("Sale", () => {
    beforeEach(async () => {
      let transaction = await escrow
        .connect(buyer)
        .buyerActivity(1, { value: tokens(5) });
      await transaction.wait();

      transaction = await escrow.connect(agent).inspectorActivity(1, true);
      await transaction.wait();

      transaction = await escrow.connect(buyer).approvalSale(1);
      await transaction.wait();

      transaction = await escrow.connect(seller).approvalSale(1);
      await transaction.wait();

      transaction = await escrow.connect(agent).approvalSale(1);
      await transaction.wait();

      await agent.sendTransaction({ to: escrow.address, value: tokens(5) });

      transaction = await escrow.connect(seller).sale(1);
      await transaction.wait();
    });

    it("Updates ownership", async () => {
      expect(await realEstate.ownerOf(1)).to.be.equal(buyer.address);
    });

    it("Updates balance", async () => {
      expect(await escrow.getBalance()).to.be.equal(0);
    });
  });
});
