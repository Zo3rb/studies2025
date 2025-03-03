const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("api", {
  activateLicense: (data) => ipcRenderer.invoke("activate-license", data),
});
