const PizzaShop = require("./pizzashop")

const pizzashop = new PizzaShop("Large", "Tomato, Pinapple");
pizzashop.on("order", (size, toppings) => {
  console.log(`${size} pizza with ${toppings.toString()} is ready to pickup`)
})
pizzashop.order();
pizzashop.displayOrderNumber();