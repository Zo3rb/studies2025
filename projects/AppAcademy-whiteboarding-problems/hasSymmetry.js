#!/usr/bin/env node

/**
 * Module: hasSymmetry
 * --------------------
 * This module defines the `hasSymmetry` function which determines whether a given
 * array has symmetry. An array has symmetry if it reads the same forwards and backwards.
 *
 * Example usage:
 *   hasSymmetry([1, 2, 3, 3, 2, 1]); // => true
 *   hasSymmetry(['cat', 'dog', 'bird', 'dog', 'cat']); // => true
 */

/**
 * Determines whether the input array is symmetrical.
 *
 * @param {Array} array - An array of elements (numbers, strings, etc.)
 * @returns {boolean} - True if the array has symmetry, false otherwise
 */
function hasSymmetry(array) {
  // Your implementation here
  let p1 = 0;
  let p2 = array.length - 1;

  while (p1 < p2) {
    if (array[p1] !== array[p2]) return false;
    p1++;
    p2--;
  }

  return true;
}

// Example usage:
console.log(hasSymmetry([1, 2, 3, 3, 2, 1])); // => true
console.log(hasSymmetry([1, 2, 3, 3, 4, 1])); // => false
console.log(hasSymmetry(["cat", "dog", "bird", "dog", "cat"])); // => true
console.log(hasSymmetry(["cat", "dog", "bird", "bird", "cat"])); // => false
