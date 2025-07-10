#!/usr/bin/env node

/**
 * Module: countScores
 * -------------------
 * This module exports a function `countScores` that takes in an array of score objects.
 * Each object has a `name` and `score` property. The function returns an object where
 * the keys are names and the values are the total scores accumulated for each name.
 *
 * Example 1:
 * const ppl = [
 *   { name: "Anthony", score: 10 },
 *   { name: "Fred", score : 10 },
 *   { name: "Anthony", score: -8 },
 *   { name: "Winnie", score: 12 }
 * ];
 * countScores(ppl); // => { Anthony: 2, Fred: 10, Winnie: 12 }
 *
 * Example 2:
 * const peeps = [
 *   { name: "Anthony", score: 2 },
 *   { name: "Winnie", score: 2 },
 *   { name: "Fred", score: 2 },
 *   { name: "Winnie", score: 2 },
 *   { name: "Fred", score: 2 },
 *   { name: "Anthony", score: 2 },
 *   { name: "Winnie", score: 2 }
 * ];
 * countScores(peeps); // => { Anthony: 4, Fred: 4, Winnie: 6 }
 */

/**
 * Aggregates and returns the total score for each name.
 *
 * @param {Object[]} people - Array of objects with `name` (string) and `score` (number)
 * @returns {Object} Object with names as keys and total scores as values
 */
function countScores(people) {
  // Your implementation goes here
  const results = {};

  for (let entry of people) {
    let { name, score } = entry;
    if (!results[name]) {
      results[name] = score;
    } else {
      results[name] = results[name] += score;
    }
  }

  return results;
}

module.exports = countScores;

// Example usage:
if (require.main === module) {
  const ppl = [
    { name: "Anthony", score: 10 },
    { name: "Fred", score: 10 },
    { name: "Anthony", score: -8 },
    { name: "Winnie", score: 12 },
  ];

  const peeps = [
    { name: "Anthony", score: 2 },
    { name: "Winnie", score: 2 },
    { name: "Fred", score: 2 },
    { name: "Winnie", score: 2 },
    { name: "Fred", score: 2 },
    { name: "Anthony", score: 2 },
    { name: "Winnie", score: 2 },
  ];

  console.log(countScores(ppl)); // => { Anthony: 2, Fred: 10, Winnie: 12 }
  console.log(countScores(peeps)); // => { Anthony: 4, Fred: 4, Winnie: 6 }
}
