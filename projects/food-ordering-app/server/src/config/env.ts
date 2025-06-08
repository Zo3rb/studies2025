import dotenv from "dotenv";
import path from "node:path";

dotenv.config({ path: path.resolve(__dirname, "../../.env") });

const getEnvVar = (key: string, required = true): string => {
  const value = process.env[key];
  if (required && !value) {
    throw new Error(`Environment Variable ${key} is Required but not defined.`);
  }

  return value!;
};

export const ENV = {
  PORT: parseInt(getEnvVar("PORT"), 5000),
  MONGO_URI: getEnvVar("MONGO_URI"),
  NODE_ENV: getEnvVar("NODE_ENV"),
};
