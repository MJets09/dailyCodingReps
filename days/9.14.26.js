const cards = [
  { name: "Sol Ring", price: 2, targetPrice: 3, active: true },
  { name: "Rhystic Study", price: 40, targetPrice: 35, active: true },
  { name: "Mana Drain", price: 35, targetPrice: 40, active: false },
  { name: "Esper Sentinel", price: 28, targetPrice: 30, active: true }
];

const getAlerts = (cards) => {

    const filterCards = cards.filter((card)=>{


        return card.price <= card.targetPrice && card.active === true;

    })
    
    const deezString = filterCards.map((card)=>{

        const {name, price} = card;

        return `${name} - $${price}`;

    })


    return deezString

}

getAlerts(cards);

//Strugged a lil bit with nesting returns, little details, good to know. Built from memory, lets keep going