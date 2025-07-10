#!/usr/bin/env node

/**
 * Module: elementCount
 * ---------------------
 * This module defines the `elementCount` function, which takes an array and
 * returns an object that maps each unique element to the number of times it appears.
 *
 * Example usage:
 *   elementCount(["a", "a", "b", "b"]); // => { "a": 2, "b": 2 }
 *   elementCount(["c", "a", "c", "a", "b"]); // => { "c": 2, "a": 2, "b": 1 }
 */

/**
 * Counts the frequency of each element in the input array.
 *
 * @param {Array} array - An array of elements (strings, numbers, etc.)
 * @returns {Object} - An object mapping elements to their frequency count
 */
function elementCount(array) {
  // Your implementation here
  const elementMap = {};

  for (let i of array) {
    elementMap[i] = (elementMap[i] || 0) + 1;
  }

  return elementMap;
}

// Example usage:
console.log(elementCount(["a", "a", "b", "b"])); // => { "a": 2, "b": 2 }
console.log(elementCount(["c", "a", "c", "a", "b"])); // => { "c": 2, "a": 2, "b": 1 }
