#!/usr/bin/env node

/**
 * Module: intersect
 * -----------------
 * This module defines a function `intersect(arr1, arr2)` that takes in two arrays
 * and returns a new array containing the elements common to both arr1 and arr2.
 *
 * Example usages:
 *   intersect(['a', 'b', 'c', 'd'], ['b', 'd', 'e']) // => [ 'b', 'd' ]
 *   intersect(['a', 'b', 'c'], ['x', 'y', 'z'])      // => []
 */

/**
 * Returns an array of elements common to both input arrays.
 *
 * @param {Array} arr1 - The first array.
 * @param {Array} arr2 - The second array.
 * @returns {Array} An array of elements found in both arr1 and arr2.
 */
function intersect(arr1, arr2) {
  const freq = {};
  const result = [];

  for (let i = 0; i < arr1.length; i++) {
    const val = arr1[i];
    if (!freq[val]) freq[val] = true;
  }

  for (let i = 0; i < arr2.length; i++) {
    const val = arr2[i];
    if (freq[val]) {
      result.push(val);
      freq[val] = false;
    }
  }

  return result;
}

// Example usages
console.log(intersect(["a", "b", "c", "d"], ["b", "d", "e"])); // => [ 'b', 'd' ]
console.log(intersect(["a", "b", "c"], ["x", "y", "z"])); // => []
