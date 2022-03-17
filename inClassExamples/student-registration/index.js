/**
 * index.js
 */
"use strict"

const express = require("express")
const path = require("path")
const registerRoutes = require("./routes/register/register")
const app = express()

app.set("views", path.join(__dirname, "views"))
app.set("view engine", "pug")

app.use("/static", express.static(path.join(__dirname, "public")));


 app.use(express.urlencoded({ extended: false }));//to use req.body

app.use("", registerRoutes)

 // Put the Error 404 middleware last
 app.use((req, res, next) => {
    console.log(`Responding with a 404 Error page`);
    res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
 });

const PORT_NUMBER = 9000;
app.listen(PORT_NUMBER, () => {
    console.log(`Server is running on port ${PORT_NUMBER}`)
})