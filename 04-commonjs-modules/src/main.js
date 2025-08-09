const { getFullName, productType } = require('./services/products')
const c = require('./services/config')
const db = require('./services/database')

async function main() {
    // console.log("Carrinho de compras\n");
    // p.getFullName("408", "mousepad");
    // p.getFullName("508", "mouse");
    // p.getProductLabel("mousepad")

    getFullName("1", "Teclado")

    productType.version
    console.log(c.devArea.production)
    db.conectToDatabase("MySQL");
    db.disconectDatabase();
}

main()