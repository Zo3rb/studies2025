#!/usr/bin/env node

/**
 * mirrorArray.js
 *
 * This module defines a function `mirrorArray` that takes an array as input
 * and returns a new array that is a mirrored version of the original.
 * Mirroring means appending the reversed copy of the array to itself.
 *
 * Examples:
 * mirrorArray([1, 2, 3]);               // => [1, 2, 3, 3, 2, 1]
 * mirrorArray(['a', 'b', 'c', 'd']);    // => ['a', 'b', 'c', 'd', 'd', 'c', 'b', 'a']
 */

/**
 * Returns a mirrored version of the input array.
 * The mirrored array contains the original elements followed by the reversed version.
 *
 * @param {Array} array - The input array to mirror.
 * @returns {Array} The mirrored array.
 */
function mirrorArray(array) {
  const mirroredArr = [...array];

  while (array.length) {
    mirroredArr.push(array.pop());
  }

  return mirroredArr;
}

// Example usage:
console.log(mirrorArray([1, 2, 3])); // => [1, 2, 3, 3, 2, 1]
console.log(mirrorArray(["a", "b", "c", "d"])); // => ['a', 'b', 'c', 'd', 'd', 'c', 'b', 'a']
