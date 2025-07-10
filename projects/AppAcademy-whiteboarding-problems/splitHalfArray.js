#!/usr/bin/env node

/**
 * Module: splitHalfArray
 * -----------------------
 * This module exports a function `splitHalfArray` that takes an array and returns
 * two halves split in the middle. If the array has an odd number of elements,
 * the middle element is excluded from the result.
 *
 * The returned result is an array of two arrays:
 * - First half contains elements from the start up to (but not including) the middle
 * - Second half contains elements after the middle to the end
 *
 * Examples:
 * splitHalfArray([1, 2, 3, 4, 5]); // => [ [ 1, 2 ], [ 4, 5 ] ]
 * splitHalfArray(['a', 'b', 'c', 'd', 'e', 'f']); // => [ [ 'a', 'b', 'c' ], [ 'd', 'e', 'f' ] ]
 */

/**
 * Splits an array into two halves, excluding the middle element if the length is odd.
 *
 * @param {Array} array - The input array to be split
 * @returns {Array[]} - A 2D array with two halves
 */
function splitHalfArray(array) {
  // Your implementation here
  let midIndex = Math.floor(array.length / 2);
  if (midIndex % 2 === 0) {
    let secondHalf = array.splice(midIndex + 1);
    let firstHalf = array.splice(0, midIndex);
    return [firstHalf, secondHalf];
  } else {
    return [array, array.splice(midIndex)];
  }
}

// Example usage:
console.log(splitHalfArray([1, 2, 3, 4, 5]));
// => [ [ 1, 2 ], [ 4, 5 ] ]

console.log(splitHalfArray([2, 4, 6, 8, 10]));
// => [ [ 2, 4 ], [ 8, 10 ] ]

console.log(splitHalfArray(["a", "b", "c", "d", "e", "f"]));
// => [ [ 'a', 'b', 'c' ], [ 'd', 'e', 'f' ] ]
