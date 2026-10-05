import express from "express";
import { getCardPrice } from "./getCardScryfallCall.js";


const app = express();

app.get("/health", (req, res) => {
    res.send("Server is running.");
});

app.get("/price/:cardName", async (req, res) => {

    // What did they ask for?
    const cardName = req.params.cardName;

    // Get the information they need
    const price = await getCardPrice(cardName);

    // Give them the answer
    res.json({
        name: cardName,
        price: price
    });
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});

//A little excersise with creating paths and understanding what req and res is for. Need time for midterms