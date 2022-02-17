import { createContext, useContext, useState } from "react";
const WalletAssetsProvider = createContext();
const TabProvider = createContext();
import shortid from "shortid";

let ASSET_LIST = [
    {
        id: shortid.generate(),
        img: require("./../assets/coin_logos/bitcoin.png"),
        name: "Bitcoin",
        shortName: "BTC",
        price: 44578.27,
        change: 4.68,
        owned: 243.8764,
    },
    {
        id: shortid.generate(),
        img: require("./../assets/coin_logos/ethereumpng.png"),
        name: "Ethereum",
        shortName: "ETH",
        price: 3057.28,
        change: -2.47,
        owned: 1227.21456,
    },
    {
        id: shortid.generate(),
        img: require("./../assets/coin_logos/bnbpng.png"),
        name: "BNB",
        shortName: "BNB",
        price: 423.54,
        change: -1.72,
        owned: 12341.982,
    },
    {
        id: shortid.generate(),
        img: require("./../assets/coin_logos/dogepng.png"),
        name: "DogeCoin",
        shortName: "DOGE",
        price: 0.1474,
        change: -1.32,
        owned: 1054732.198,
    },
    {
        id: shortid.generate(),
        img: require("./../assets/coin_logos/litecoinpng.png"),
        name: "Litecoin",
        shortName: "LTC",
        price: 125.51,
        change: -3.63,
        owned: 44567.13,
    },
    {
        id: shortid.generate(),
        img: require("./../assets/coin_logos/polygonpng.png"),
        name: "Polygon",
        shortName: "MATIC",
        price: 1.8,
        change: -0.78,
        owned: 7825,
    },
];

ASSET_LIST = ASSET_LIST.map((a) => {
    a.totalPrice = a.price * a.owned;
    return a;
});

ASSET_LIST = ASSET_LIST.sort((a, b) => (a.totalPrice < b.totalPrice ? true : false));
export function useWalletAssets() {
    return useContext(WalletAssetsProvider);
}
export function WalletAsset({ children }) {
    const [ASSET, setASSET] = useState(ASSET_LIST);
    return (
        <WalletAssetsProvider.Provider value={{ ASSET, setASSET }}>
            {children}
        </WalletAssetsProvider.Provider>
    );
}

const TABS = ["Tokens", "NFTs"];

export function useTabs() {
    return useContext(TabProvider);
}

export function TabContext({ children }) {
    const [Index, setIndex] = useState(0);
    return (
        <TabProvider.Provider value={{ TABS, Index, setIndex }}>{children}</TabProvider.Provider>
    );
}
