const watchedCards = [
  {
    name: "Sol Ring",
    price: 2,
    targetPrice: 3,
    active: true,

    shouldAlert() {
      return this.price <= this.targetPrice && this.active === true;
    },
  },
  {
    name: "Rhystic Study",
    price: 40,
    targetPrice: 35,
    active: true,
  },
  {
    name: "Esper Sentinel",
    price: 28,
    targetPrice: 30,
    active: true,
  },
];

function getPriceAlerts(cards) {
  const filteredCards = cards.filter((card) => {
    return card.price <= card.targetPrice && card.active === true;
  });

  const buyCards = filteredCards.map((card) => {
    const { name, price } = card;

    return `${name} dropped to $${price}!`;
  });

  return buyCards;
}

getPriceAlerts(watchedCards);
