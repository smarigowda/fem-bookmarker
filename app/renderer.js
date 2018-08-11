const urlInput = document.querySelector('#new-link-url');
console.log(urlInput);
const submitButton = document.querySelector('.new-link-form--submit');
const form = document.querySelector('.new-link-form');

const linkTemplate = document.querySelector('#link-template');
console.dir(linkTemplate);
const linkSection = document.querySelector('.links');


urlInput.addEventListener('keyup', () => {
  // console.log('event triggerred');
  submitButton.disabled = !urlInput.validity.valid;
});

const parser = new DOMParser();

const parseResponse = text => parser.parseFromString(text, 'text/html');
const findTitle = nodes => nodes.querySelector('title').text;

const addToPage = ({ title, url }) => {
  const newLink = linkTemplate.content.cloneNode(true);
  const titleElement = newLink.querySelector('.link--title');
  const urlElement = newLink.querySelector('.link--url');

  titleElement.textContent = title;
  urlElement.href = url;
  urlElement.textContent = url;
  linkSection.appendChild(newLink);
  return { title, url };
};

form.addEventListener('submit', event => {
  event.preventDefault();
  const url = urlInput.value;
  console.log(url);
  fetch(url)
    .then(response => response.text())
    .then(parseResponse)
    .then(findTitle)
    .then(title => ({ title, url }))
    .then(addToPage)
    .then(console.log)
    .catch(error => console.error(error));
});

