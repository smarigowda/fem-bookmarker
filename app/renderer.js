const urlInput = document.querySelector('#new-link-url');
console.log(urlInput);
const submitButton = document.querySelector('.new-link-form--submit');
const form = document.querySelector('.new-link-form');

urlInput.addEventListener('keyup', () => {
  // console.log('event triggerred');
  submitButton.disabled = !urlInput.validity.valid;
});

const parser = new DOMParser();

const parseResponse = text => parser.parseFromString(text, 'text/html');

const findTitle = nodes => nodes.querySelector('title').text;

form.addEventListener('submit', event => {
  event.preventDefault();
  const url = urlInput.value;
  console.log(url);
  fetch(url)
    .then(response => response.text())
    .then(parseResponse)
    .then(findTitle)
    .then(console.log)
    .catch(error => console.error(error));
});

