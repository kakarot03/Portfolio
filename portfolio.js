let num = 0;
let myInterval;

const showMenu = (toggleId, navID) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navID);

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('show');
    });
  }
};

function dummy(e) {
  e.preventDefault();
  return false;
}

async function sendMail() {
  let name = document.getElementById('name').value;
  let email = document.getElementById('emailId').value;
  let msg = document.getElementById('message').value;
  let err = document.getElementById('error');
  if (name === '' || email === '' || msg === '') {
    document.getElementById('submit').style.visibility = 'hidden';
    err.classList.remove('success_message');
    err.classList.add('error_message');
    err.innerHTML = 'Fill all the Sections';
    setTimeout(removeMsg, 3000);
    return;
  }
  var params = {
    from_name: name,
    email_id: email,
    message: msg,
  };
  err.classList.remove('error_message');
  document.getElementById('contact_form').reset();
  // await emailjs.send('service_5o6n3vc', 'template_plrwrh5', params).then(() => {
  //   err.classList.add('success_message');
  //   err.innerHTML = 'Mail Sent Successfully';
  // });
  setTimeout(removeMsg, 3000);
}

function removeMsg() {
  document.getElementById('error').innerText = '';
}

showMenu('nav_toggle', 'nav_menu');

document.getElementById('connect_button').addEventListener('click', () => {
  document.getElementById('connect_button').scrollIntoView();
  myInterval = setInterval(myTimer, 300);
  num = -1;
});

const myTimer = () => {
  if (num >= 5) {
    clearInterval(myInterval);
    num = -1;
  }
  num++;
  document.getElementById('icon' + num).classList.add('hover_icon');
  document.getElementById('li' + num).classList.add('hover_anchor');
  setTimeout(() => {
    document.getElementById('icon' + num).classList.remove('hover_icon');
    document.getElementById('li' + num).classList.remove('hover_anchor');
  }, 250);
};

document.addEventListener('DOMContentLoaded', () => {
  iconShadow();
});

const showShadow = (id) => {
  document.getElementById('shadow' + id).style.display = 'block';
};

const hideShadow = (id) => {
  document.getElementById('shadow' + id).style.display = 'none';
};

const iconShadow = () => {
  document.getElementById('icon1').addEventListener('mouseover', () => {
    showShadow(1);
  });
  document.getElementById('icon2').addEventListener('mouseover', () => {
    showShadow(2);
  });
  document.getElementById('icon3').addEventListener('mouseover', () => {
    showShadow(3);
  });
  document.getElementById('icon4').addEventListener('mouseover', () => {
    showShadow(4);
  });
  document.getElementById('icon5').addEventListener('mouseover', () => {
    showShadow(5);
  });

  document.getElementById('icon1').addEventListener('mouseleave', () => {
    hideShadow(1);
  });
  document.getElementById('icon2').addEventListener('mouseleave', () => {
    hideShadow(2);
  });
  document.getElementById('icon3').addEventListener('mouseleave', () => {
    hideShadow(3);
  });
  document.getElementById('icon4').addEventListener('mouseleave', () => {
    hideShadow(4);
  });
  document.getElementById('icon5').addEventListener('mouseleave', () => {
    hideShadow(5);
  });
};

// contact button
document.querySelectorAll('button').forEach((button) => {
  let getVar = (variable) =>
    getComputedStyle(button).getPropertyValue(variable);

  button.addEventListener('click', (e) => {
    if (!button.classList.contains('active')) {
      button.classList.add('active');

      gsap.to(button, {
        keyframes: [
          {
            '--left-wing-first-x': 50,
            '--left-wing-first-y': 100,
            '--right-wing-second-x': 50,
            '--right-wing-second-y': 100,
            duration: 0.2,
            onComplete() {
              gsap.set(button, {
                '--left-wing-first-y': 0,
                '--left-wing-second-x': 40,
                '--left-wing-second-y': 100,
                '--left-wing-third-x': 0,
                '--left-wing-third-y': 100,
                '--left-body-third-x': 40,
                '--right-wing-first-x': 50,
                '--right-wing-first-y': 0,
                '--right-wing-second-x': 60,
                '--right-wing-second-y': 100,
                '--right-wing-third-x': 100,
                '--right-wing-third-y': 100,
                '--right-body-third-x': 60,
              });
            },
          },
          {
            '--left-wing-third-x': 20,
            '--left-wing-third-y': 90,
            '--left-wing-second-y': 90,
            '--left-body-third-y': 90,
            '--right-wing-third-x': 80,
            '--right-wing-third-y': 90,
            '--right-body-third-y': 90,
            '--right-wing-second-y': 90,
            duration: 0.2,
          },
          {
            '--rotate': 50,
            '--left-wing-third-y': 95,
            '--left-wing-third-x': 27,
            '--right-body-third-x': 45,
            '--right-wing-second-x': 45,
            '--right-wing-third-x': 60,
            '--right-wing-third-y': 83,
            duration: 0.25,
          },
          {
            '--rotate': 60,
            '--plane-x': -8,
            '--plane-y': 40,
            duration: 0.2,
          },
          {
            '--rotate': 40,
            '--plane-x': 45,
            '--plane-y': -300,
            '--plane-opacity': 0,
            duration: 0.375,
            onComplete() {
              setTimeout(() => {
                button.removeAttribute('style');
                gsap.fromTo(
                  button,
                  {
                    opacity: 0,
                    y: -8,
                  },
                  {
                    opacity: 1,
                    y: 0,
                    clearProps: true,
                    duration: 0.3,
                    onComplete() {
                      button.classList.remove('active');
                    },
                  }
                );
              }, 1800);
            },
          },
        ],
      });

      gsap.to(button, {
        keyframes: [
          {
            '--text-opacity': 0,
            '--border-radius': 0,
            '--left-wing-background': getVar('--primary-dark'),
            '--right-wing-background': getVar('--primary-dark'),
            duration: 0.11,
          },
          {
            '--left-wing-background': getVar('--primary'),
            '--right-wing-background': getVar('--primary'),
            duration: 0.14,
          },
          {
            '--left-body-background': getVar('--primary-dark'),
            '--right-body-background': getVar('--primary-darkest'),
            duration: 0.25,
            delay: 0.1,
          },
          {
            '--trails-stroke': 171,
            duration: 0.22,
            delay: 0.22,
          },
          {
            '--success-opacity': 1,
            '--success-x': 0,
            duration: 0.2,
            delay: 0.15,
          },
          {
            '--success-stroke': 0,
            duration: 0.15,
          },
        ],
      });
    }
  });
});
