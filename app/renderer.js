const newLinkUrl = document.querySelector('#new-link-url');
const newLinkSubmit = document.querySelector('.new-link-form--submit');
const newLinkForm = document.querySelector('.new-link-form');

newLinkUrl.addEventListener('keyup', () => {
  newLinkSubmit.disabled = !newLinkUrl.validity.valid;
});

const parser = new DOMParser();
const parseResponse = text => parser.parseFromString(text, 'text/html');
const findTitle = nodes => nodes.querySelector('title').textContent;

newLinkForm.addEventListener('submit', () => {
  console.log('submit event...');
  event.preventDefault();
  const url = newLinkUrl.value;
  console.log(url);
  fetch(url)
    .then(response => response.text())
    // .then(console.log)
    .then(parseResponse)
    // .then(console.log)
    .then(findTitle)
    .then(title => console.log(title))
    .catch(error => console.log(error));
});