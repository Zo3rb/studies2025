import express, { Express, Request, Response, NextFunction } from "express";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();

// Middleware to parse JSON bodies
app.use(express.json());

// A simple root route to test if the server is working
app.get("/", (req: Request, res: Response) => {
  res.send("Hello from the Book Store API");
});

// API Routes - Mount the main API router under /api

// Basic Error Handling middleware (ensure it's one of the last app.use() calls before listen)
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  const statusCode = (err as any).statusCode || 500;
  res.status(statusCode).json({
    success: false,
    message: err.message || "An internal server error occurred.",
  });
});

export default app;
