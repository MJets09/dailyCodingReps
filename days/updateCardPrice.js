import { getCardPrice } from "./getCardScryfallCall.js";

  export async function updatePrices(cards) {
    
    for(const card of cards) {

        const price = await getCardPrice(card.name)
        
        card.price = price; 
    }
    return cards;
  }
  
