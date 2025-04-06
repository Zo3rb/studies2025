#!/bin/env node

/**
 * Try to solve the Find Two Numbers That Add Up to K problem.
 */

/**
 *
 * @param {*} arr | Array to get Sum from.
 * @param {*} target | the Target of the Sum.
 * @returns {Array} | the Two Numbers of the Sum of the Target.
 */
function findSum(arr, target) {
  // Solution.
  let sortedArray = arr.sort((a, b) => a - b);
  let p1 = 0;
  let p2 = arr.length - 1;

  while (p1 !== p2) {
    if (sortedArray[p1] + sortedArray[p2] === target)
      return [sortedArray[p1], sortedArray[p2]];
    if (sortedArray[p1] + sortedArray[p2] < target) p1 += 1;
    else p2 -= 1;
  }
}

console.log(findSum([1, 10, 8, 4, 9], 17));
console.log(findSum([5, 12, 15, 21, 6, 17], 33));
console.log(findSum([-2, -2, 11, 15, -3], 8));
