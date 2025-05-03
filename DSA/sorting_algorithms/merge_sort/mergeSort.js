#!/usr/bin/env node

/**
 * Module: mergeSort.js
 * Description: Implementation of the merge sort algorithm in JavaScript.
 *              Splits an array into halves, recursively sorts them, and merges
 *              the sorted halves to produce a sorted array.
 * Time Complexity: O(n log n) for all cases
 * Space Complexity: O(n)
 * Stability: Yes
 */

function mergeSort(arr) {
  /**
   * Sorts an array using the merge sort algorithm.
   * @param {number[]} arr - The input array to be sorted.
   * @returns {number[]} - A new sorted array in ascending order.
   */
  if (arr.length < 2) {
    return arr;
  }

  let mid = Math.floor(arr.length / 2);
  let leftArr = arr.slice(0, mid);
  let rightArr = arr.slice(mid);

  return merge(mergeSort(leftArr), mergeSort(rightArr));
}

function merge(leftArr, rightArr) {
  /**
   * Merges two sorted arrays into a single sorted array.
   * @param {number[]} leftArr - The left sorted array.
   * @param {number[]} rightArr - The right sorted array.
   * @returns {number[]} - A merged sorted array.
   */
  let res = [];
  while (leftArr.length && rightArr.length) {
    if (leftArr[0] < rightArr[0]) {
      res.push(leftArr.shift());
    } else {
      res.push(rightArr.shift());
    }
  }

  return [...res, ...leftArr, ...rightArr];
}

// Test Cases
function runTests() {
  /**
   * Runs test cases to verify the mergeSort implementation.
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
    const result = mergeSort(test.input);
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

module.exports = { mergeSort, merge }; // Export for use in other modules
