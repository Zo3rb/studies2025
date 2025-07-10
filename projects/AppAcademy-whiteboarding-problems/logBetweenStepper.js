#!/usr/bin/env node

/**
 * Module: logBetweenStepper
 * -------------------------
 * This module defines a function `logBetweenStepper(min, max, step)` that returns
 * an array of numbers from min to max (inclusive), incremented by a given step value.
 *
 * Example usages:
 *   logBetweenStepper(5, 9, 1);       // => [5, 6, 7, 8, 9]
 *   logBetweenStepper(-10, 15, 5);    // => [-10, -5, 0, 5, 10, 15]
 */

/**
 * Returns an array of numbers from min to max (inclusive) incremented by step.
 *
 * @param {number} min - The starting number of the range.
 * @param {number} max - The ending number of the range.
 * @param {number} step - The increment step.
 * @returns {number[]} An array of numbers from min to max incremented by step.
 */
function logBetweenStepper(min, max, step) {
  const result = [];

  if (min >= max) return result;
  else {
    for (let i = min; i <= max; i += step) {
      result.push(i);
    }
  }

  return result;
}

// Example usages
console.log(logBetweenStepper(5, 9, 1)); // => [5, 6, 7, 8, 9]
console.log(logBetweenStepper(-10, 15, 5)); // => [-10, -5, 0, 5, 10, 15]
