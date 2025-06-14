#!/usr/bin/env node
/**
 * Implementation of Binary Search Algorithm.
 */

/**
 *
 * @param {*} arr : number[] -> Array of Numbers to Look within it.
 * @param {*} value : number -> The Value which we are looking for.
 * @returns {number} : The index of the value or -1;
 */
function binarySearch(arr, value) {
  let startIndex = 0;
  let endIndex = arr.length - 1;

  while (startIndex <= endIndex) {
    let midIndex = Math.floor((startIndex + endIndex) / 2);
    if (value === arr[midIndex]) {
      return midIndex;
    } else if (value > arr[midIndex]) {
      startIndex = midIndex + 1;
    } else {
      endIndex = midIndex - 1;
    }
  }

  return -1;
}

module.exports = binarySearch;
