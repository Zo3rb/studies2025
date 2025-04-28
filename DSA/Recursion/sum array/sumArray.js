#!/bin/node

/**
 *    This is an implementation of Recursive SumArray Function.
 *  Just for the Visualization and Study Purpose.
 */

const sumArray = (array, index) => {
  // The Base Case
  if (index === array.length - 1) return array[index];

  // Temp Variable holds the Sum
  let total = array[index] + sumArray(array, index + 1);

  return total;
};

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(sumArray(nums, 0));
