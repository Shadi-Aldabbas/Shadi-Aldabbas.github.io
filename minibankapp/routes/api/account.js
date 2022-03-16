"use strict";

const express = require("express");
const accountAPIRouter = express.Router();

const accountController = require("../../controller/accountController");

accountAPIRouter.get("/list", async (req, res) => {
    const accounts = await accountController.getAccounts(req, res);
    res.json(accounts);
});

module.exports = accountAPIRouter;