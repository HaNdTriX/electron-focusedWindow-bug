const { app, BrowserWindow } = require('electron')

app.on('ready', () => {
  const window1 = new BrowserWindow({
    height: 700,
    webPreferences: {
      webviewTag: true
    }
  })
  window1.loadFile('index.html')
})
