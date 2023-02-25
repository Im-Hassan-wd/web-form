const form = document.querySelector("form");
const firstName = document.querySelector("#first-name");
const lastName = document.querySelector("#last-name");
const number = document.querySelector("#phone-number");
const email = document.querySelector("#email-address");
const password = document.querySelector("#password");

form.addEventListener("submit", onSubmit);

function onSubmit(e) {
  e.preventDefault();

  if(firstName.value === '') {
    console.log(firstName)
  }
}

