//.map + desctucturing

const cards = [
  { name: "Sol Ring", price: 1.5, owned: true },
  { name: "Rhystic Study", price: 42, owned: false },
  { name: "Lightning Bolt", price: 1.25, owned: true },
];

const formatCards = (cards) => {
  // Use .map() to transform every card.
  //Map this array
  const myCards = cards.map((card) => {
    //For each object destruct it
    const { name, price, owned } = card;

    if (owned) {
       ownedText = "Owned";

    } else {
       ownedText = "Not owned";
    }

    //Return this for each one
    return `${name} - $${price}, ${ownedText}`;
  });

  // Inside the callback:
  // destructure name, price, and owned.

  // Return one formatted string for each card.

  return myCards;
};

console.log(formatCards(cards));

// 1. What does .map() return? a new object

// 2. If cards has 3 objects, how many items should
//    the new array contain? 3

// 3. During .map(), what does the callback parameter `card` represent? an object out of the array

// 4. If I destructure:
//    const { name, price, owned } = card;
//    where do name, price, and owned come from? name, price and owened comes from the object
