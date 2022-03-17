"use strict";

// Question 6,7,8 start --------------------------------------
// JSON object with functions in values
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



// Question 9 in the screenshot --------------------------------------


// Question 10,11 start ---------------------------------------
// revealing
// all the methods that are in return is public other than than they are private
const Employee = () => {
  let name = "";
  let age = 0;
  let salary = 0;

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



  return {
    setAge: setAge,
    setName: setName,
    setSalary: setSalary,
    increaseSalary: increaseSalary,
    incrementAge: incrementAge,
  };
};
Employee.address = "";
Employee.setAddress = (addr) => (Employee.address = addr);
Employee.getAddress = () => Employee.address;

Employee.setAddress("Shadi");
console.log(Employee.address);
// Question 10,11 end ---------------------------------------
