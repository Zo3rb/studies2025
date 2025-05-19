import http from "http";

import app from "./app";

const httpServer = http.createServer(app);
const PORT = process.env.SERVER_PORT || 5000;

httpServer.listen(PORT, () => {
  console.log(`[Server]: HTTP Server is running at http://localhost:${PORT}`);
  if (process.env.NODE_ENV !== "production") {
    console.log(`Express app is configured.`);
  }
});
