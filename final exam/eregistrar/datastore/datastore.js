/**
 * datastore.js
 * 
 * @author 
 * @since 
 */
"use strict";

const dataStore = (function(){
    const registrationData = [
        {studentId: "000-11-0001", fullName: "Anna Lynn Smith", levelOfStudy: "Graduate"},
        {studentId: "000-11-0002", fullName: "Bob K. Jones", levelOfStudy: "Undergraduate"}
    ];

    const getData = function() {
        return registrationData;
    }

    const addData = function(student) {
        registrationData.push(student);
        return registrationData;
    }

    return {
        getData: getData,
        addData:addData
    }

})();

module.exports = dataStore;