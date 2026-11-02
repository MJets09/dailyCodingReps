const prices = [12, 5, 30, 8, 20];
const target = 10;


const matchingPrices = prices.filter((x) => x <= target);

const cards = [
  { name: "Sol Ring", price: 2, targetPrice: 3 },
  { name: "Lightning Bolt", price: 5, targetPrice: 2 },
  { name: "Dismember", price: 4, targetPrice: 5 }
];

function getAlerts(cards) {

    let filterCards = cards.filter((x) => x.price <= x.targetPrice);

    return filterCards.map((x) => x.name);

}

function updateTarget(card, newTarget) {

    card.targetPrice = newTarget;
    
    return card;

}