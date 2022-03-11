"use strict";

import { Patient } from "./module/Patient.js";



$(document).ready(function () {
  const patientData = [];

  $("#patientForm").submit(function (event) {
    event.preventDefault();
    const ID = $("#ID").val();
    const Fname = $("#Fname").val();
    const Mname = $("#Mname").val();
    const Lname = $("#Lname").val();
    const dateOfBirth = $("#dateOfBirth").val();
    const dep = $("#dep").val();
    const OutPatientYes = $("#OutPatientYes").val();
    const OutPatientNo = $("#OutPatientNo").val();

    const newPatient = new Patient(ID,Fname,Mname,Lname,dateOfBirth,dep,OutPatientYes,OutPatientNo);
    patientData.push(newPatient);
    createPatient(newPatient);
    // $("#ID").val("");
    // $("#Fname").val("");
    // $("#Mname").val("");
    // $("#Lname").val("");
    // $("#dateOfBirth").val("");
    // $("#dep").val("");
    // $("#OutPatientYes").val("");
    // $("#OutPatientNo").val("");
  });

//   function createAccount(newPatient, numAccounts) {
//     const tblAccounts = document.querySelector("#tblAccounts");
//     const newRow = tblAccounts.insertRow(-1);
//     const newCellRowId = newRow.insertCell(0);
//     const nextRowId = numAccounts + 2;
//     const strNewRowId = document.createTextNode(`${nextRowId}.`);
//     newCellRowId.appendChild(strNewRowId); // a
//     const newCellAccountNo = newRow.insertCell(1);
//     const strNewRowAccountNo = document.createTextNode(
//       `${newPatient.getAccountNo()}`
//     );
//     newCellAccountNo.appendChild(strNewRowAccountNo);
//     const newCellCustomerName = newRow.insertCell(2);
//     const strNewRowCustomerName = document.createTextNode(
//       `${newPatient.getCustomerName()}`
//     );
//     newCellCustomerName.appendChild(strNewRowCustomerName);
//     const newCellAccountType = newRow.insertCell(3);
//     const strNewRowAccountType = document.createTextNode(
//       `${newPatient.getAccountType()}`
//     );
//     newCellAccountType.appendChild(strNewRowAccountType);
//     console.log("Account created");
//   }
const createPatient = (newPatient) => { 
    const row_id = $('#tablePatients tbody tr').length + 1;
    const is_out = newPatient.OutPatientYes == true ? true : false;
    const row = `
    <tr>
        <td>${newPatient.getID()}</td>
        <td>${newPatient.getFname()}</td>
        <td>${newPatient.getMname()}</td>
        <td>${newPatient.getLname()}</td>
        <td>${newPatient.getdateOfBirth()}</td>
        <td>${newPatient.getdep()}</td>
        <td>${is_out}</td>
        
    </tr>
    `
    $('#tablePatients tbody').append(row);
    // this.reset();
    alert('paitent inserted successfully');
}
});
