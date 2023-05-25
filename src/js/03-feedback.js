import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const formEmail = form.querySelector('input[type="email"]');
const formMessage = form.querySelector('textarea[name="message"]');
