/**
 * product.js
 */
"use strict";

const express = require("express");
const path = require("path");
const productRouter = express.Router();
const product = require("../../model/product");
const productDAO = require("../../db/dao/productDAO");

// Define routes for product pages
productRouter.get("/list", (req, res, next) => {
    console.log(`Presenting list of products page`);
    
    const products = productDAO.getProducts();
    console.log(products);
    res.locals = {products: products};
    res.render("product-list");
    // res.render("product-list", {products: products});
});

module.exports = productRouter;
