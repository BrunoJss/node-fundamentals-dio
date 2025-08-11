import * as cartService from './services/cart.js'
import createitem from "./services/item.js";

const myCart = [];
const myWishList = [];

console.log("Welcome to your Shopee Cart!")

const item1 = await createitem("hotwheels ferrari", 20.99, 1);
const item2 = await createitem("hotwheels lamborghini", 39.99, 3);

await cartService.addItem(myCart, item1)
await cartService.addItem(myWishList, item2)
// console.log(item2.subtotal())

console.log("Shopee cart total is:")
await cartService.calculateTotal(myCart)