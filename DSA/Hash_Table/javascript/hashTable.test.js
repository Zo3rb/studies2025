#!/usr/bin/env node

/**
 * test.js
 *
 * Example usage and test cases for the HashTable implementation.
 */

const HashTable = require("./HashTable");

// Create a new HashTable instance
const ht = new HashTable(5);

console.log("--- Setting values ---");
ht.set("user", "Alice");
console.log(`Set: ('user', 'Alice')`);
ht.set("age", 30);
console.log(`Set: ('age', 30)`);
ht.set("fruit", "apple");
console.log(`Set: ('fruit', 'apple')`);

// Demonstrate collision
ht.set("elbub", "collision test"); // designed to collide with 'user' or other key in small table
console.log(`Set: ('elbub', 'collision test')`);

console.log("\n--- Retrieving values ---");
console.log(`user: ${ht.get("user")}`); // Alice
console.log(`age: ${ht.get("age")}`); // 30
console.log(`fruit: ${ht.get("fruit")}`); // apple
console.log(`elbub: ${ht.get("elbub")}`); // collision test
console.log(`missing: ${ht.get("missing")}`); // null

console.log("\n--- Removing values ---");
console.log(`Remove 'age': ${ht.remove("age")}`); // true
console.log(`age: ${ht.get("age")}`); // null
console.log(`Remove 'missing': ${ht.remove("missing")}`); // false

// Final table state
console.log("\n--- Final internal state ---");
console.log(ht.keyMap);
