//funcoes que lidam com produto
const productType = {
    version: "digital",
    tax: "x1"
}


async function getFullName(codeId, productName) {
    console.log("Product: " + codeId + " - " + productName);
    doBreakLine();
}

async function doBreakLine(){
    console.log("\n");
}

async function getProductLabel(product) {
    console.log("Product: " + product);
}

module.exports = {
    getFullName,
    getProductLabel,
    productType,
};