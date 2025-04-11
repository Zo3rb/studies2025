#!/usr/bin/env node
/**
 * Bubble Sort Algorithm Implementation in JavaScript
 *
 * This function sorts an array using the bubble sort algorithm,
 * repeatedly swapping adjacent elements if they are in the wrong order.
 *
 * Time Complexity:
 * - Best: O(n) [when already sorted]
 * - Average: O(n^2)
 * - Worst: O(n^2)
 *
 * Space Complexity: O(1)
 *
 * Stable: Yes
 */

/**
 * Sorts an array in ascending order using bubble sort.
 * @param {number[]} arr - Array to sort.
 * @returns {number[]} Sorted array.
 */
function bubbleSort(arr) {
  let n = arr.length;
  let swapped;
  for (let i = 0; i < n; i++) {
    swapped = false;
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;
      }
    }
    if (!swapped) break;
  }
  return arr;
}

// Example Usage
const data = [64, 34, 25, 12, 22, 11, 90];
console.log("Original array:", data);
console.log("Sorted array:", bubbleSort([...data]));
