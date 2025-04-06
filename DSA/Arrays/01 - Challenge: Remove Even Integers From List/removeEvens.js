#!/bin/node
/**
 * Try to solve the Remove Even Integers From List problem.
 */

/**
 *
 * @param {*} arr - The Array input to Solve.
 */
function removeEvens(arr) {
  let res = [];

  for (i of arr) {
    if (i % 2 !== 0) res.push(i);
  }

  return res;
}

console.log("Solution: ", removeEvens([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
