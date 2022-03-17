
/**
 * account.js
 */
"use strict";

function Account(accountId, accountNo, customerName, accountType){
    this.accountId = accountId;
    this.accountNo = accountNo;
    this.customerName = customerName; 
    this.accountType = accountType;
}

module.exports = Account;

/*
class Account {
    #accountId = null;
    #accountNo = null;
    #customerName  = null;
    #accountType = null;
    constructor(accountId, accountNo, customerName, accountType){
        this.#accountId = accountId;
        this.#accountNo = accountNo;
        this.#customerName = customerName;
        this.#accountType = accountType;
    }

    getAccountId(){ return this.#accountId; }
    getAccountNo(){ return this.#accountNo; }
    getCustomerName(){ return this.#customerName; }
    getAccountType(){ return this.#accountType; }

    setAccountNo(accountNo){
        this.#accountNo = accountNo;
    }
    setCustomerName(customerName){
        this.#customerName = customerName;
    }
    setAccountType(accountType){
        this.#accountType = accountType;
    }
    toString(){
        return `{AccountNo: ${this.#accountNo}, CustomerName: ${this.#customerName}, AccountType: ${this.#accountType}}`;
    }
}

module.exports = Account;
*/