/**
 * studentDAO.js
 * Data access Object
 */
 "use strict"

 const studentDAO =( function() {     
     const students = []
     const getStudents = function() {  
         return students         
     }
     const saveStudent = function(student){
         students.push(student)
         return students
     }
     return{
        getStudents: getStudents,
        saveStudent: saveStudent        
     }
 })();

 module.exports = studentDAO;