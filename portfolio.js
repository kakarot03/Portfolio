// Show menu

const showMenu = (toggleId, navID) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navID);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show");
    });
  }
};

function dummy(e) {
  e.preventDefault();
  return false;
}

function sendMail() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("emailId").value;
  let msg = document.getElementById("message").value;
  let err = document.getElementById("error");
  if (name === "" || email === "" || msg === "") {
    err.classList.remove("success_message");
    err.classList.add("error_message");
    err.innerHTML = "Fill all the Sections";
    setTimeout(removeMsg, 6000);
    return;
  }
  var params = {
    from_name: name,
    email_id: email,
    message: msg,
  };
  err.classList.remove("error_message");
  err.innerHTML = "";
  document.getElementById("contact_form").reset();
  emailjs
    .send("service_5o6n3vc", "template_plrwrh5", params)
    .then(function (res) {
      err.classList.add("success_message");
      err.innerHTML = "Mail Sent Successfully";
    });
  setTimeout(removeMsg, 6000);
}

function removeMsg() {
  document.getElementById("error").innerHTML = "";
}

showMenu("nav_toggle", "nav_menu");
