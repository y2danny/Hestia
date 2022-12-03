import { ethers } from "ethers";
import { useEffect, useState } from "react";
import { Web3Storage } from "web3.storage";
import Moralis from "moralis";

// import close from '../assets/close.svg';
import { create as ipfsHttpClient } from "ipfs-http-client";
// const client = ipfsHttpClient("https://ipfs.infura.io:5001/api/v0");

const Mint = ({ realestate, escrow }) => {
  function hideDialog() {
    document.getElementById("openDialog").style.display = "none";
    document.getElementById("overlay").style.display = "none";
  }

  const [image, setImage] = useState("");
  const [price, setPrice] = useState(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (event) => {
    // 👇️ prevent page refresh
    event.preventDefault();

    console.log("form submitted ✅");
  };
  const uploadFile = async (event) => {
    event.preventDefault();
    const client = new Web3Storage({
      token:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDc4NTIyMDIwMjE3ZjhmYzZFMWNFQzc1NWY5NEUwMzJCOWExNTZlOUQiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2Njk5MTQ4NDQ3MjMsIm5hbWUiOiJIZXN0aWEifQ.xiv1jfX-h8kP6rPBc156e99PbKxBbfpEZHYlhsAw2zg",
    });
    const fileInput = document.getElementById("file-to-upload");
    const cid = await client.put(fileInput.files);
    // const result = await client.add(fileInput);
    const pathResult = fileInput.files[0].name;
    setImage(`https://${cid}.ipfs.w3s.link/${pathResult}`);
    // setImage(pathResult);
    console.log("Success");
  };

  const createNFT = async () => {
    if (!image || !price || !name || !description) return;

    try {
      await Moralis.start({
        apiKey:
          "D1hjxdBEjI838DrNrbdL9C3xvXTDHxMRm5TdtSoPunRm2RFjYmTrSyqkqJAByyFE",
      });
      const uploadArray = [
        {
          path: "nft.json",
          content: {
            name: name,
            image: image,
            price: price,
            description: description,
          },
        },
      ];
      const response = await Moralis.EvmApi.ipfs.uploadFolder({
        abi: uploadArray,
      });
      //   console.log(response.result[0].path);
      const result = response.result[0].path;
      mintThenList(result);
    } catch (error) {
      console.log("ipfs uri upload error: ", error);
    }

    console.log("Success");
  };
  const mintThenList = async (result) => {
    const uri = result;
    // mint nft
    await (await realestate.mint(uri)).wait();
    // get tokenId of new nft
    const id = await realestate.tokenCount();
    // approve escrow to spend nft
    await (await realestate.setApprovalForAll(escrow.address, true)).wait();
    // add nft to escrow
    const listingPrice = ethers.utils.parseEther(price.toString());
    console.log(listingPrice);
    await (await escrow.makeItem(realestate.address, id, listingPrice)).wait();
    window.location.reload();
  };

  return (
    <div className="relative w-full h-full max-w-md md:h-auto">
      <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
        <button
          onClick={hideDialog}
          type="button"
          className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
          data-modal-toggle="authentication-modal"
        >
          <svg
            aria-hidden="true"
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span className="sr-only">Close modal</span>
        </button>
        <div className="px-6 py-6 lg:px-8">
          <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
            Property Information
          </h3>
          {/* <label htmlFor={"file-to-upload"}>File To Upload</label>
          <input id={"file-to-upload"} type={"file"} />
          <button onClick={() => uploadFile()}>Upload</button> */}
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <input
                id="file-to-upload"
                type={"file"}
                required
                name="file"
                onChange={uploadFile}
              ></input>

              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Title
              </label>
              <input
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                onChange={(e) => setName(e.target.value)}
                size="lg"
                required
                type="text"
                placeholder="Name"
              />
            </div>
            <div>
              <label
                for="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Description
              </label>
              <input
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                onChange={(e) => setDescription(e.target.value)}
                size="lg"
                required
                as="textarea"
                placeholder="Description"
              />
            </div>
            <div>
              <label
                for="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Price in ETH
              </label>
              <input
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                onChange={(e) => setPrice(e.target.value)}
                size="lg"
                required
                type="number"
                placeholder="Price in ETH"
              />
            </div>

            <button
              onClick={createNFT}
              className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Create & List NFT!
            </button>
          </form>
          <div className="p-6 text-center">
            <button
              data-modal-toggle="popup-modal"
              type="button"
              className="text-white bg-red-700 hover:bg-red-400 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-white focus:z-10 dark:bg-gray-700 dark:text-white dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mint;
