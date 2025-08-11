//quais acoes meu carrinho pode fazer
//adicionar item
async function addItem(userCart, item){
    userCart.push(item)
}
async function calculateTotal(userCart) {
    const result = userCart.reduce((total, item) => total + item.subtotal(), 0);
    console.log(result)
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