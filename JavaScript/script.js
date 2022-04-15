


document.addEventListener("DOMContentLoaded", function (event) {
    // disable the lower part of the form until we have user input for all values
        document.getElementById("NewUser").disabled = true;
        document.getElementById("ExUser").disabled = true;
});

  

function Signup() {
  document.getElementById("Signup").disabled = true;
};

function NewUserFunction() {
    console.log("here");
  document.getElementById("Signup").disabled = true;
  document.getElementById("NewUser").disabled = false;
};

function ExUserFunction() {
  document.getElementById("ExUser").disabled = false;
  document.getElementById("Signup").disabled = true;
};


function AddNewUser() {
  alert("Hello! Yacquub Egal");
}

function LoginExistingUser() {
  alert("Welcome back, Yacquub" );
}
