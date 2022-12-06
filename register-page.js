const registerButton = document.getElementById("registerButton");

function check(){
    const firstName = document.getElementById("firstNameInput").value;
    const lastName = document.getElementById("lastNameInput").value;
    const username = document.getElementById("usernameInput").value;
    const password = document.getElementById("passwordInput").value;
    const capitalizedFirstName = firstName.charAt(0).toUpperCase() + firstName.slice(1);
    const capitalizedLastName = lastName.charAt(0).toUpperCase() + lastName.slice(1);
    let testUser = {firstName: "Nevena", lastName: "Prtljaga", username: "nprtljaga", password: "np13!"};
 
    if(firstName === capitalizedFirstName  && 
        lastName === capitalizedLastName &&
        username != testUser.username &&
        username.length > 3 &&
        passwordChecker(password)){
            alert("Successful sign up. Here is your info: First name - " + firstName + ", Last name - " + lastName + ", Username - " + username + ".");
        console.log("ok");
        return false;
    }else{
        alert("Try again, hint: First and last name should be capitalized. Username exists in db. Username has to be longer than 3 characters. " +
          "Password has to contain at least one capitalized letter, one number and one special character.")
        console.log('failam');
        return false;
    }

}

function passwordChecker(password){
    if(/\d/|/[A-Z]/|/[ -/:-@[-`{-~]/.test(password)){
        return true;
    }
    else{
        return false;
    }
}

function reset(){
    const username = document.getElementById("usernameInput").value;
    const password = document.getElementById("passwordInput").value;
    username = "";
    password = "";
}