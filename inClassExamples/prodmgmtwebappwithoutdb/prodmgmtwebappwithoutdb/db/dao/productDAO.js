/**
 * productDAO.js
 */
"use strict";

const Product = require("../../model/product");

//TODO Use ES6 class syntax
const productDAO = (function() {

    const products = [
        new Product(null, 1001, "Apple iPhone 15", 1700),
        new Product(null, 1002, "Samsung Android S22", 1500),
        new Product(null, 1001, "Google Pixel 11", 1200),
    ]
    const getProducts = function() {
         return products;
    }
    const saveProduct = function(product) {
        products.push(product);
    };
    const getHotProducts = function(){
        const result = products.filter( p => p.unitPrice < 1000);
        console.log("resultt "+result)
        return result;
    }

    return {
        getProducts: getProducts,
        saveProduct: saveProduct,
        getHotProducts: getHotProducts
    }
})();

module.exports = productDAO;