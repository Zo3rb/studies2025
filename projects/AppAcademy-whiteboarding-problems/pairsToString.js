#!/usr/bin/env node

/**
 * Module: pairsToString
 * ---------------------
 * This module defines the `pairsToString` function, which takes an array of character-count pairs
 * and returns a string where each character is repeated according to its associated count.
 *
 * Example usage:
 *   const array1 = [['a', 3], ['b', 1], ['c', 2]];
 *   pairsToString(array1);  // => 'aaabcc'
 *
 *   const array2 = [['f', 1], ['o', 2], ['d', 1], ['!', 1]];
 *   pairsToString(array2);  // => 'food!'
 */

/**
 * Converts an array of character-count pairs to a string.
 *
 * @param {Array<Array<string, number>>} arr - Array of [char, count] pairs
 * @returns {string} - Concatenated string of repeated characters
 */
function pairsToString(arr) {
  // Your implementation here
  return arr.map((subArr) => String(subArr[0]).repeat(subArr[1])).join("");
}

// Example usage:
const array1 = [
  ["a", 3],
  ["b", 1],
  ["c", 2],
];
console.log(pairsToString(array1)); // => 'aaabcc'

const array2 = [
  ["f", 1],
  ["o", 2],
  ["d", 1],
  ["!", 1],
];
console.log(pairsToString(array2)); // => 'food!'
