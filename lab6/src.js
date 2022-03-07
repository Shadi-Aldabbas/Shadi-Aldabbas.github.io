"use strict";

// Question 2 start --------------------------------------
// global is accessed everywhere but local only inside local method
let global = 8;

const local = () => {
  let localVar = 100;
  global = 20; // modifying global
  return [localVar, global];
};
local();
console.log(local());
// console.log(localVar); // not defined
console.log(global);
// Question 2 end --------------------------------------

// Question 3 start --------------------------------------
// I didn't know how to do this question I tried
// scope A
// console.log("1- " + B_global_1 + " " + C_global_1) // error
function Xfunc() {
  // scope B
  var B_global_1 = "B_global_1";
  //  console.log(C_global_1);
  function Yfunc() {
    C_global_1 = "C_global_1";
    // scope C
  }
}
Xfunc();

// Question 3 end --------------------------------------
