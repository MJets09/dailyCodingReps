import express from "express";
import { getCardPrice } from "./getCardScryfallCall.js";


const app = express();

app.get("/price/:cardName", async (req, res) => {
  try {
    const cardName = req.params.cardName;
    const price = await getCardPrice(cardName);

    res.json({
        name: cardName,
        price: price
    });

  } catch (error) {
    res.status(404).json({
      error: error.message,
    });
  }
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});


//more practice on try and catch, understanding backend architecture more