/// Asymptotic Notation Exercises.

function f(n) {
  for (let i = 0; i < n; i++) {
    if (i % 2 === 0) {
      let j = 1;
      while (j < n) {
        console.log(`[${i}] [${j}]`);
        j *= 2;
      }
    } else {
      for (let j = 0; j < n; j += 2) {
        console.log(`[${i}] [${j}]`);
      }
    }
  }
}
