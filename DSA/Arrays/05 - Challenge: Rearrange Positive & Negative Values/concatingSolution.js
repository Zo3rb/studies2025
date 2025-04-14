#!/usr/bin/env node
/**
 * rearrangePositiveNegativeConcat.js
 *
 * This module contains a function to rearrange elements in a list such that all
 * negative elements appear to the left and all non-negative elements appear to
 * the right by concatenating the negative and positive arrays.
 */

/**
 * Rearranges the input array so that all negative numbers appear before all
 * non-negative numbers (including zero). The relative order of elements is
 * not required to be preserved.
 *
 * @param {number[]} lst - An array of integers.
 * @returns {number[]} - An array with all negative numbers on the left and non-negative
 *                       numbers on the right.
 */
function rearrangeValues(lst) {
  const negativeValues = [];
  const nonNegativeValues = [];

  for (let num of lst) {
    if (num < 0) {
      negativeValues.push(num);
    } else {
      nonNegativeValues.push(num);
    }
  }

  return [...negativeValues, ...nonNegativeValues];
}

// Example usage
function main() {
  const testArray = [1, -3, 4, -2, 0, -1, 5];
  console.log("Input:", testArray);
  console.log("Output:", rearrangeValues(testArray));
}

main();
