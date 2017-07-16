const electron = require('electron');
// console.log(Object.keys(electron));
let { app, BrowserWindow } = electron;

let mainWindow = null;

app.on('ready', () => {
  console.log('The application is ready');
  mainWindow = new BrowserWindow({ 
    width: 300,
    height:600,
    // titleBarStyle: 'hidden-inset',
    show: false
  });

  mainWindow.once('ready-to-show', () => {
    mainWindow.show();
  });

  mainWindow.on('closed', () => {
    mainWindow = null;
  });

  mainWindow.loadURL(`file://${__dirname}/index.html`);
  // mainWindow.loadURL('https://github.com');
  require('devtron').install();
});

console.log('Hello World!');
