const inputs = document.querySelector('.contact__form').querySelectorAll('input');
const textArea = document.querySelector('.contact__form').querySelector('textarea');

const userInputs = [...inputs, textArea];
const reg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const email = userInputs.filter(input => input.getAttribute('name').includes('email'))[0];

userInputs.forEach(input => {
  input.addEventListener('blur', () => {
    if (!input.value) {
      input.classList.add('invalid');

    } else if (!reg.test(email.value)) {
      email.classList.add('invalid');
    }
  });

  input.addEventListener('focus', () => {
    if (input.classList.contains('invalid')) {
      input.classList.remove('invalid');
    }
  })
})