//Find method

const cards = [
  { name: "Sol Ring", price: 1.5, owned: true },
  { name: "Rhystic Study", price: 42, owned: false },
  { name: "Lightning Bolt", price: 1.25, owned: true },
];

//searchCards parameter is the card im looking for
const searchCard = (cardName) => {

  //If match is found return object as result
  const result = cards.find((card) => {
    return card.name === cardName;
  });


  //If result returns truthy run code, else card not found
  if (result) {

    return `Card found: ${result.name}`

  }
  else {

    return "Card not found";

  }

};

console.log(searchCard("Black Lotus"));
