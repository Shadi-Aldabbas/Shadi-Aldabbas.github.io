const alertIt = () => {
    const FullName = document.getElementById("FullName").value; 
    const CitizenID = document.getElementById("CitizenID").value; 
    const SSN = document.getElementById("SSN").value; 
    const State = document.getElementById("State").value; 
    const yes = document.getElementById("yes").checked; 
    const no = document.getElementById("no").checked; 

    const citizen = yes == true? "yes" : "no";
    alert(
        "FullName: "+FullName + '\n' +
        "CitizenID: "+CitizenID + '\n' +
        "SSN: "+SSN + '\n' +
        "State: "+State + '\n' +
        "citizen: "+citizen
        )


}