"use strict";

import { Patient } from "./module/Patient.js";

$(document).ready(function () {
    const getAge = (dateString) => {
        let today = new Date();
        let birthDate = new Date(dateString);
        let age = today.getFullYear() - birthDate.getFullYear();
        let m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    }
    
    let patientData = [];

    $("#patientForm").submit(function (event) {
        event.preventDefault();
        const ID = $("#ID").val();
        const Fname = $("#Fname").val();
        const Mname = $("#Mname").val();
        const Lname = $("#Lname").val();
        const dateOfBirth = $("#dateOfBirth").val();
        const dep = $("#dep").val();
        const OutPatientYes = $("#OutPatientYes").is(':checked');
        const OutPatientNo = $("#OutPatientNo").is(':checked');

        const newPatient = new Patient(ID, Fname, Mname, Lname, dateOfBirth, dep, OutPatientYes, OutPatientNo);
        patientData.push(newPatient);
        createPatient(newPatient);
        $("#ID").val("");
        $("#Fname").val("");
        $("#Mname").val("");
        $("#Lname").val("");
        $("#dateOfBirth").val("");
        $("#dep").val("");
        $("#OutPatientYes").val("");
        $("#OutPatientNo").val("");
    });


    const createPatient = (newPatient) => {
        const is_out = newPatient.getOutPatientYes() == true ? "Yes" : "No";
        const row = `<tr>
                    <td>${newPatient.getID()}</td>
                    <td>${newPatient.getFname()}</td>
                    <td>${newPatient.getMname()}</td>
                    <td>${newPatient.getLname()}</td>
                    <td>${newPatient.getdateOfBirth()}</td>
                    <td>${newPatient.getdep()}</td>
                    <td>${is_out}</td>
                </tr>`;
        $('#tablePatients tbody').append(row);
    }

    $("#chkShowOutPatients").on("click", function (event) {
        if ($('#chkShowOutPatients').is(':checked')) {
            const newData = patientData.filter(x => x.getOutPatientYes() == true);
            $('#tablePatients tbody').empty();
            newData.forEach(patient => {
                const is_out = patient.getOutPatientYes() == true ? "Yes" : "No";
                const row = `<tr>
                    <td>${patient.getID()}</td>
                    <td>${patient.getFname()}</td>
                    <td>${patient.getMname()}</td>
                    <td>${patient.getLname()}</td>
                    <td>${patient.getdateOfBirth()}</td>
                    <td>${patient.getdep()}</td>
                    <td>${is_out}</td>
                </tr>`;
                $('#tablePatients tbody').append(row);

            });
        } else {
            const newData = patientData;
            $('#tablePatients tbody').empty();
            newData.forEach(patient => {
                const is_out = patient.getOutPatientYes() == true ? "Yes" : "No";
                const row = `<tr>
                    <td>${patient.getID()}</td>
                    <td>${patient.getFname()}</td>
                    <td>${patient.getMname()}</td>
                    <td>${patient.getLname()}</td>
                    <td>${patient.getdateOfBirth()}</td>
                    <td>${patient.getdep()}</td>
                    <td>${is_out}</td>
                </tr>`;
                $('#tablePatients tbody').append(row);
            });
        }
    });

    $("#chkElderlyPatients").on("click", function (event) {
        if ($('#chkElderlyPatients').is(':checked')) {
            const newData = patientData.filter(x => getAge(x.getdateOfBirth()) > 2);
            $('#tablePatients tbody').empty();
            newData.forEach(patient => {
                const is_out = patient.getOutPatientYes() == true ? "Yes" : "No";
                const row = `<tr>
                    <td>${patient.getID()}</td>
                    <td>${patient.getFname()}</td>
                    <td>${patient.getMname()}</td>
                    <td>${patient.getLname()}</td>
                    <td>${patient.getdateOfBirth()}</td>
                    <td>${patient.getdep()}</td>
                    <td>${is_out}</td>
                </tr>`;
                $('#tablePatients tbody').append(row);

            });
        } else {
            const newData = patientData;
            $('#tablePatients tbody').empty();
            newData.forEach(patient => {
                const is_out = patient.getOutPatientYes() == true ? "Yes" : "No";
                const row = `<tr>
                    <td>${patient.getID()}</td>
                    <td>${patient.getFname()}</td>
                    <td>${patient.getMname()}</td>
                    <td>${patient.getLname()}</td>
                    <td>${patient.getdateOfBirth()}</td>
                    <td>${patient.getdep()}</td>
                    <td>${is_out}</td>
                </tr>`;
                $('#tablePatients tbody').append(row);
            });
        }
    });

});


