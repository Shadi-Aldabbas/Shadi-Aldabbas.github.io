"use strict";

export class Person {
  constructor(name, dateOfBirth) {
    this.name = name;
    this.dateOfBirth = dateOfBirth;
  }
  get name() {
    return this.name;
  }
  set name(name) {
    this.name = name;
  }

  get dateOfBirth() {
    return this.dateOfBirth;
  }
  set dateOfBirth(dateOfBirth) {
    this.dateOfBirth = dateOfBirth;
  }
  toString = () =>  `Name: ${this.name}, DateOfBirth: ${this.dateOfBirth.getFullYear()}-${this._dateOfBirth.getMonth() + 1}-${this._dateOfBirth.getDay() + 1}`;
}
