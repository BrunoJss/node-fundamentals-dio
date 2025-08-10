//CASOS DE USOS DOS ITENS

// criar item com subtotal certo
async function createitem(name, price, quantity) {
    return {
        name,
        price,
        quantity,
        subtotal: () => price * quantity,
    }
}

export default createitem;
