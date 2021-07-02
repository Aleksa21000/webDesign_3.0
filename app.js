// Slider
var counter = 1;
setInterval(() => {
  document.getElementById('radio' + counter).checked = true;
  counter++;

  if (counter > 3) {
    counter = 1;
  }
}, 5000);

// Regular expression(Form input's)
document.getElementById('name').addEventListener('blur', validateName);

document.getElementById('email').addEventListener('blur', validateEmail);

document.getElementById('phone').addEventListener('blur', validatePhone);

function validateName() {
  const name = document.getElementById('name');
  const re = /^[a-zA-Z]{2,15}$/;

  if (!re.test(name.value)) {
    document.getElementById('invalid-input-name').style.visibility = 'visible';
  } else {
    document.getElementById('invalid-input-name').style.visibility = 'hidden';
  }
}

function validateEmail() {
  const email = document.getElementById('email');
  const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

  if (!re.test(email.value)) {
    document.getElementById('invalid-input-email').style.visibility = 'visible';
  } else {
    document.getElementById('invalid-input-email').style.visibility = 'hidden';
  }
}

function validatePhone() {
  const phone = document.getElementById('phone');
  const re = /^\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/;

  if (!re.test(phone.value)) {
    document.getElementById('invalid-input-phone').style.visibility = 'visible';
  } else {
    document.getElementById('invalid-input-phone').style.visibility = 'hidden';
  }
}