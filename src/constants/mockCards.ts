export type Card = {
  title: string;
  id: string;
  image: NodeRequire;
  category: string;
  rarity: string;
  size: string;
  price: number;
  index: number;
};

export type Cards = {
  cards: Array<Card>;
};
// Test
export const mockCards: Cards = {
  cards: [
    {
      title: "CryptoGreen",
      id: "#5430",
      image: require("../asset/CryptoGreen.png"),
      category: "Owl",
      rarity: "Common",
      size: "1:1",
      price: 1.01,
      index: 0,
    },
    {
      title: "BoredApe",
      id: "#431405",
      image: require("../asset/BoredApe.png"),
      category: "Ape",
      rarity: "Common",
      size: "1:1",
      price: 40.08,
      index: 1,
    },
    {
      title: "CryptoDrip",
      id: "#5403",
      image: require("../asset/CryptoDrip.png"),
      category: "Cat",
      rarity: "Rare",
      size: "1:1",
      price: 2.39,
      index: 2,
    },
    {
      title: "CryptoShock",
      id: "#0023",
      image: require("../asset/CryptoShock.png"),
      category: "Human",
      rarity: "Common",
      size: "1:1",
      price: 0.039,
      index: 3,
    },
    {
      title: "ClassicApe",
      id: "#431404",
      image: require("../asset/ClassicApe.png"),
      category: "Ape",
      rarity: "Rare",
      size: "1:1",
      price: 33.39,
      index: 4,
    },

    {
      title: "CryptoOwl",
      id: "#2134",
      image: require("../asset/CryptoOwl.png"),
      category: "Owl",
      rarity: "Rare",
      size: "1:1",
      price: 1.23,
      index: 5,
    },
    {
      title: "CryptoPirate",
      id: "#4399",
      image: require("../asset/CryptoPirate.png"),
      category: "Owl",
      rarity: "Common",
      size: "1:1",
      price: 9.39,
      index: 6,
    },
    {
      title: "CryptoBath",
      id: "#431403",
      image: require("../asset/CryptoBath.png"),
      category: "Ape",
      rarity: "Rare",
      size: "1:1",
      price: 32.1,
      index: 7,
    },

    {
      title: "CryptoKitties",
      id: "#0039",
      image: require(".././asset/CryptoKitties.png"),
      category: "Cat",
      rarity: "Common",
      size: "1:1",
      price: 30.2,
      index: 8,
    },
  ],
};
