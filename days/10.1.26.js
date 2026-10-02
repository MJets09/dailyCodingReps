import express from "express";

const app = express();

app.get("/health", (req, res) => {

    res.send("Server is running.")

})

app.listen(3000, () => {

    console.log("Aye cap, 3000.")

})