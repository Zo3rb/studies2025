#!/usr/bin/env node
/**
 * Implementation of Linear Search Algorithm.
 */

/**
 *
 * @param {*} arr : number[] -> Array of Numbers to Look within it.
 * @param {*} value : number -> The Value which we are looking for.
 * @returns {number} : The index of the value or -1;
 */
function linearSearch(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    if (value === arr[i]) {
      return i;
    }
  }

  return -1;
}

module.exports = linearSearch;
