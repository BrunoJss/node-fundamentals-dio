//CASOS DE USOS DOS ITENS

// criar item com subtotal certo
async function createitem(name, price, quantity) {
    return {
        name,
        price,
        quantity,
        subtotal() {
            return this.price * this.quantity
        }
    }
}

export default createitem;
