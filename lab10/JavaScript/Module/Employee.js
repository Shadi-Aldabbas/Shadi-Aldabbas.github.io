"use strict";
import { Person } from "./person.js";

export class Employee extends Person {
  constructor(name, dateOfBirth, salary, hireDate) {
    super(name, dateOfBirth);
    this.salary = salary;
    this.hireDate = hireDate;
  }
  doJob(str) {
    return `${this.name} is a ${str} who earns $${this.salary}`;
  }
}
