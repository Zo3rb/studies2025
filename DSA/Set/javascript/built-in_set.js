#!/usr/bin/env node
/**
 * Module: setExamples
 * Description: Demonstrates built-in JavaScript Set usage with core operations.
 */

/**
 * Demonstrates basic Set operations in JavaScript including creation, add/delete,
 * membership check, clear, and getting size.
 */
function demonstrateSetOperations() {
  // 📌 Creating a Set
  const s = new Set(); // Empty set
  const s2 = new Set([1, 2, 3]); // Set with initial values

  // ✅ Common Methods
  s2.add(4); // Add element
  s2.delete(2); // Remove element
  console.log(s2.has(3)); // Membership check: true/false
  s2.clear(); // Remove all elements
  console.log(s2.size); // Get size of set

  // 🧠 Advanced Operations (manual in JS)
  const a = new Set([1, 2, 3]);
  const b = new Set([2, 3, 4]);

  const union = new Set([...a, ...b]);
  const intersection = new Set([...a].filter((x) => b.has(x)));
  const difference = new Set([...a].filter((x) => !b.has(x)));

  console.log(union); // Set {1, 2, 3, 4}
  console.log(intersection); // Set {2, 3}
  console.log(difference); // Set {1}
}

demonstrateSetOperations();
