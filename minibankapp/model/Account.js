"use strict";
function Account(accountId, accountNo, customerName, accountType) {
    this.accountId = accountId;
    this.accountNo = accountNo;
    this.customerName = customerName;
    this.accountType = accountType;
}

module.exports = Account;