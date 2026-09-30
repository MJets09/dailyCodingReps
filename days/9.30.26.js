import { getCardPrice } from "./9.30.Service.js";

const cards = [
  { name: "Sol Rign", price: 0, targetPrice: 1 }, // intentionally wrong
  { name: "Buster Sword", price: 0, targetPrice: 10 },
  { name: "Fire Lord Zuko", price: 0, targetPrice: 5 },
];

async function updatePrices(cards) {
    //for each object in the cards array
  for (const card of cards) {
    //try to get the cardprice
    try {
      const price = await getCardPrice(card.name);
    // if able turn price into number
      const cardPrice = Number(price);

    //update object price into cardPrice
      card.price = cardPrice;
      //if error run console log
    } catch (error) {
      console.log(`Skipping ${card.name}: ${error.message}`);
    }
  }

  return cards;
}

const updatedCards = await updatePrices(cards);
console.log(updatedCards);

//Understanding of try and catch, work on importing and export modules