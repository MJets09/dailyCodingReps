const watchedCard = {
  name: "Fire Lord Zuko",
  price: 0,
  targetPrice: 5,
  active: true,

  shouldAlert() {
    return this.active && this.price <= this.targetPrice;
  },
};

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

  console.log(cardData);

  const price = cardData.prices.usd;

  return price;
}

const results = await getCardPrice("Fire Lord Zuko");

const cardPrice = Number(results);

watchedCard.price = cardPrice;

if(watchedCard.shouldAlert()){

    console.log("Price Alert!");

}

//Def need more async and await practices, how to connect to apis syntax and understanding how pieces connect together