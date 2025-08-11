//quais acoes meu carrinho pode fazer
//adicionar item
async function addItem(userCart, item){
    userCart.push(item)
}
async function calculateTotal(userCart) {
    console.log("Shopee cart total is:")
    const result = userCart.reduce((total, item) => total + item.subtotal(), 0);
    console.log(`Total: ${result}`)
}

//deletar item
async function deleteItem(userCart, nameItem){
    const index = userCart.findIndex((item) => item.name === nameItem);
    if(index !== -1){
        userCart.splice(index, 1)
    }
}
//remover um item - diminui item
async function removeItem(userCart, indexItem){
    const deleteIndex = indexItem - 1;

    if(indexItem >= 0 && indexItem < userCart.length){
        userCart.splice(deleteIndex, 1)
    }
}

async function displayCart(userCart){
    console.log("Shopee cart list:")
    userCart.forEach((item, index) => {
        console.log(`${index + 1}. ${item.name} - ${item.price} | ${item.quantity}x | Subtotal: ${item.subtotal()}`)
    })
}

//calcular total

export {
    addItem,
    calculateTotal,
    deleteItem,
    removeItem,
    displayCart
}