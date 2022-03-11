"use strict";

const {contextBridge, ipcRenderer} = require('electron')

contextBridge.exposeInMainWorld("foo", {
	
	ping: () => ipcRenderer.send("ping", performance.now()),

	setup_receiver: (channel, func) => {
		ipcRenderer.on(channel, func);
	},

});
