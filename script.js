var root = document.documentElement;
var login = document.querySelector("#login");
var submit = document.querySelector("#submit");

function changeColor(id, value) {
  root.style.setProperty(`--${id}`, value);
}

function validate(event) {
  val = event.target.value;
  
  if (val == "") {
    submit.className = "default-active";
    login.className = "default-active";
  }
  else if (val.toLowerCase() != "testuser" || val.includes(" ")) {
    submit.className = "error-active";
    login.className = "error-active";
  }
  else {
    submit.className = "valid-active";
    login.className = "valid-active";

  }
}