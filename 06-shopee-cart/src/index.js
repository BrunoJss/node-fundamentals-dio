import * as cartService from './services/cart.js'
import createitem from "./services/item.js";

const myCart = [];
const myWishList = [];

console.log("Welcome to your Shopee Cart!")

const item1 = await createitem("hotwheels ferrari", 20.99, 1);
const item2 = await createitem("hotwheels lamborghini", 39.99, 3);

await cartService.addItem(myCart, item1)
await cartService.addItem(myCart, item2)

await cartService.removeItem(myCart, 1)

await cartService.displayCart(myCart)


await cartService.calculateTotal(myCart)

// await cartService.deleteItem(myCart, item2.name)
// await cartService.deleteItem(myCart, item1.name)

// await cartService.calculateTotal(myCart)