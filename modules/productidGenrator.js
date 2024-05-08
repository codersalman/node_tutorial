
function genrateProductId(name, productSKU, productCat) {

    const product = {
        name : name,
        productSKU : productSKU,
        productCat : productCat,
    }

    function getProductId(){

        const productId = Math.floor(Math.random() * 100) + product.name + product.productSKU + product.productCat
        return productId
    }

    return getProductId()
}


module.exports = genrateProductId;
