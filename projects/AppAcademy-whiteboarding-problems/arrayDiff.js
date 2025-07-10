#!/usr/bin/env node

/**
 * Module: arrayDiff
 * -----------------
 * This module exports a function `arrayDiff` that takes in two arrays and returns a new
 * array containing only the elements of the first array that are not present in the second array.
 *
 * Note: Assume both arrays have unique elements.
 *
 * Examples:
 * const array1 = [1, 23, 2, 43, 3, 4];
 * const array2 = [3, 23];
 * arrayDiff(array1, array2); // => [1, 2, 43, 4]
 *
 * const array3 = ['a', 'ab', 'c', 'd', 'c'];
 * const array4 = ['d'];
 * arrayDiff(array3, array4); // => ['a', 'ab', 'c', 'c']
 */

/**
 * Returns a new array containing elements from arr1 that are not in arr2.
 *
 * @param {Array} arr1 - The base array
 * @param {Array} arr2 - The array of elements to exclude
 * @returns {Array} - Filtered array with elements not in arr2
 */
function arrayDiff(arr1, arr2) {
  // Your implementation here
  let arr1FreqCount = {};

  for (let ele of arr1) {
    arr1FreqCount[ele] = true;
  }

  for (let ele of arr2) {
    delete arr1FreqCount[ele];
  }

  return Object.keys(arr1FreqCount);
}

// Example usage:
const array1 = [1, 23, 2, 43, 3, 4];
const array2 = [3, 23];
console.log(arrayDiff(array1, array2));
// => [1, 2, 43, 4]

const array3 = ["a", "ab", "c", "d", "c"];
const array4 = ["d"];
console.log(arrayDiff(array3, array4));
// => ['a', 'ab', 'c', 'c']
