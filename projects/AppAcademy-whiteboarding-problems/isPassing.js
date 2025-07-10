#!/usr/bin/env node

/**
 * Module: isPassing
 * -----------------
 * This module defines the `isPassing` function which determines whether
 * the average score from a list of assessments is at least 70.
 *
 * Example usage:
 *   isPassing([{ number: 1, score: 60 }, { number: 2, score: 90 }]);  // => true
 *   isPassing([{ number: 1, score: 60 }, { number: 2, score: 20 }]);  // => false
 */

/**
 * Determines if the average score in assessments is at least 70.
 *
 * @param {Array<{number: number, score: number}>} assessments - Array of assessment objects
 * @returns {boolean} - true if average score is ≥ 70, false otherwise
 */
function isPassing(assessments) {
  // Your implementation here
  let sum = 0;

  for (let i = 0; i < assessments.length; i++) {
    sum += assessments[i].score;
  }

  return sum / assessments.length >= 70;
}

// Example usage:
const assessments1 = [
  { number: 1, score: 60 },
  { number: 2, score: 90 },
  { number: 3, score: 80 },
  { number: 4, score: 100 },
  { number: 5, score: 85 },
];
console.log(isPassing(assessments1)); // => true

const assessments2 = [
  { number: 1, score: 60 },
  { number: 2, score: 20 },
  { number: 3, score: 45 },
];
console.log(isPassing(assessments2)); // => false
