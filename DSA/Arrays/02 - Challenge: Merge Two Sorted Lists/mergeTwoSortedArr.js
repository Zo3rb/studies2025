#!/bin/env node

/**
 * Try to solve the Merge Two Sorted Lists problem.
 */

function mergeSortedLists(arr1, arr2) {
  // Solution.
  let res = [];

  // Different Scenarios.
  if (!arr1 && !arr2) return res;
  if (!arr1) return arr2;
  if (!arr2) return arr1;

  let p1 = 0;
  let p2 = 0;

  // append sorted Items.
  while (p1 < arr1.length && p2 < arr2.length) {
    if (arr1[p1] <= arr2[p2]) {
      res.push(arr1[p1]);
      p1 += 1;
    } else {
      res.push(arr2[p2]);
      p2 += 1;
    }
  }

  // Handle Remaining Items.
  while (p1 < arr1.length) {
    res.push(arr1[p1]);
    p1 += 1;
  }

  while (p2 < arr2.length) {
    res.push(arr2[p2]);
    p2 += 1;
  }

  return res;
}

console.log(mergeSortedLists([1, 3, 4, 5], [2, 6, 7, 8]));
console.log(mergeSortedLists([1, 3, 4, 5], []));
console.log(mergeSortedLists([], [2, 6, 7, 8]));
console.log(mergeSortedLists([10, 11, 13, 15, 18], [12, 14, 16, 17, 20]));
console.log(
  mergeSortedLists([50, 57, 62, 68, 71, 80], [50, 56, 62, 72, 76, 91])
);
