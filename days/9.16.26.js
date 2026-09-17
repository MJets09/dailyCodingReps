const watchedCard = {
    name: "Esper Sentinel",
    price: 28,
    targetPrice: 30,
    active: true,

    shouldAlert() {
        
        return this.active && this.price <= this.targetPrice;
    
    },

    getAlertMessage(){

        return `${this.name} - $${this.price}`

    }
};
