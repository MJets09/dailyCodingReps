async function getCardPrice(cardName) {
  const response = await fetch(
    `https://api.scryfall.com/cards/named?exact=${encodeURIComponent(cardName)}`,
    {
      headers: {
        "User-Agent": "MengCardPriceBot/1.0",
        Accept: "application/json",
      },
    },
  );

  const cardData = await response.json();

  return cardData.prices.usd;
}

const cards = [
  { name: "Sol Ring", price: 0, targetPrice: 1 },
  { name: "Buster Sword", price: 0, targetPrice: 10 },
  { name: "Fire Lord Zuko", price: 0, targetPrice: 5 },
];

async function updatePrices(cards) {
  for (const card of cards) {
    const price = await getCardPrice(card.name);

    const cardPrice = Number(price);

    card.price = cardPrice;
  }

  return cards

}


const updatedCards = await updatePrices(cards);