/**
 * findFirstN.js
 */
"use strict";
/**
 * Take argument N and finds and return the first N
 * elements on any array.
 * If the length of the array
 * is less than N, then throws
 * an Error with error message
 * 
 * @returns first N elements
 */
Array.prototype.findFirstN = function(n) {
    if(n > this.length)
        throw new Error("Error: Insufficient items");
    const firstNElements = [];
    for(let i = 0; i < n; i++) {
        firstNElements.push(this[i]);
    }
    return firstNElements;
};

try {
    // const numbers = [3,6,2,1];
    // const result = numbers.findFirstN(5);
    // console.table(result);

    const names = ["anna", "bob", "carlos"];
    const result2 = names.findFirstN(4);
    console.table(result2);
} catch(error) {
    console.log(error.message);
}

// Alternative
Array.prototype.findFirstN2 = function(n) {
    if(n > this.length)
        throw new Error("Error: Insufficient items");
    return this.slice(0, n);
}
