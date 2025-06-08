import { Router } from "express";

// Local Imports.
import healthCheck from "../controllers/healthCheck.controller";

const healthyRouter = Router();

healthyRouter.get("/is-healthy", healthCheck);

export default healthyRouter;
