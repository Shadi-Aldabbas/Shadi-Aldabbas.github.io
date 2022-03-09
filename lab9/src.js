"use strict";

//Q1
const person={
  name:'',
  dateOfBirth:'',
  getName: () => this.name,
  setName: (name) => this.name = name,
}
const john = Object.create(person);
john.setName('john'); 
john.dateOfBirth = '1998-12-10';

console.log(`The person's name is ${john.getName()} \n${john.getName()} was born in ${john.dateOfBirth}` );



// Q2
const Employee={
  __proto__: person,
  salary:0,
  hireDate:new Date(),
  doJob(str){
    console.log(`${this.getName()} is a ${str} who earns $ ${this.salary}`)
  }
}

let Anna = Object.create(Employee);
Anna.setName("Anna");
Anna.salary = '249,995.50';
Anna.doJob("programmer");



// Q3
function Person(name, dateOfBirth){
  this.name = name;
  this.dateOfBirth = dateOfBirth;
}
Person.prototype.getName = () => this.name;
Person.prototype.setName = (name) => this.name= name;
Person.prototype.toString = function() {
  return `Name: ${this.name}, DateOfBirth: ${this.dateOfBirth}`;
} 

const john2 = new Person("John", "1998-12-10");
console.log(john2.toString());
