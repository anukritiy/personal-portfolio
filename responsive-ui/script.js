function setupNavToggle(toggleId, linksId) {
  const toggle = document.getElementById(toggleId);
  const links = document.getElementById(linksId);
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      links.classList.toggle('open');
    });
  }
}

setupNavToggle('navToggle', 'navLinks');
setupNavToggle('navToggleStore', 'navLinksStore');

const form = document.getElementById('contactForm');

if (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();

    let isValid = true;

    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');

    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const messageError = document.getElementById('messageError');
    const successMsg = document.getElementById('successMsg');

    nameError.textContent = '';
    emailError.textContent = '';
    messageError.textContent = '';
    successMsg.textContent = '';

    if (name.value.trim() === '') {
      nameError.textContent = 'Name is required.';
      isValid = false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value.trim())) {
      emailError.textContent = 'Enter a valid email address.';
      isValid = false;
    }

    if (message.value.trim() === '') {
      messageError.textContent = 'Message cannot be empty.';
      isValid = false;
    }

    if (isValid) {
      successMsg.textContent = 'Message sent successfully!';
      form.reset();
    }
  });
}