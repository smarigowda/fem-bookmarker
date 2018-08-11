const newLinkUrl = document.querySelector('#new-link-url');
console.log(newLinkUrl);
const newLinkSubmit = document.querySelector('.new-link-form--submit');
const newLinkForm = document.querySelector('.new-link-form');

newLinkUrl.addEventListener('keyup', () => {
  console.log('event triggerred');
  newLinkSubmit.disabled = !newLinkUrl.validity.valid;
});


