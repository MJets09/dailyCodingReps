export async function getCardPrice(cardName) {
  const response = await fetch(
    `https://api.scryfall.com/cards/named?exact=${encodeURIComponent(cardName)}`,
    {
      headers: {
        "User-Agent": "MengCardPriceBot/1.0",
        Accept: "application/json",
      },
    },
  );

  if (!response.ok) {
    throw new Error(`Could not find ${cardName}`);
  }

  const cardData = await response.json();

  return cardData.prices.usd;
}