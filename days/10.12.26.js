import express from "express";
import { updatePrices } from "./updateCardPrice.js";

const app = express();
app.use(express.json());

const cards = [
  { name: "Twinflame Tyrant", price: 0, targetPrice: 100 },
  { name: "Ingris Stingerquill", price: 0, targetPrice: 7 },
  { name: "Dismember", price: 0, targetPrice: 4 },
];

async function getAlerts(cards) {
  await updatePrices(cards);

  const alerts = cards.filter((card) => {
    return card.price <= card.targetPrice;
  });

  return alerts;
}

// Existing health endpoint
app.get("/health", (req, res) => {
  res.send("Server is running");
});

app.get("/alerts", async (req,res) => {


    const alerts = await getAlerts(cards);

    res.json(alerts);


});



app.listen(3000, () => {
  console.log("Server running on port 3000");
});

//Not enough time, had to debug, need to do some reviews when we come to a fresh week, 3 day gap might be too long, have to adjust