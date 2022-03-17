/**
 * home.js
 */
"use strict"

const express = require("express");
const path = require("path");
const homeRouter = express.Router();

homeRouter.get("/", (req, res, next) => {
    console.log("Inside homeRouter");
    res.redirect("static/html/index.html");
})
// Define home page routes
homeRouter.get("/home", (req, res, next) => {
    console.log(`Redirecting to the static home page url`);
    res.redirect("/static/html/index.html");
    
})
module.exports = homeRouter;