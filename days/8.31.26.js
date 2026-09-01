const cards = [
  { name: "Sol Ring", price: 1.5, owned: true },
  { name: "Rhystic Study", price: 42, owned: false },
  { name: "Lightning Bolt", price: 1.25, owned: true },
  { name: "Cyclonic Rift", price: 28, owned: false },
];

const getOwnedCards = (cards) => {
  // Step 1:
  // Use .filter() to keep only owned cards.
  const myCard = cards.filter((card) => {
    return card.owned;
  });

  // Step 2:
  // Use .map() on that result.

  const cardsOwned = myCard.map((card) => {

      const { name, price } = card;

    return `${name} - ${price}`;
  });

  // Step 3:
  // Inside .map(), destructure name and price.

  // Step 4:
  // Return one formatted string per card.
  return cardsOwned;

};

console.log(getOwnedCards(cards));

// 1. What type of value is cards? Array

// 2. What does .filter() return? Array

// 3. Inside .filter(), what does card represent? An object from the array

// 4. If I return card.owned from filter,
//    which cards should survive? Cards that should be owned

// 5. After filtering, what should .map() do? Map would take each one that passes the filter and return an object in a new array
