#!/usr/bin/env node
/**
 * rearrangePositiveNegativeSwap.js
 *
 * This module contains a function to rearrange elements in a list such that all
 * negative elements appear to the left and all non-negative elements appear to
 * the right by swapping elements using two pointers.
 */

/**
 * Rearranges the input array so that all negative numbers appear before all
 * non-negative numbers (including zero) by swapping elements in place.
 *
 * @param {number[]} lst - An array of integers.
 * @returns {number[]} - An array with all negative numbers on the left and non-negative
 *                       numbers on the right.
 */
function rearrangeValues(lst) {
  let left = 0;
  let right = lst.length - 1;

  while (left < right) {
    if (lst[left] < 0) {
      left++;
    } else if (lst[right] >= 0) {
      right--;
    } else {
      // Swap negative number at `left` with positive number at `right`
      [lst[left], lst[right]] = [lst[right], lst[left]];
      left++;
      right--;
    }
  }

  return lst;
}

// Example usage
function main() {
  const testArray = [1, -3, 4, -2, 0, -1, 5];
  console.log("Input:", testArray);
  console.log("Output:", rearrangeValues(testArray));
}

main();
