const card = {
  name: "Fire Lord Zuko",
  price: 4.25,
  targetPrice: 5,
  active: true,

  shouldAlert() {
    return this.active && this.price <= this.targetPrice;
  },
};

//2. a: return object if true, b: calls the function, return object if true, c: returns boolean true

card.price = 7;

//Should alert did not change, inspected and returned an answer

const cards = [
  { name: "Fire Lord Zuko", price: 4.25, targetPrice: 5, active: true },
  { name: "Sol Ring", price: 1.5, targetPrice: 1, active: true },
  { name: "Cyclonic Rift", price: 27, targetPrice: 30, active: false },
  { name: "Buster Sword", price: 8, targetPrice: 10, active: true },
];

const getPriceAlerts = (cards) => {
  const alertCards = cards.filter((card) => {
    return card.price <= card.targetPrice && card.active === true;
  });

  //Zuko, Buster returns

  const alerts = alertCards.map((card) => {
    const { name, price } = card;

    return `${name} - $${price}`;
  });

  return alerts;
};


const results = getPriceAlerts(cards);

console.log(results[0]);