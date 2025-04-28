#!/bin/env node
/**
 * Module: Reverse an Array Using Recursion
 *
 * This module provides a function to reverse an array in-place using recursion.
 * It demonstrates the use of recursion to solve the problem without using
 * additional data structures.
 */

/**
 * Reverse a portion of the array in-place using recursion.
 *
 * @param {Array} arr - The array to be reversed.
 * @param {number} start - The starting index of the portion to reverse.
 * @param {number} end - The ending index of the portion to reverse.
 * @returns {Array} - The array with the specified portion reversed.
 *
 * @example
 * reverseArray([1, 2, 3, 4, 5], 0, 4);
 * // returns [5, 4, 3, 2, 1]
 */
function reverseArray(arr, start, end) {
  if (start >= end) {
    return arr;
  }

  [arr[start], arr[end]] = [arr[end], arr[start]];
  return reverseArray(arr, start + 1, end - 1);
}

// Test cases
const testCases = [
  { arr: [1, 2, 3, 4, 5], start: 0, end: 4 },
  { arr: [10, 20, 30], start: 0, end: 2 },
  { arr: [1], start: 0, end: 0 },
  { arr: [], start: 0, end: -1 },
];

testCases.forEach((testCase, index) => {
  const result = reverseArray(testCase.arr, testCase.start, testCase.end);
  console.log(
    `Test Case ${index + 1}: reverseArray(${JSON.stringify(testCase.arr)}, ${
      testCase.start
    }, ${testCase.end}) = ${JSON.stringify(result)}`
  );
});
