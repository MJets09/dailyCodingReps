import { updatePrices } from "./updateCardPrice.js";

const cards = [
  { name: "Twinflame Tyrant", price: 0, targetPrice: 100 },
  { name: "Ingris Stingerquill", price: 0, targetPrice: 20 },
  { name: "Dismember", price: 0, targetPrice: 4 },
];

async function getAlerts(cards) {
  await updatePrices(cards);

  const alerts = cards.filter((card) => {
    return card.price <= card.targetPrice;
  });

  return alerts;
}

console.log(await getAlerts(cards));

//Understanding using import to use other functions from other files, understanding when getting data back we need await. 
//Need to be more familiar with the architecture 