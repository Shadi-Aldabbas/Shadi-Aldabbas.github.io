"use strict";
const dbConectionMgr = require("../dbconnectionmgr");
const dbConnectionMgr = require("../dbconnectionmgr");

//TODO Use ES6 class syntax
const accountDAO = (function() {

    // const getAccounts = function() {
    //     const products = [];
    //     products.push(new Product(1001, "Apple iPhone15", 1700));
    //     products.push(new Product(1002, "Samsung Android S22", 1500));
    //     products.push(new Product(1001, "Google Pixel 11", 1200));
    //     return products;
    // }

    /**
     * Fetches and returns all available products in the database
     */
    const getAccounts = async function() {
        const qryStrGetAccounts = "SELECT * FROM `bank-db`.accounts";
        try {
            const dbConnection = dbConnectionMgr.getConnection();
            const [accounts] = await dbConnection.promise().query(qryStrGetAccounts);
            return accounts;
        } catch (error) {
            console.log(`DB Access Error: ${error}`);
            throw error;
        }
    };

    const saveAccount = async function(account) {
        const cmdStrSaveAccount = `insert into accounts (accNo, customerName, typeOfAccount) values ('${account.accountNo}', '${account.customerName}', '${account.accountType}')`;
        try {
            const dbConnection = dbConectionMgr.getConnection();
            const saveOpResult = await dbConnection.promise().execute(cmdStrSaveAccount);
            return saveOpResult;
        } catch(error) {
            console.log(`DB Access Error: ${error}`);
            throw error;
        }
    }

    return {
        getAccounts: getAccounts,
        saveAccount: saveAccount
    }
})();

module.exports = accountDAO;