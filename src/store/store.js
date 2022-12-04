import { makeAutoObservable, runInAction } from "mobx";

class DataManager {
  items = [];
  constructor() {
    makeAutoObservable(this);
  }

  loadMarketplace = async (escrow, realestate) => {
    const itemCount = await escrow.itemCount();

    let items = [];
    for (let i = 1; i <= itemCount; i++) {
      const item = await escrow.items(i);
      if (!item.sold) {
        // get uri url from nft contract
        const uri = await realestate.tokenURI(item.tokenId);
        // use uri to fetch the nft metadata stored on ipfs
        const response = await fetch(uri);
        const metadata = await response.json();
        // get total price of item (item price + fee)
        const totalPrice = await escrow.getTotalPrice(item.itemId);
        // Add item to items array
        items.push({
          totalPrice,
          itemId: item.itemId,
          seller: item.seller,
          name: metadata.name,
          description: metadata.description,
          image: metadata.image,
        });

        runInAction(() => {
          this.items = items;
        });
      }
    }
  };
}

export const dataManager = new DataManager();
