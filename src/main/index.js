import { app, BrowserWindow, ipcMain as ipc } from 'electron'; // eslint-disable-line
import irc from 'irc';

let mainWindow;

const client = new irc.Client('chat.freenode.net', 'juju');

client.addListener('notice', (nick, to, text, msg) =>
  mainWindow.webContents.send('notice', { nick, to, text, msg }),
);
client.addListener('motd', msg => mainWindow.webContents.send('motd', msg));
client.addListener('error', msg => mainWindow.webContents.send('error', msg.args[1]));
client.addListener('registered', msg => mainWindow.webContents.send('reply', msg.args[1]));

/**
 * Set `__static` path to static files in production
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-static-assets.html
 */
if (process.env.NODE_ENV !== 'development') {
  /* eslint no-underscore-dangle: ["error", { "allow": ["__static"] }] */
  global.__static = require('path')
    .join(__dirname, '/static')
    .replace(/\\/g, '\\\\'); // eslint-disable-line
}

const winURL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:9080'
    : `file://${__dirname}/index.html`;

function createWindow() {
  /**
   * Initial window options
   */
  mainWindow = new BrowserWindow({
    height: 563,
    useContentSize: true,
    width: 1000,
  });

  mainWindow.loadURL(winURL);

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});

ipc.on('join', (event, data) => {
  client.join(data);
});

/**
 * Auto Updater
 *
 * Uncomment the following code below and install `electron-updater` to
 * support auto updating. Code Signing with a valid certificate is required.
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-electron-builder.html#auto-updating
 */

/*
import { autoUpdater } from 'electron-updater'

autoUpdater.on('update-downloaded', () => {
  autoUpdater.quitAndInstall()
})

app.on('ready', () => {
  if (process.env.NODE_ENV === 'production') autoUpdater.checkForUpdates()
})
 */
