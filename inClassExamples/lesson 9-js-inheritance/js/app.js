/**
 * app.js
 */
console.log("Hello, JavaScript OOP - Prototypal Inheritance");

const person = {
    name: null,
    dateOfBirth: null
};

console.log(person.__proto__);

const student = {
    cgpa: 0.00
};

// student.__proto__ = person;
Object.setPrototypeOf(student, person);
console.log(Object.getPrototypeOf(student));

console.log(student);

const employee = {
    job: null,
    salary: 0.00
};

employee.__proto__ = person;
console.log(employee);

// const anna = Object.create(student);
// anna.name = "Anna Smith";
// anna.dateOfBirth = new Date(1988, 2, 11);
// anna.cgpa = 3.55;
// console.log(anna);

const anna = Object.create(student, {
    name: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: "Anna Smith"
    },
    dateOfBirth: {
        value: new Date(1988, 2, 11)
    },
    cgpa: {
        value: 3.55
    }
});
console.log(anna);
anna.name = "Anna Lynn Smith";
console.log(anna);
// ====================
function sum(a, b) {
    return a + b;
}

// Construction Functions
function Animal(name) {
    this.name = name;
}
const animal1_rabbit = new Animal("Rabbit");
const animal2_cat = new Animal("Cat");

Animal("Dog");
// Cannot do this -- No overload in JS
// function Animal(name, food) {
//     this.name = name;
// }

// Using the obj.prototype property and CF and "new" operator
const animal = {
    eats: true
};

function Rabbit(name) {
    this.name = name;
}
Rabbit.prototype = animal;
let rabbit = new Rabbit("White Rabbit");
console.log(rabbit.__proto__);
console.log(rabbit.eats);

function Person() {
    console.log(this);
    this.universsity = "MIU";
    this.year = 2016
}

const faculty1 = new Person();
Person.prototype.greet = function(name) {
    return "Hi, " + name + ". You teach in " + this.universsity;
} 
console.log(faculty1.greet("Anna"));
const faculty2 = new Person();
console.log(faculty1.greet("Bob"));
console.log(faculty1.constructor); // prints Person constructor function

