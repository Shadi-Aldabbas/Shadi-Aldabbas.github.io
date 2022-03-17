
/**
 * accountDAO.js
 */
 "use strict"

 const Account = require("../../model/account")
 
 // module
 const accountDAO = (function() {

    const products = [
        new Account(1, "01-980-001", "James H. Karvill", "Savings"),
        new Account(2, "01-980-002", "Anna Hernandez-Diaz", "Checking")
    ];

    const getAccounts = function() {
        return products;
    };
 
    const addNewAccount = function(account){
        products.push(account);
    }

    return {
         getAccounts: getAccounts,
         addNewAccount: addNewAccount
     }
 })();
 
 module.exports = accountDAO;
 
 