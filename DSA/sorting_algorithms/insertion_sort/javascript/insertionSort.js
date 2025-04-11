#!/usr/bin/env node
/**
 * Insertion Sort Algorithm Implementation in JavaScript
 *
 * Builds the final sorted array one element at a time.
 * Efficient for small or nearly sorted datasets.
 *
 * Time Complexity:
 * - Best: O(n)
 * - Average: O(n^2)
 * - Worst: O(n^2)
 *
 * Space Complexity: O(1)
 * Stable: Yes
 */

/**
 * Sorts an array in ascending order using insertion sort.
 * @param {number[]} arr - The array to sort.
 * @returns {number[]} Sorted array.
 */
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    const currentValue = arr[i];
    let j = i - 1;

    while (j >= 0 && currentValue < arr[j]) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = currentValue;
  }
  return arr;
}

// Example usage
const data = [10, 3, 0, 2, 6, 1, 5, 4, 8, 7, 9];
console.log("Original array:", data);
console.log("Sorted array:", insertionSort([...data]));
