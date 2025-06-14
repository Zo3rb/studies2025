#!/usr/bin/env node
/**
 * Implementation of Bubble Sort Algorithm.
 */

/**
 *
 * @param {*} arr : un sorted array to be sorted in place.
 */
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
}

module.exports = bubbleSort;
