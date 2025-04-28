#!/usr/bin/env node
/**
 * @file printNameNTimes.js
 * @description This script contains a recursive function to print a given name N times.
 */

/**
 * Recursively prints the given name N times.
 * @param {number} n - Number of times to print the name
 * @param {string} name - Name to be printed
 */
function printName(n, name) {
  if (n === 0) return;

  console.log(name);
  return printName(n - 1, name);
}

// Test cases
printName(3, "John");
console.log("---");
printName(5, "Alice");
