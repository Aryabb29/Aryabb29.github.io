 // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
if ( username == "admin" && password == "admin"){
    console.log(username);
    alert ("Login successfully");
    window.location = "dashboard.html"; // Redirecting to other page.

}
else {
    alert ("Incorrect username and password");

}
}