const newLinkUrl = document.querySelector('#new-link-url');
const newLinkSubmit = document.querySelector('.new-link-form--submit');
const newLinkForm = document.querySelector('.new-link-form');

newLinkUrl.addEventListener('keyup', () => {
  newLinkSubmit.disabled = !newLinkUrl.validity.valid;
});

newLinkForm.addEventListener('submit', () => {
  event.preventDefault();
  const url = newLinkUrl.value;
  console.log(url);
  fetch(url)
    .then(response => response.text())
    .then(console.log);
});