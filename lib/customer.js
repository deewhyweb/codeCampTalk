class Customer{

    constructor(isGold){
       this.isGold = isGold ;
       this.cart = [];
    }
    
   
    addToCart(item){
       if (this.isGold && (this.cartTotal() + item.price > 40)){
           item.price = (item.price / 100) * 85;
       }
       this.cart.push(item);
    }

    clearCart(){
        this.cart = [];
    }

    cartTotal(){
        let data = {}
        data.subTotal = 0;
        this.cart.forEach(item => {
            data.subTotal = data.subTotal + item.price;
        });
        if (this.isGold && (data.subTotal > 40)){
            data.total = (data.subTotal / 100) * 85;
        } else {
            data.total = data.subTotal
        }
        return data;
    }
}

module.exports = Customer;