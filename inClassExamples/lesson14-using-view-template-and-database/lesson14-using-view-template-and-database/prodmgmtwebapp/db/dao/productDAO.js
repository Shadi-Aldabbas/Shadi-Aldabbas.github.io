/**
 * productDAO.js
 */
"use strict";

const Product = require("../../model/product");

//TODO Use ES6 class syntax
const productDAO = (function() {

    const getProducts = function() {
        const products = [];
        products.push(new Product(1001, "Apple iPhone15", 1700));
        products.push(new Product(1002, "Samsung Android S22", 1500));
        products.push(new Product(1001, "Google Pixel 11", 1200));
        return products;
    }
    return {
        getProducts: getProducts
    }
})();
module.exports = productDAO;