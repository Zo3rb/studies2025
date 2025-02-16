/// Asymptotic Notation Exercises.

function f(n) {
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      console.log(`[${i}] [${j}]`);
    }
  }
}
