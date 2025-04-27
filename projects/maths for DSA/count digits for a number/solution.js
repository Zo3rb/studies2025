#!/usr/bin/env node
/**
 * Count Digits of a Number
 *
 * This module contains a function to count the digits in a given integer.
 */

/**
 * Count the number of digits in an integer.
 *
 * @param {number} num - An integer
 * @returns {number} The number of digits in the integer
 */
function countDigits(num) {
  if (num === 0) return 1;

  let count = 0;
  while (Math.abs(num) > 0) {
    count++;
    num = Math.floor(Math.abs(num) / 10);
  }

  return count;
}

// Test cases
function runTests() {
  const testCases = [
    { input: 4578, expected: 4 },
    { input: -392, expected: 3 },
    { input: 0, expected: 1 },
    { input: 1000000, expected: 7 },
    { input: 9, expected: 1 },
    { input: -1, expected: 1 },
  ];

  for (const test of testCases) {
    const result = countDigits(test.input);
    console.log(
      `Number: ${test.input}, Expected: ${test.expected}, Result: ${result}, ${
        result === test.expected ? "✅ Passed" : "❌ Failed"
      }`
    );
  }
}

runTests();
