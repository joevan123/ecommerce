// coffee: price_1Q3cJE091CMQ3lc6jedlsKMA
// tea: price_1Q3cM6091CMQ3lc6wkgm6siF
// Bread: price_1Q3cNW091CMQ3lc6USlVYZJ5

const productsArray = [
    {
        id: "price_1Q3eKJ091CMQ3lc646IqvbVH",
        title: "Coffee",
        price: 4.49
    }, 
    {
        id: "price_1Q3eJg091CMQ3lc69sRHvAcP",
        title: "Tea",
        price: 5.49
    },
    {
        id: "price_1Q3eIL091CMQ3lc6C7k0FD4B",
        title: "Bread",
        price: 4.21
    }
];

function getProductData(id){
    let productData = productsArray.find(product => product.id === id);
    
    if(productData == undefined){
        console.log("Product data does not exist for ID: " + id)
        return undefined;
    }
    return productData;
}

export {productsArray, getProductData};