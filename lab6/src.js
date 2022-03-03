"use strict";

// Question 2 start --------------------------------------
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

// Question 6,7,8 start --------------------------------------

const count = {
  value: 0,
  counter_value: 1,
  make_adder: (x) => (count.counter_value = x),
  add: () => (count.value += count.counter_value), // free var is count.value
  reset: () => {
    count.value = 0;
    count.make_adder(1);
    return true;
  }, // free var is count.value
};
console.log("counter = " + count.add());
console.log("counter = " + count.add());
count.make_adder(5);
console.log("counter = " + count.add());
console.log("counter = " + count.add());
console.log("reset = " + count.reset());
console.log("counter = " + count.add());

// Question 6,7,8 end --------------------------------------

// Question 10,11 start ---------------------------------------
const Employee = () => {
  let name = "";
  let age = 0;
  let salary = 0;
  let address = "";

  const setAge = (x) => (age = x);
  const setSalary = (x) => (salary = x);
  const setName = (x) => (name = x);
  const getAge = () => age;
  const getSalary = () => salary;
  const getName = () => name;
  const increaseSalary = (x) => {
    salary += salary * x;
    return getSalary;
  };
  const incrementAge = () => {
    age += 1;
    return getAge;
  };

  const setAddress = (addr) => (this.address = addr);
  const getAddress = () => this.address;

  return {
    setAge: setAge,
    setName: setName,
    setSalary: setSalary,
    increaseSalary: increaseSalary,
    incrementAge: incrementAge,
  };
};
// Question 10,11 end ---------------------------------------
