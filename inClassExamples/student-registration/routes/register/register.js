/**
 * register.js
 */
"use strict"

const express = require("express")
const registerRouter = express.Router()
const path = require("path")
const studentDAO = require("../../db/dao/studentDAO")
const Student = require("../../model/student")

registerRouter.get("/", (req, res, next) => {
    console.log("Presenting Student Register page")
    res.render("register") 
})

//as not saving to db, the data will not maintain thru new page load
//studentDAO save record will not reflect in redirected page
registerRouter.post("/", (req, res, next) => {
    const newStudent = new Student(req.body.txtStudentId,req.body.txtFullName, req.body.radioLvlOfStudy, req.body.ddlNextCourse)
    const result = studentDAO.saveStudent(newStudent)
    console.log(result);
    res.redirect(303, "/");
})

module.exports = registerRouter