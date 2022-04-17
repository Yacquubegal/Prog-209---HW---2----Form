
let newUser = '';
let ExUser = '';

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
  newUser = document.getElementById("Username").value;
  console.log(newUser);
  alert("Hello! " + newUser);
}

function LoginExistingUser() {
  ExUser = document.getElementById("UsernameAgain").value;
  console.log(ExUser);
  alert("Welcome back, " + ExUser);
}
