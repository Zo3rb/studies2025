import express, { Application, Request, Response } from "express";
import cors from "cors";

// Local Imports
import connectDB from "./config/db";
import healthyRouter from "./routes/healthCheck.routes";
import { errorHandler } from "./middlewares/errorHandler";
import { notFound } from "./middlewares/notFound";
import logger from "./utils/logger";

const app: Application = express();

// Built-in Middleware
app.use(cors());
app.use(express.json());

// Log all requests (simple middleware)
app.use((req, res, next) => {
  logger.info(`[${req.method}] ${req.url}`);
  next();
});

// Mounting Routes Here.
app.use("/api/v1", healthyRouter);

// 404 middleware
app.use(notFound);

// Error handling middleware (always last)
app.use(errorHandler);

// Starting the Server.
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`[SERVER] Application is Running on PORT: ${PORT}`);
  connectDB();
});
