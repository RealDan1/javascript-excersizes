let userName = prompt("Please enter username", '');

if (userName === "Admin") {

    let passwInput = prompt("Enter Password", '');

    if (passwInput === "Master") {
        alert("Welcome Big boss");
    } else if ((passwInput === "null") || (passwInput==="")) {
        alert("Cancelled");
    } else if (passwInput) {
        alert("Wrong Password");
    }
    
} else if (userName === null || userName ==="") {
    alert("Cancelled");
} else if (userName){
    alert("I don't know you");
} else {
    alert("Script did not execute properly");
}