const os = require('os');
const fs = require('fs');

const files = fs.readdirSync(os.homedir());

console.log(files);

files.forEach(name => {
  const file = document.createElement('li');
  file.textContent = name;
  document.body.appendChild(file);
});
