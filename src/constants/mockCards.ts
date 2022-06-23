export type Card = {
  title: string;
  id: string;
  image: string;
  category: string;
  rarity: string;
  size: string;
  price: number;
};

export type Cards = {
  cards: Array<Card>;
};

export const mockCards: Cards = {
  cards: [
    {
      title: "CryptoGreen",
      id: "#5430",
      image: "CryptoGreen.png",
      category: "Owl",
      rarity: "Common",
      size: "1:1",
      price: 1.01,
    },
    {
      title: "CryptoDrip",
      id: "#5403",
      image: "CryptoDrip.png",
      category: "Cat",
      rarity: "Rare",
      size: "1:1",
      price: 2.39,
    },
    {
      title: "CryptoKitties",
      id: "#0039",
      image: "CryptoKitties.png",
      category: "Cat",
      rarity: "Common",
      size: "1:1",
      price: 30.2,
    },
    {
      title: "CryptoShock",
      id: "#0023",
      image: "CryptoShock.png",
      category: "Human",
      rarity: "Common",
      size: "1:1",
      price: 0.0039,
    },
    {
      title: "CryptoPirate",
      id: "#4399",
      image: "CryptoPirate.png",
      category: "Owl",
      rarity: "Common",
      size: "1:1",
      price: 0.0043,
    },
    {
      title: "CryptoOwl",
      id: "#2134",
      image: "CryptoOwl.png",
      category: "Owl",
      rarity: "Rare",
      size: "1:1",
      price: 1.2,
    },
    {
      title: "CryptoPirate",
      id: "#4399",
      image: "CryptoPirate.png",
      category: "Owl",
      rarity: "Common",
      size: "1:1",
      price: 9.39,
    },
    {
      title: "CryptoBath",
      id: "#431403",
      image: "CryptoBath.png",
      category: "Ape",
      rarity: "Rare",
      size: "1:1",
      price: 32.1,
    },
    {
      title: "ClassicApe",
      id: "#431404",
      image: "ClassicApe.png",
      category: "Ape",
      rarity: "Rare",
      size: "1:1",
      price: 33.39,
    },
    {
      title: "BoredApe",
      id: "#431405",
      image: "BoredApe.png",
      category: "Ape",
      rarity: "Common",
      size: "1:1",
      price: 40.08,
    },
  ],
};
