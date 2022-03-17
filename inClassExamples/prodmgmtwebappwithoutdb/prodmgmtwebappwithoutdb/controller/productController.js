/**
 * productController.js
 */
"use strict";

const productDAO = require("../db/dao/productDAO");
const Product = require("../model/product");

const productController = (function() {
    
    const getProducts =  function(req, res) {
        const products =  productDAO.getProducts();
        return products
    };

    const addNewProduct = function(req, res) {
        const productNo = parseInt(req.body.productNo);
        const productName = req.body.productName;
        const unitPrice = parseFloat(req.body.unitPrice);
        const p = new Product(null, productNo, productName, unitPrice);
        const opRes = productDAO.saveProduct(p);
        console.log(`Save Product in controller: ${opRes}`);
        return opRes;
    };

    const getHotProducts = function(){
        const hotProducts =  productDAO.getHotProducts();
        return hotProducts
    }

    return {
        getProducts: getProducts,
        addNewProduct: addNewProduct,
        getHotProducts: getHotProducts
    }
})();

module.exports = productController;