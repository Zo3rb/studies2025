#!/usr/bin/env node

/**
 * Module: adults
 * --------------
 * This module exports a function `adults` that takes in an array of person objects,
 * each with a `name` and `age`, and returns an array containing the names of people
 * who are 18 years old or older.
 *
 * Example:
 * const ppl = [
 *   {name: 'John', age: 20},
 *   {name: 'Jim', age: 13},
 *   {name: 'Jane', age: 18},
 *   {name: 'Bob', age: 7}
 * ];
 * adults(ppl); // => [ 'John', 'Jane' ]
 */

/**
 * Returns an array of names of adults (age 18 or older).
 *
 * @param {Object[]} people - Array of person objects with `name` and `age` properties
 * @returns {string[]} Array of names of people aged 18 or older
 */
function adults(people) {
  const result = [];

  for (let i = 0; i < people.length; i++) {
    let { name, age } = people[i];
    if (age >= 18) {
      result.push(name);
    }
  }

  return result;
}

module.exports = adults;

// Example usage:
if (require.main === module) {
  const ppl = [
    { name: "John", age: 20 },
    { name: "Jim", age: 13 },
    { name: "Jane", age: 18 },
    { name: "Bob", age: 7 },
  ];

  console.log(adults(ppl)); // => [ 'John', 'Jane' ]
}
