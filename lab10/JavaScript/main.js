"use strict";

import { Person } from "./Module/person.mjs";
import { Employee } from "./Module/Employee.mjs";

const persons = [
  new Person("Ana Smith", new Date(1998, 11, 15)),
  new Person("Bob Jone", new Date(1945, 10, 16)),
  new Person("Carlos Slim Helu", new Date(1976, 8, 24)),
];
persons.map((x) => console.log(x.toString()));

// Q2
const emps = new Employee("Jim Hanson", new Date(1998, 11, 15), "245.990.00", new Date(2020, 11, 15) );
console.log(emps.doJob("Software Engineer"));
