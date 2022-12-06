function check(){
    const username = document.getElementById("usernameInput");
    const password = document.getElementById("passwordInput");
    if(username.value === "admin" && password.value === "pass"){
        username.style.backgroundColor = "white";
        password.style.backgroundColor = "white";
        alert("Login successful!");
        return false;
    }else{
        username.style.backgroundColor = "red";
        password.style.backgroundColor = "red";
        alert("Login unsuccessful!");
        return false;
    }
}
function reset(){
    const username = document.getElementById("usernameInput").value;
    const password = document.getElementById("passwordInput").value;
    username = "";
    password = "";
}