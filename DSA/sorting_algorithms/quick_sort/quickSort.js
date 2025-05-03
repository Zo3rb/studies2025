#!/usr/bin/env node

/**
 * Module: quickSort.js
 * Description: Implementation of the quick sort algorithm in JavaScript.
 *              Selects a pivot, partitions the array into elements less than
 *              and greater than or equal to the pivot, and recursively sorts
 *              the subarrays to produce a sorted array.
 * Time Complexity: O(n log n) average, O(n^2) worst case
 * Space Complexity: O(n)
 * Stability: No
 */

function quickSort(arr) {
  /**
   * Sorts an array using the quick sort algorithm.
   * @param {number[]} arr - The input array to be sorted.
   * @returns {number[]} - A new sorted array in ascending order.
   */
  if (arr.length < 2) {
    return arr;
  }

  let pivot = arr[arr.length - 1];
  let leftArr = [];
  let rightArr = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) leftArr.push(arr[i]);
    else rightArr.push(arr[i]);
  }

  return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
}

// Test Cases
function runTests() {
  /**
   * Runs test cases to verify the quickSort implementation.
   */
  const testCases = [
    {
      input: [9, 10, 4, 7, 5, 8, 2, 6, 1, 0, 3, 12, 11, 13],
      expected: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
    },
    {
      input: [], // Empty array
      expected: [],
    },
    {
      input: [1], // Single element
      expected: [1],
    },
    {
      input: [5, 5, 5, 5], // Array with duplicates
      expected: [5, 5, 5, 5],
    },
    {
      input: [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5], // Array with duplicates
      expected: [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9],
    },
  ];

  testCases.forEach((test, index) => {
    const result = quickSort(test.input);
    const passed = JSON.stringify(result) === JSON.stringify(test.expected);
    console.log(`Test ${index + 1}:`);
    console.log(`Input: ${test.input}`);
    console.log(`Expected: ${test.expected}`);
    console.log(`Result: ${result}`);
    console.log(`Status: ${passed ? "PASSED" : "FAILED"}`);
    console.log("---");
  });
}

// Run tests if script is executed directly
if (require.main === module) {
  runTests();
}

module.exports = { quickSort }; // Export for use in other modules
