var username = document.getElementById("username");
var email = document.getElementById("email");
var pass = document.getElementById("pass");
var pass2 = document.getElementById("pass2");

function ValidateEmail() {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let inputText = email.value;
    console.log(email.value);
    if (inputText.value.match(mailformat)) {

    }
}
