const path = require("node:path");

/**
 * Configuration for the file processor.
 * @typedef {Object} FileProcessorConfig
 * @property {string} inputFile - Path to the input file.
 * @property {string} outputFile - Path to the output file.
 * @property {string} processType - Type of processing (e.g., 'uppercase', 'lowercase').
 */

/**
 * Default configuration for the file processor.
 * @type {FileProcessorConfig}
 */
const config = {
  inputFile: path.join(__dirname, "..", "input.txt"),
  outputFile: path.join(__dirname, "..", "output.txt"),
  processType: process.env.PROCESS_TYPE || "uppercase",
};

module.export = config;
