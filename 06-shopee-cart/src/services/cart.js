//quais acoes meu carrinho pode fazer
//adicionar item
async function addItem(userCart, item){
    userCart.push(item)
}

async function calculateTotal(userCart) {
    console.log("Shopee cart total is:")
    const result = userCart.reduce((total, item) => total + Number(item.subtotal()), 0);
    console.log(`Total: ${result.toFixed(2)}`)
}

//deletar item
async function deleteItem(userCart, nameItem){
    const index = userCart.findIndex((item) => item.name === nameItem);
    if(index !== -1){
        userCart.splice(index, 1)
    }
}
//remover um item - diminui item
async function removeItem(userCart, item) {
    const indexFound = userCart.findIndex((p) => p.name === item.name)

    if ( indexFound == -1) {
        console.log("Item não encontrado");
        return;
    }

    const foundItem = userCart[indexFound];
    if(foundItem.quantity > 1){
        foundItem.quantity -= 1;
    } else if (foundItem.quantity == 1){
        deleteItem(userCart, foundItem.name)

    }
}

async function updateItemQuantity(userCart, item, newQuantity){
    const indexFound = userCart.findIndex((i) => i.name === item.name)

    if(indexFound == -1){
        console.log("Item não encontrado");
        return;
    }

    const foundItem = userCart[indexFound];
    foundItem.quantity = newQuantity;
}

async function increaseMoreOneItem(userCart, item){
    const indexFound = userCart.findIndex((i) => i.name === item.name)

    if(indexFound == -1){
        console.log("Item não encontrado");
        return;
    }

    const foundItem = userCart[indexFound];
    foundItem.quantity += 1;
}

async function displayCart(userCart){
    console.log("Shopee cart list:")
    userCart.forEach((item, index) => {
        console.log(`${index + 1}. ${item.name} - ${item.price} | ${item.quantity}x | Subtotal: ${item.subtotal()}`)
    })
}



export {
    addItem,
    calculateTotal,
    deleteItem,
    removeItem,
    displayCart,
    updateItemQuantity,
    increaseMoreOneItem
}