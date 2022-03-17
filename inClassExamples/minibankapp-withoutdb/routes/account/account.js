/**
 * account.js
 */
 "use strict"

const express = require("express");
const app = express();
const path = require("path");
const accountRouter = express.Router();
// const accountDAO = require("../../db/dao/accountDAO")
const accountController = require("../../controller/accountController")


// setup the express HttpRequest body parser middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use((req, res, next) => {
    console.log(`This account middleware is always run`);
    next();
});

accountRouter.get("/", async (req, res, next) => {
    console.log("Inside accountRouter");
    const accounts = await accountController.getAccounts(req, res);
    console.log(`Routes ${accounts}`);
    res.locals = { accounts : accounts};
    res.render("account");
    //res.redirect("/views/index.html"); static way
    //res.sendFile(path.join(__dirname, "../../views", "account.html"));
})
accountRouter.post("", async(req, res, next) => {
    console.log(`In the add-product http-post route's middleware`);
    const result = await accountController.addNewAccount(req, res);
    // without 
    res.redirect(303, "/account"); // end the response

})
module.exports = accountRouter;