import { Request, Response } from "express";
import mongoose from "mongoose";

const healthCheck = async (req: Request, res: Response) => {
  const dbState = mongoose.connection.readyState;

  const statusMap = {
    0: "Disconnected",
    1: "Connected",
    2: "Connecting",
    3: "Disconnecting",
  };

  res.status(200).json({
    status: "success",
    timestamp: new Date().toISOString(),
    db: {
      state: dbState,
      status: statusMap[dbState as keyof typeof statusMap],
    },
    uptime: process.uptime(),
    version: process.env.npm_package_version || "N/A",
  });
};

export default healthCheck;
