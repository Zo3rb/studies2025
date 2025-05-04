const EventEmitter = require("node:events");
const path = require("node:path");

/**
 * Logger class for handling file processing events.
 * @extends EventEmitter
 */
class Logger extends EventEmitter {
  /**
   * Creates a new Logger instance and sets up event listeners.
   */
  constructor() {
    super();
    this.setupListeners();
  }

  /**
   * Sets up event listeners for logging.
   * @private
   */
  setupListeners() {
    this.on("start", (inputFile) => {
      console.log(`Start processing ${path.basename(inputFile)}`);
    });

    this.on("data", (chunkSize) => {
      console.log(`Processed chunk of ${chunkSize} bytes`);
    });

    this.on("end", (outputFile) => {
      console.log(
        `Finished processing. Output saved to ${path.basename(outputFile)}`
      );
    });

    this.on("error", (err) => {
      console.error(`Error: ${err.message}`);
    });
  }

  /**
   * Logs the start of file processing.
   * @param {string} inputFile - Path to the input file.
   */
  logStart(inputFile) {
    this.emit("start", inputFile);
  }

  /**
   * Logs data processing.
   * @param {number} chunkSize - Size of the processed chunk in bytes.
   */
  logData(chunkSize) {
    this.emit("data", chunkSize);
  }

  /**
   * Logs the end of file processing.
   * @param {string} outputFile - Path to the output file.
   */
  logEnd(outputFile) {
    this.emit("end", outputFile);
  }

  /**
   * Logs an error.
   * @param {Error} err - The error object.
   */
  logError(err) {
    this.emit("error", err);
  }
}

module.exports = new Logger();
