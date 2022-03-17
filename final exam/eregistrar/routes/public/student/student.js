/**
 * product.js
 */
"use strict";

const express = require("express");
const path = require("path");
const accountRouter = express.Router();
// const product = require("../../model/product");
const ds = require("../../../datastore/datastore");

// Define routes for product pages
accountRouter.get("/get", async (req, res, next) => {
    const student = await ds.getData(req, res);
    console.log(student);
    res.locals = {student: student};
    res.render("student");
});

accountRouter.post("/new", async (req, res, next) => {
    console.log("__________________---------------------_______");
    const result = await ds.addData({
        studentId: req.body.studentId, fullName: req.body.fullName, levelOfStudy: req.body.levelOfStudy
    });
    res.redirect(303, "/registration/get");
});
module.exports = accountRouter;
