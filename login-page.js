const loginButton = document.getElementById("loginButton");

function check(){
    const username = document.getElementById("usernameInput");
    const password = document.getElementById("passwordInput");
    if(username.value === "admin" && password.value === "pass"){
        username.style.backgroundColor = "white";
        password.style.backgroundColor = "white";
        alert("Uspesno logovanje!");
        return false;
    }else{
        username.style.backgroundColor = "red";
        password.style.backgroundColor = "red";
        alert("Neuspesno logovanje!");
        return false;
    }
}

function reset(){
    const username = document.getElementById("usernameInput").value;
    const password = document.getElementById("passwordInput").value;
    username = "";
    password = "";
}