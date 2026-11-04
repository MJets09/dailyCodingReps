const cards = [
  { name: "Sol Ring", price: 2, targetPrice: 3 },
  { name: "Dismember", price: 4, targetPrice: 5 },
];

function getAlerts(cards) {
  return cards
    .filter((card) => card.price <= card.targetPrice)
    .map((card) => card.name);
}

console.log("Current alerts:", getAlerts(cards));

function addCard(cards, name, targetPrice) {
  const newCard = {
    name: name,
    price: 0,
    targetPrice: targetPrice,
  };

  const alreadyExists = cards.some((card) => card.name === newCard.name);

  if (alreadyExists) {
    return `${newCard.name} already exists.`;
  }

  cards.push(newCard);

  return cards;
}

function removeCard(cards, cardName) {
  let findCard = cards.findIndex((card) => card.name === cardName);

  if (findCard == -1) {
    return "Card not found";
  }
  else {

    cards.splice(findCard, 1);

    return cards

  }
}


addCard(cards, "Lightning Bolt", 6);
addCard(cards, "Sol Ring", 10);
removeCard(cards, "Dismember");
removeCard(cards, "Black Lotus");

console.log(cards);