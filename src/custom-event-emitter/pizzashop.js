const EventEmitter = require('events');

class PizzaShop extends EventEmitter{
  constructor(size, toppings) {
    super();
    this.orderNumber = 0;
    this.size = size,
    this.toppings = toppings;
  }

  order() {
    this.orderNumber++;
    this.emit("order", this.size, this.toppings)
  }

  displayOrderNumber() {
    console.log("Your order received and ur order number is ", this.orderNumber);
  }
}

module.exports = PizzaShop;
