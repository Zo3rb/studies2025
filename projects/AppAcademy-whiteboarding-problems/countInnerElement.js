#!/usr/bin/env node

/**
 * Module: countInnerElement
 * --------------------------
 * This module defines the `countInnerElement` function which takes in a 2D array
 * and returns an object that counts how many times each element appears across all subarrays.
 *
 * Example usage:
 *   const arr1 = [
 *     [1, 2, 4, 5],
 *     [2, 7, 4],
 *     [1, 4, 5, 2, 7]
 *   ];
 *   countInnerElement(arr1);  // => {1: 2, 2: 3, 4: 3, 5: 2, 7: 2}
 *
 *   const arr2 = [
 *     ['a','b','c','d'],
 *     ['a','b'],
 *     ['a','c','d','a']
 *   ];
 *   countInnerElement(arr2);  // => {a: 4, b: 2, c: 2, d: 2}
 */

/**
 * Counts occurrences of each element across all subarrays.
 *
 * @param {Array<Array>} arr - A 2D array containing subarrays with elements
 * @returns {Object} - An object mapping elements to their frequency count
 */
function countInnerElement(arr) {
  // Your implementation here
  const elementMap = {};

  for (let i of arr) {
    for (let j of i) {
      elementMap[j] = (elementMap[j] || 0) + 1;
    }
  }

  return elementMap;
}

// Example usage:
const arr1 = [
  [1, 2, 4, 5],
  [2, 7, 4],
  [1, 4, 5, 2, 7],
];
console.log(countInnerElement(arr1)); // => {1: 2, 2: 3, 4: 3, 5: 2, 7: 2}

const arr2 = [
  ["a", "b", "c", "d"],
  ["a", "b"],
  ["a", "c", "d", "a"],
];
console.log(countInnerElement(arr2)); // => {a: 4, b: 2, c: 2, d: 2}
