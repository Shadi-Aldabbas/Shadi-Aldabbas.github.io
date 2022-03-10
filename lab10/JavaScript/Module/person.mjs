"use strict";

export class Person {
  constructor(name, dateOfBirth) {
    this.name = name;
    this.dateOfBirth = dateOfBirth;
  }
  get name() {
    return this._name;
  }
  set name(name) {
    this._name = name;
  }

  get dateOfBirth() {
    return this._dateOfBirth;
  }
  set dateOfBirth(dateOfBirth) {
    this._dateOfBirth = dateOfBirth;
  }
  toString = () =>  `Name: ${this._name}, DateOfBirth: ${this._dateOfBirth.getFullYear()}-${this._dateOfBirth.getMonth() + 1}-${this._dateOfBirth.getDay() + 1}`;
}
