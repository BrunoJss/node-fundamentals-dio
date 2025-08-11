import * as cartService from './services/cart.js'
import createitem from "./services/item.js";

const myCart = [];
const myWishList = [];

console.log("Welcome to your Shopee Cart!")

const item1 = await createitem("hotwheels ferrari", 20.99, 1);
const item2 = await createitem("hotwheels lamborghini", 39.99, 3);
const item3 = await createitem("hotwheels mercedes", 29, 1)

await cartService.addItem(myCart, item1)
await cartService.addItem(myCart, item2)
await cartService.addItem(myCart, item3)

await cartService.removeItem(myCart, item2)

await cartService.displayCart(myCart)

await cartService.updateItemQuantity(myCart, item1, 5)

await cartService.increaseMoreOneItem(myCart, item3)

await cartService.displayCart(myCart)

await cartService.calculateTotal(myCart)