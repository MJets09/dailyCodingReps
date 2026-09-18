const watchedCard = {
    name: "Esper Sentinel",
    price: 28,
    active: true,
    targetPrice: 0,

    deactivate() {
        
        if(this.active){

            this.active = false;

        }

    },

    updatePrice(newPrice){

        if(newPrice >= 0){

            this.price = newPrice;

        }

    },

    updateTargetPrice(newTarget){

        if(newTarget > 0){

            this.targetPrice = newTarget;

        }

    }

};

//Encapsulation introduction, understanding the value of it, things outside of the object cant override the rules we give