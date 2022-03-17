/**
 * accountController.js
 */
 "use strict"
 const Account = require("../model/account")
 const accountDAO = require("../db/dao/accountDAO");
 
 
 const accountController = (function(){
 
     const getAccounts = function(req, res){
            const accounts =  accountDAO.getAccounts();
            console.log(`Controller: accounts ${accounts}`)
            return accounts
     };
 
     const addNewAccount = function(req, res){
            const opRes = accountDAO.addNewAccount(new Account(null, req.body.accountNo, req.body.customerName, req.body.accountType));
            console.log(`Account Controller: Save Account output ; ${opRes}`);
            return opRes;
     }
     return {
         getAccounts: getAccounts,
         addNewAccount: addNewAccount
     }
 })();
 
 
 module.exports = accountController;