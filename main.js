"use strict";

const electron = require("electron");
const path = require("path");

let win;

electron.app.whenReady().then(() => {

	win = new electron.BrowserWindow({
		webPreferences: {
			preload: path.join(__dirname, "preload.js"),
			contextIsolation: true,
			nodeIntegration: false,
		},
		show: false,
		width: 640,
		height: 480,
	});

	electron.ipcMain.on("ping", (event, msg) => {
		win.webContents.send("pong", msg);
	});

	win.once("ready-to-show", () => {
		win.show();
		win.focus();
	});

	win.loadFile(path.join(__dirname, "renderer.html"));
});

