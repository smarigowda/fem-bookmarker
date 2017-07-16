const { shell } = require('electron');

const newLinkUrl = document.querySelector('#new-link-url');
const newLinkSubmit = document.querySelector('.new-link-form--submit');
const newLinkForm = document.querySelector('.new-link-form');
const linkTemplate = document.querySelector('#link-template');
const linksSection = document.querySelector('.links');

newLinkUrl.addEventListener('keyup', () => {
  newLinkSubmit.disabled = !newLinkUrl.validity.valid;
});

linksSection.addEventListener('click', (event) => {
  console.log('click event triggered...');
  console.log(event.target.href);
  if(event.target.href) {
    event.preventDefault();
    shell.openExternal(event.target.href);
  }
});

const parser = new DOMParser();
const parseResponse = text => parser.parseFromString(text, 'text/html');
const findTitle = nodes => nodes.querySelector('title').textContent;

const addToPage = ({ title, url }) => {
  const newLink = linkTemplate.content.cloneNode(true);
  const titleElement = newLink.querySelector('.link-title');
  const urlElement = newLink.querySelector('.link-url');
  titleElement.textContent = title;
  urlElement.href = url;
  urlElement.textContent = url;
  linksSection.appendChild(newLink);
  return ({ url, title });
};

newLinkForm.addEventListener('submit', () => {
  console.log('submit event...');
  event.preventDefault();
  const url = newLinkUrl.value;
  console.log(url);
  fetch(url)
    .then(response => response.text())
    .then(parseResponse)
    .then(findTitle)
    .then(title => ({ title, url }))
    .then(addToPage)
    .then(title => console.log(title))
    .catch(error => console.log(error));
});