/**
 * product.js
 */
"use strict";

const express = require("express");
const path = require("path");
const productRouter = express.Router();

const productController = require("../../controller/productController");

// Define routes for product pages
productRouter.get("/list", (req, res, next) => {
    console.log(`Presenting list of products page`);
    
    const products = productController.getProducts(req, res);
    console.log(products);
    res.locals = {products: products};
    res.render("product-list");
    // res.render("product-list", {products: products});
});

productRouter.get("/new", (req, res, next) => {
    console.log(`Presenting new product form page`);
    res.sendFile(path.join(__dirname, "../../views", "product-form.html"));
});

productRouter.post("/new", (req, res, next) => {
    console.log(`Adding new product - controller`);
    const result = productController.addNewProduct(req, res);
    console.log(result);
    // PRG pattern here - redirect to product-list page
    res.redirect(303, "/product/list");
});

productRouter.get("/hotproduct", (req, res, next) => {
    const products = productController.getHotProducts();
    console.log(products);
    res.locals = {products: products};
    res.render("hotproduct-list");
});
module.exports = productRouter;
