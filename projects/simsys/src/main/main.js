const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");
const LicenseService = require("./services/licenseService");

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, "preload.js"),
    },
  });

  mainWindow.loadFile(
    path.join(__dirname, "../renderer/pages/license-activation/index.html")
  );
  mainWindow.webContents.openDevTools();
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// Handle license activation
ipcMain.handle("activate-license", async (event, data) => {
  console.log("License activation requested:", data);
  const result = await LicenseService.activateLicense(data);

  if (result.success) {
    // If license activation is successful, we'll navigate to the dashboard
    // (we'll implement this later)
    setTimeout(() => {
      mainWindow.loadFile(
        path.join(__dirname, "../renderer/pages/dashboard/index.html")
      );
    }, 1500); // Small delay to show success message
  }

  return result;
});
