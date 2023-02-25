// form && input fields
const form = document.querySelector("form");
const firstName = document.querySelector("#first-name");
const lastName = document.querySelector("#last-name");
const number = document.querySelector("#phone-number");
const email = document.querySelector("#email-address");
const password = document.querySelector("#password");
const eye = document.querySelector('.eye');
let clicked = true;
// popup
const popupContainer = document.querySelector("#popup-container");


// _______event listerners
form.addEventListener("submit", onSubmit);

// remove sign up popup
popupContainer.addEventListener("click", () => {
    const popup = popupContainer.children[0];
    popupContainer.classList.remove("active") ;
    popup.classList.remove("active") ;
});

// toggle password visibility
eye.addEventListener("click", toggleVisibility)

// _____________________functions ///
function createMessage(message) {
    const small = document.createElement("small")
    small.textContent = "this field is required";
    message.append(small)

    setInterval(() =>{
      small.remove();
    }, 2000)
}

function onSubmit(e) {
  e.preventDefault();

  // first name error and message
  if(firstName.value === '') {
    firstName.classList.add("error");
    createMessage(firstName.parentElement);
    return;
} else {
    firstName.classList.remove("error");
  }
  // last name error and message
  if(lastName.value === '') {
    lastName.classList.add("error");
    createMessage(lastName.parentElement);
    return;
  } else {
    lastName.classList.remove("error");
  }
  // number error and message
  if(number.value === '') {
    number.classList.add("error");
    createMessage(number.parentElement);
    return;
  } else {
    number.classList.remove("error");
  }
  // email error and message
  if(email.value === '') {
    email.classList.add("error");
    createMessage(email.parentElement);
    return;
  } else {
    email.classList.remove("error");
  }
  // [password error and message
  if(password.value === '') {
    password.classList.add("error");
    createMessage(password.parentElement);
    return;
  } else {
    password.classList.remove("error");
  }

  // SHOW POPUP
  popupContainer.classList.add('active')

  // reset fields
  lastName.value = "";
  firstName.value = "";
  number.value = "";
  password.value = "";
  email.value = "";
}

function toggleVisibility () {
  clicked = !clicked;
  if(clicked) {
    eye.src = "./icon/eye.svg";
    eye.previousElementSibling.setAttribute("type", "password");
} else {
    eye.src = "./icon/v-eye.svg"
    eye.previousElementSibling.setAttribute("type", "text");
  }
}


