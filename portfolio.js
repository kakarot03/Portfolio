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
  var params = {
    from_name: document.getElementById("name").value,
    email_id: document.getElementById("emailId").value,
    message: document.getElementById("message").value,
  };
  emailjs
    .send("service_5o6n3vc", "template_plrwrh5", params)
    .then(function (res) {
      alert("Mail Sent successfully" + res.status);
    });
  document.getElementById("contact_form").reset();
}

showMenu("nav_toggle", "nav_menu");
