for (let i = 0; i < n; i++) {
  // Outer loop runs n times
  for (let j = 0; j < n; j++) {
    // Middle loop runs n times
    for (let k = 0; k < n; k = k * 2 + 1) {
      // Inner loop grows exponentially
      console.log(`[${i}] [${j}] [${k}]`);
    }
  }
}

// Outer loop (i) runs n times.
// Middle loop (j) runs n times for each i.
// Inner loop (k) starts at 0 and increases exponentially (k = k * 2 + 1).
// Total Number of Iterations:
// Outer loop → n
// Middle loop → n
// Inner loop → O(log n) (since k grows exponentially)
// Total Complexity = n * n * log n = O(n² log n)
// 📌 Final Answer: O(n² log n) ✅

// 🔥 Great job! Ready for the next challenge? It will be even trickier! 🚀
