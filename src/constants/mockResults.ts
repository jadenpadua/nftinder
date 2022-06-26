export type Result = {
  id: string;
  description: string;
  priceHistory: Array<number>;
  blockChain: string;
  fees: string;
  tokenStandard: string;
};

export type Results = {
  results: Array<Result>;
};

export const mockResults: Results = {
  results: [
    {
      id: "#5430",
      description:"CryptoGreen Card",
      priceHistory: [10,20,30, 40, 50],
      blockChain: "Ethereum",
      fees: "10",
      tokenStandard: "ERC-1155",
    },
    {
      id: "#431405",
      description:"BoredApe Card",
      priceHistory: [10,20,30, 40, 50],
      blockChain: "Ethereum",
      fees: "10",
      tokenStandard: "ERC-1155",
    },
    {
      id: "#5403",
      description:"CryptoDrip Card",
      priceHistory: [10,20,30, 40, 50],
      blockChain: "Ethereum",
      fees: "10",
      tokenStandard: "ERC-1155",
    },
    {
      id: "#0023",
      description:"CryptoShock Card",
      priceHistory: [10,20,30, 40, 50],
      blockChain: "Ethereum",
      fees: "10",
      tokenStandard: "ERC-1155",
    },
    {
      id: "#431404",
      description:"ClassicApe Card",
      priceHistory: [10,20,30, 40, 50],
      blockChain: "Ethereum",
      fees: "10",
      tokenStandard: "ERC-1155",
    },

    {
      id: "#2134",
      description:"CryptoOwl Card",
      priceHistory: [10,20,30, 40, 50],
      blockChain: "Ethereum",
      fees: "10",
      tokenStandard: "ERC-1155",
    },
    {
      id: "#4399",
      description:"CryptoPirate Card",
      priceHistory: [10,20,30, 40, 50],
      blockChain: "Ethereum",
      fees: "10",
      tokenStandard: "ERC-1155",
    },
    {
      id: "#431403",
      description:"CryptoBath Card",
      priceHistory: [10,20,30, 40, 50],
      blockChain: "Ethereum",
      fees: "10",
      tokenStandard: "ERC-1155",
    },

    {
      id: "#0039",
      description:"CryptoKitties Card",
      priceHistory: [10,20,30, 40, 50],
      blockChain: "Ethereum",
      fees: "10",
      tokenStandard: "ERC-1155",
    },
  ],
};
