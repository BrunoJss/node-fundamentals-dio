//quais acoes meu carrinho pode fazer
//adicionar item
async function addItem(userCart, item){
    userCart.push(item)
}
async function calculateTotal(userCart) {
    return userCart.reduce((total, item) => total + item.subtotal(), 0)
}

//deletar item
async function deleteItem(userCart, nameItem){}
//remover um item - diminui item
async function removeItem(userCart, indexItem){}
//calcular total

export {
    addItem,
    calculateTotal,
    deleteItem,
    removeItem,
}