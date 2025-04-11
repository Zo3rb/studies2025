#!/usr/bin/env node
/**
 * Selection Sort Algorithm Implementation in JavaScript
 *
 * This algorithm repeatedly selects the minimum element from the unsorted
 * part of the array and moves it to the front.
 *
 * Time Complexity:
 * - Best: O(n^2)
 * - Average: O(n^2)
 * - Worst: O(n^2)
 *
 * Space Complexity: O(1)
 *
 * Stable: No
 */

/**
 * Sorts an array in ascending order using selection sort.
 * @param {number[]} arr - The array to sort.
 * @returns {number[]} Sorted array.
 */
function selectionSort(arr) {
  const n = arr.length;
  for (let i = 0; i < n; i++) {
    let minIdx = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIdx]) {
        minIdx = j;
      }
    }
    if (i !== minIdx) {
      [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
    }
  }
  return arr;
}

// Example usage
const data = [10, 3, 0, 2, 6, 1, 5, 4, 8, 7, 9];
console.log("Original array:", data);
console.log("Sorted array:", selectionSort([...data]));
