// const cards = [
//   { name: "Sol Ring", price: 1.5, owned: true },
//   { name: "Rhystic Study", price: 42, owned: false },
//   { name: "Lightning Bolt", price: 1.25, owned: true },
// ];

// const getCardLabels = (cards) => {

//   const labels = cards.map((card) => {

//     // Step 1:
//     // Destructure name, price, and owned from card.
//     const {name, price, owned} = card;


//     // Step 2:
//     // Create a variable called status.
//     // If owned is true → "Owned"
//     // Otherwise → "Need"
//     let status;

//     if(owned){

//         status = "Owned";

//     }
//     else {

//         status = "Need";

//     }



//     // Step 3:
//     // Return:
//     // "Sol Ring - $1.5 - Owned"
//     return `${name} - $${price} - ${status}`;

//   });

//   // Step 4:
//   // Return the finished labels array.

//   return labels

// };

const cards = [
  { name: "Sol Ring", price: 1.5, owned: true },
  { name: "Rhystic Study", price: 42, owned: false },
  { name: "Lightning Bolt", price: 1.25, owned: true },
  { name: "Mana Drain", price: 38, owned: false },
];

const getNeededCards = (cards) => {

  // Step 1:
  // Use .filter() to create an array containing
  // ONLY cards where owned is false.
  const notOwned = cards.filter((card)=>{

    return card.owned === false;

  })


  // Step 2:
  // Use .map() on that new array.
  // Return strings like:
  // "Rhystic Study - $42"

  const doesNotOwned = notOwned.map((card)=>{


    const {name, price} = card;
    
    return `${name} - $${price}`

  })


  // Step 3:
  // Return the final array.
  return doesNotOwned;

};