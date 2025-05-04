const fs = require("fs");
const logger = require("./logger");

/**
 * File processor class for reading, processing, and writing files.
 */
class FileProcessor {
  /**
   * Creates a new FileProcessor instance.
   * @param {Object} config - Configuration object.
   * @param {string} config.inputFile - Path to the input file.
   * @param {string} config.outputFile - Path to the output file.
   * @param {string} config.processType - Type of processing (e.g., 'uppercase').
   */
  constructor(config) {
    this.inputFile = config.inputFile;
    this.outputFile = config.outputFile;
    this.processType = config.processType;
  }

  /**
   * Processes the file based on the configuration.
   * @returns {Promise<void>} Resolves when processing is complete.
   */
  async processFile() {
    try {
      // Check if input file exists
      if (!fs.existsSync(this.inputFile)) {
        throw new Error("Input file does not exist");
      }

      // Create streams
      const readStream = fs.createReadStream(this.inputFile, {
        encoding: "utf8",
      });
      const writeStream = fs.createWriteStream(this.outputFile);

      // Log start
      logger.logStart(this.inputFile);

      // Handle stream data
      readStream.on("data", (chunk) => {
        // Convert chunk to buffer and process
        const buffer = Buffer.from(chunk);
        const processedData = this.processData(buffer);

        // Write to output stream
        writeStream.write(processedData);

        // Log data event
        logger.logData(buffer.length);
      });

      // Handle stream end
      readStream.on("end", () => {
        writeStream.end();
        logger.logEnd(this.outputFile);
      });

      // Handle errors
      readStream.on("error", (err) => logger.logError(err));
      writeStream.on("error", (err) => logger.logError(err));

      // Return a promise that resolves when the write stream finishes
      return new Promise((resolve, reject) => {
        writeStream.on("finish", resolve);
        writeStream.on("error", reject);
      });
    } catch (err) {
      logger.logError(err);
      throw err;
    }
  }

  /**
   * Processes the data buffer based on the processType.
   * @param {Buffer} buffer - The data buffer to process.
   * @returns {string} The processed data.
   * @private
   */
  processData(buffer) {
    const data = buffer.toString("utf8");
    switch (this.processType) {
      case "uppercase":
        return data.toUpperCase();
      case "lowercase":
        return data.toLowerCase();
      default:
        throw new Error(`Unknown process type: ${this.processType}`);
    }
  }
}

module.exports = FileProcessor;
