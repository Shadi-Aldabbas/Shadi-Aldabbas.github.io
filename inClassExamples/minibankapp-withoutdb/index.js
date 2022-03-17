/**
 * index.js
 */
"use strict"

const express = require("express");
const app = express();
const path = require("path");
const homeRouter = require("./routes/home/home")
const accountRouter = require("./routes/account/account")

// Define middlewares
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

// setup the express HttpRequest data parser middlewares
// parse application/x-www-form-urlencoded (e.g. web form data)
app.use(express.urlencoded({ extended: false }));
// parse HttpRequest data to application/json format
//  app.use(express.json());

// Set public folder as source for all static content 
// e.g. scripts, images, stylesheets etc.
app.use("/static", express.static(path.join(__dirname, "public")));


app.use((req, res, next) => {
    console.log(`This middleware is always running.`);
    next();
})

app.use("/account", accountRouter);
app.use("/", homeRouter);


const port = 9000;
app.listen(port, () => {
    console.log(`Running on port ${port}`)
})



