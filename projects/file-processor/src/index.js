const config = require("./config");
const FileProcessor = require("./fileProcessor");
const logger = require("./logger");

/**
 * Main function to run the file processor.
 * @returns {Promise<void>}
 */
async function main() {
  try {
    const processor = new FileProcessor(config);
    await processor.processFile();
  } catch (err) {
    logger.logError(err);
    process.exit(1);
  }
}

// Run the main function
main();
