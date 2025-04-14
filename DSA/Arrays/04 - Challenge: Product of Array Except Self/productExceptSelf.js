#!/usr/bin/env node
/**
 * productExceptSelf.js
 *
 * This module exports a function that computes the product of all elements
 * in an array except the one at the current index, without using division.
 * The solution runs in linear time with constant space complexity (excluding the output array).
 */

/**
 * Computes the product of all elements except self for each index in the input array.
 * Avoids using division and performs in O(n) time and O(1) extra space.
 *
 * @param {number[]} nums - An array of integers.
 * @returns {number[]} - An array where each index holds the product of all other elements.
 */
function productExceptSelf(nums) {
  const n = nums.length;
  const result = Array(n).fill(1);

  // First pass: left products
  let leftProduct = 1;
  for (let i = 0; i < n; i++) {
    result[i] = leftProduct;
    leftProduct *= nums[i];
  }

  // Second pass: right products
  let rightProduct = 1;
  for (let i = n - 1; i >= 0; i--) {
    result[i] *= rightProduct;
    rightProduct *= nums[i];
  }

  return result;
}

// Example usage
function main() {
  const testArray = [1, 2, 3, 4];
  console.log("Input:", testArray);
  console.log("Output:", productExceptSelf(testArray));
}

main();
