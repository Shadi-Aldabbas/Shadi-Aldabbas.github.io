/**
 * student.js
 */
 "use strict"

 //TODO: use ES6 class syntax
 
 //this is constructor function - not class
 function Student(studentId, fullName, lvlOfStudy, nextCourse){
     this.studentId = studentId;
     this.fullName = fullName;
     this.lvlOfStudy = lvlOfStudy;
     this.nextCourse = nextCourse;
 }
 
 module.exports = Student;