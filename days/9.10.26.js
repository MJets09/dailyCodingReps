const cards = [
  { name: "Sol Ring", price: 2, active: true },
  { name: "Rhystic Study", price: 40, active: true },
  { name: "Mana Drain", price: 35, active: false },
  { name: "Esper Sentinel", price: 28, active: true }
];

const getAffordableCards = (cards) => {


    const affordableCards = cards.filter((card)=>{

        return card.price <= 30 && card.active === true;

    })

    return affordableCards;




}


//More practice and understanding what type of data return is returning