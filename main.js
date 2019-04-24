const {app, BrowserWindow, Menu} = require('electron');
//  Main Process
const { webContents } = require('electron')

const path = require('path')
const url = require('url')
let win

function createWindow() {
	win = new BrowserWindow({width: 800, heigh:600})
		win.loadURL(url.format({
			pathname:path.join(__dirname,'main.html'),
			protocol: 'file',
			slashes: true
		})
	)
	win.on('closed', () => {
		win=null
	})

	win.openDevTools()
	console.log(webContents)
}

app.on('ready', createWindow)

app.on('activate',()=> {
	if(win == null)
	{
		createWindow()
	}
})