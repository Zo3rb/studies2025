#!/bin/env node

/**
 * Implementation of Linear Search Algorithm.
 * Returns the index of the target or -1 if not found.
 */
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}
