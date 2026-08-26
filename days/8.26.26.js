//New concept: object destructuring

const cards = [
  { name: "Sol Ring", price: 1.5, owned: true },
  { name: "Rhystic Study", price: 42, owned: false },
  { name: "Lightning Bolt", price: 1.25, owned: true },
];

const getCardInfo = (cardName) => {

  // Find the requested card first.
    const myCard = cards.find((card) => {

        return card.name === cardName;

    });

  // Handle the possibility that nothing was found.
    if(!myCard){

        return undefined;

    }

  // Destructure name, price, and owned from the found object.
    const {name, price, owned} = myCard;

  // Return the appropriate message.
    return `${name} costs $${price} and is ${owned}.`

};

console.log(getCardInfo("Sol Ring"));
console.log(getCardInfo("Rhystic Study"));
console.log(getCardInfo("Black Lotus"));






//Thoughts before practice

// 1. What does .find() return when it finds something? Returns the object I am looking for that fufills my condition
// 2. What does .find() return when it finds nothing? empty object
// 3. During .find(), what does the callback parameter `card` represent? whatever object fufills the condition
// 4. After destructuring `result`, what will `name`, `price`,
//    and `owned` contain? It'll contain the objects related attributes

//Thoughts for the day?
//A little trouble how to start but trying to recall the find method helped out. Desctructing makes sense, but the key thing is we have to assigned the destructed words to the orignal variable