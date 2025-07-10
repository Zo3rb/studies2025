#!/usr/bin/env node

/**
 * Module: peakFinder
 * ------------------
 * This module exports a function `peakFinder` that takes an array of numbers
 * and returns the indices of all "peak" elements. A peak is defined as:
 * - Greater than both neighbors if it's in the middle.
 * - Greater than the one neighbor if it's the first or last element.
 *
 * Assumes the input array has at least two elements.
 */

/**
 * Returns the indices of all peak elements in the array.
 *
 * @param {number[]} array - Array of numbers
 * @returns {number[]} Array of indices where the values are peaks
 */
function peakFinder(array) {
  const peaks = [];

  for (let i = 0; i < array.length; i++) {
    const prev = array[i - 1];
    const curr = array[i];
    const next = array[i + 1];

    if (
      (i === 0 && curr > next) ||
      (i === array.length - 1 && curr > prev) ||
      (i > 0 && i < array.length - 1 && curr > prev && curr > next)
    ) {
      peaks.push(i);
    }
  }

  return peaks;
}

module.exports = peakFinder;

// Example usage:
if (require.main === module) {
  console.log(peakFinder([1, 2, 3, 2, 1])); // => [2]
  console.log(peakFinder([2, 1, 2, 3, 4, 5])); // => [0, 5]
  console.log(peakFinder([4, 6, 9, 4, 2, -7, 2, -4, 5])); // => [2, 6, 8]
}
