"use strict";

export class Patient {
    #ID = null;
    #Fname = null;
    #Mname = null;
    #Lname = null;
    #dateOfBirth = null;
    #dep = null;
    #OutPatientYes = null;
    #OutPatientNo = null;

    constructor(ID, Fname, Mname, Lname, dateOfBirth, dep, OutPatientYes, OutPatientNo) {
        this.#ID = ID;
        this.#Fname = Fname;
        this.#Mname = Mname;
        this.#Lname = Lname;
        this.#dateOfBirth = dateOfBirth;
        this.#dep = dep;
        this.#OutPatientYes = OutPatientYes;
        this.#OutPatientNo = OutPatientNo;
    }

    getID = () => this.#ID;
    getFname = () => this.#Fname;
    getMname = () => this.#Mname;
    getLname = () => this.#Lname;
    getdateOfBirth = () => this.#dateOfBirth;
    getdep = () => this.#dep;
    getOutPatientYes = () => this.#OutPatientYes;
    getOutPatientNo = () => this.#OutPatientNo;

    setID = (ID) => (this.#ID = ID);
    setFname = (Fname) => (this.#Fname = Fname);
    setMname = (Mname) => (this.#Mname = Mname);
    setLname = (Lname) => (this.#Lname = Lname);
    setdateOfBirth = (dateOfBirth) => (this.#dateOfBirth = dateOfBirth);
    setdep = (dep) => (this.#dep = dep);
    setOutPatientYes = (OutPatient) => (this.#OutPatientYes = OutPatient);
    setOutPatientNo = (OutPatient) => (this.#OutPatientNo = OutPatient);

    toString = () => {
        return ` ID: ${this.getID()} Fname: ${this.getFname()} Mname: ${this.getMname()} Lname: ${this.getLname()} dateOfBirth: ${this.getdateOfBirth()} dep: ${this.getdep()} OutPatientYes: ${this.getOutPatientYes()} OutPatientNo: ${this.getOutPatientNo()}`
    }
}
