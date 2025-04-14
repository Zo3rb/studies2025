#!/usr/bin/env node
/**
 * Module to rearrange a sorted list into max/min form.
 */

/**
 * Rearranges a sorted array into max/min form:
 * [max, min, 2nd max, 2nd min, ...]
 *
 * @param {number[]} arr - A sorted array of integers.
 * @returns {number[]} Rearranged array in max/min format.
 */
function rearrangeMaxMin(arr) {
  const result = [];
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    if (left !== right) {
      result.push(arr[right]);
      result.push(arr[left]);
    } else {
      result.push(arr[left]);
    }
    left++;
    right--;
  }

  return result;
}
