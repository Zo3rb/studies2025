#!/usr/bin/env node

/**
 * Module: factorArray
 * -------------------
 * This module defines a function `factorArray(array, number)` that returns a new array
 * containing only the elements of the input array that are factors of the given number.
 * A factor is a number that divides evenly into another number.
 *
 * Example usages:
 *   factorArray([2, 3, 4, 5, 6], 20);      // => [2, 4, 5]
 *   factorArray([2, 3, 4, 5, 6], 35);      // => [5]
 *   factorArray([10, 15, 20, 25], 5);      // => []
 */

/**
 * Returns an array of elements from the input array that are factors of the given number.
 *
 * @param {number[]} array - An array of numbers.
 * @param {number} number - The number to test factors against.
 * @returns {number[]} An array of factors of the given number.
 */
function factorArray(array, number) {
  const result = [];

  for (let i = 0; i < array.length; i++) {
    if (number % array[i] === 0) {
      result.push(array[i]);
    }
  }

  return result;
}

// Example usages
console.log(factorArray([2, 3, 4, 5, 6], 20)); // => [2, 4, 5]
console.log(factorArray([2, 3, 4, 5, 6], 35)); // => [5]
console.log(factorArray([10, 15, 20, 25], 5)); // => []
