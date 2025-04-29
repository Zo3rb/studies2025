#!/usr/bin/env node
/**
 * A simple Node.js program to check if a driver is eligible to be hired.
 * Eligibility requires age >= 18 and a valid driver's license.
 */

const readline = require("readline");

// Create a Readline interface.
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Helper function to ask a question
async function ask(question) {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer.trim());
    });
  });
}

// Function to validate and get age
async function getAge() {
  while (true) {
    const ageInput = await ask("Please enter your age: ");
    const age = parseInt(ageInput);
    if (!isNaN(age) && age >= 0) {
      return age;
    }
    console.log("Please enter a valid non-negative number for age.");
  }
}

// Function to validate and get license status
async function getLicenseStatus() {
  const validResponses = ["yes", "no", "y", "n"];
  while (true) {
    const licenseInput = await ask(
      "Do you have a driver's license? (yes/y/no/n): "
    ).toLowerCase();
    if (validResponses.includes(licenseInput)) {
      return licenseInput === "yes" || licenseInput === "y";
    }
    console.log('Please enter "yes", "y", "no", or "n".');
  }
}

// Main function to check driver eligibility
async function hireDriver() {
  console.log("Welcome to the Driver Hiring Application!\n");

  try {
    // Get age
    const age = await getAge();
    if (age < 18) {
      console.log("Sorry, we cannot hire drivers under 18 years old.");
      return;
    }

    // Get license status
    const hasLicense = await getLicenseStatus();

    // Check eligibility
    if (age >= 18 && hasLicense) {
      console.log(
        "Congratulations! You're eligible. We'll review your application and contact you soon."
      );
    } else {
      console.log("Sorry, you are not eligible for this position.");
    }
  } catch (error) {
    console.error(`An unexpected error occurred: ${error.message}`);
    process.exit(1);
  } finally {
    rl.close();
  }
}

// Handle readline close event
rl.on("close", () => {
  process.exit(0);
});

// Handle Ctrl+C (SIGINT) for clean exit
process.on("SIGINT", () => {
  console.log("\nProgram interrupted by user.");
  rl.close();
});

// Run the program
hireDriver();
