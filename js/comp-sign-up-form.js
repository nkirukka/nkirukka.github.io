const signUpForm = document.querySelector(".sign-up-form");
// Form input
const fName = document.querySelector("#fname");
const lName = document.querySelector("#lname");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const formBtn = document.querySelector(".form-btn");

// Error selection
const fnameError = document.querySelector(".fname-error");
const lnameError = document.querySelector(".lname-error");
const emailError = document.querySelector(".email-error");
const passwordError = document.querySelector(".password-error");

signUpForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const isValid = formValidation();
  if (!isValid) {
    alert("Please fill in all required fields!");
    return;
  } else {
      alert(`Thanks ${fName.value}, your form is well received.`);
    }
    //reset form
  fName.value = "";
  lName.value = "";
  email.value = "";
  password.value = "";
});
const formValidation = () => {
  const firstNameIsValid = fnameValidation();
  const lastNameIsValid = lnameValidation();
  const emailIsValid = emailValidation();
  const passwordIsValid = passwordValidation();

  if(firstNameIsValid && lastNameIsValid && emailIsValid && passwordIsValid) {
    return true;
  }
  return false;
};

const fnameValidation = () => {
  if (fName.value === "") {
    fName.style.borderBottom = "2px solid rgb(255, 210, 210)";
    fnameError.textContent = "First name cannot be empty";
    fnameError.focus();
    return false;
  } else if (fName.value.length < 3) {
    fName.style.borderBottom = "2px solid rgb(255, 210, 210)";
    fnameError.textContent = "First name must be longer than 3 letters";
    fName.focus();
    return false;
  } else {
    fnameError.textContent = "";
    fName.style.borderBottom = "";
    return true;
  }
};
const lnameValidation = () => {
  if (lName.value === "") {
    lName.style.borderBottom = "2px solid rgb(255, 210, 210)";
    lnameError.textContent = "Last name cannot be empty";
    lnameError.focus();
    return false;
  } else if (lName.value.length < 3) {
    lName.style.borderBottom = "2px solid rgb(255, 210, 210)";
    lnameError.textContent = "Last name must be longer than 3 letters";
    lName.focus();
    return false;
  } else {
    lnameError.textContent = "";
    lName.style.borderBottom = "";
    return true;
  }
};
const emailValidation = () => {
  const emailFormat =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!email.value.match(emailFormat)) {
    email.style.borderBottom = "2px solid rgb(255, 210, 210)";
    emailError.textContent = "Please enter a valid email";
    email.focus();
    return false;
  } else {
    emailError.textContent = "";
    email.style.borderBottom = "";
    return true;
  }
};
const passwordValidation = () => {
  if (password.value.length < 6) {
    password.style.borderBottom = "2px solid rgb(255, 210, 210)";
    passwordError.textContent = "Password must be minimun of 6 characters";
    password.focus();
    return false;
  } else {
    passwordError.textContent = "";
    password.style.borderBottom = "";
    return true;
  }
};