import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');
const STORAGE_KEY = 'feedback-form-state';

form.addEventListener(
  'input',
  throttle(() => {
    const data = {
      email: emailInput.value,
      message: messageInput.value,
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  }, 500)
);

const savedData = localStorage.getItem(STORAGE_KEY);
if (savedData) {
  const { email, message } = JSON.parse(savedData);
  emailInput.value = email;
  messageInput.value = message;
}

form.addEventListener('submit', event => {
  event.preventDefault();
  const data = {
    email: emailInput.value,
    message: messageInput.value,
  };
  console.log(data);
  localStorage.removeItem(STORAGE_KEY);
  form.reset();
});
