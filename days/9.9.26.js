const cards = [
  { name: "Sol Ring", price: 1.5, targetPrice: 2, active: true },
  { name: "Rhystic Study", price: 42, targetPrice: 35, active: true },
  { name: "Mana Drain", price: 38, targetPrice: 40, active: false },
  { name: "Esper Sentinel", price: 27, targetPrice: 30, active: true },
];

const getPriceDropAlerts = (cards) => {
  const priceDrops = cards.filter((card) => {
    return card.price <= card.targetPrice && card.active === true;
  });

  const alerts = priceDrops.map((card) => {
    const { name, price } = card;

    return `${name} dropped to $${price}.`;
  });
  return alerts;
};

//Today was kinda rusty after vacation, have to remember to be clear about if something is function able to be called or just a set of data.
