let yourname = document.querySelector("#yourname")
let phone = document.querySelector("#phone")
let email = document.querySelector("#email")
let formbutton = document.querySelector(".send .btn")
let invalid = document.querySelector(".invalid")
let error = document.querySelector(".error")

formbutton.onclick = function () {
  if (yourname.value == "" || phone.value == "" || email.value == "") {
    error.classList.add("active")
  } else if (phone.value.length < 9 || phone.value.length > 11) {
    invalid.classList.add("active")
  }
  else{
  window.location.href = "contactsucces.html"
  }
}
new WOW().init();