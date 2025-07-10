#!/usr/bin/env node

/**
 * Module: valueCounter
 * ---------------------
 * This module defines the `valueCounter` function which counts how many times
 * a given value appears in an object's values.
 *
 * Example usage:
 *   const obj1 = { 1: 'Anne', 2: 'Alvin', 3: 'Anne', 4: 'Anne' };
 *   valueCounter(obj1, 'Anne');  // => 3
 *
 *   const obj2 = { Anne: 50, Alvin: 1, JJ: 100, Roman: 100 };
 *   valueCounter(obj2, 88);  // => 0
 *
 *   const pairs = { Anne: 'Roman', Alvin: 'Roman', JJ: 'Anne', Roman: 'Anne' };
 *   valueCounter(pairs, 'Roman');  // => 2
 */

/**
 * Counts the number of times a value appears in an object.
 *
 * @param {Object} obj - The object to inspect
 * @param {*} val - The value to count
 * @returns {number} - The number of occurrences of the value
 */
function valueCounter(obj, val) {
  // Your implementation here
  let count = 0;

  for (let value of Object.values(obj)) {
    if (value === val) count++;
  }

  return count;
}

// Example usage:
const obj1 = { 1: "Anne", 2: "Alvin", 3: "Anne", 4: "Anne" };
console.log(valueCounter(obj1, "Anne")); // => 3

const obj2 = { Anne: 50, Alvin: 1, JJ: 100, Roman: 100 };
console.log(valueCounter(obj2, 88)); // => 0

const pairs = { Anne: "Roman", Alvin: "Roman", JJ: "Anne", Roman: "Anne" };
console.log(valueCounter(pairs, "Roman")); // => 2
