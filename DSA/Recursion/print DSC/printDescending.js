/**
 * Problem 1: Print Numbers from N to 1 (Descending Order)
 * Write a recursive function that takes a number N as input and prints numbers from N down to 1.
 * Constraints:
 * You must use recursion (no loops allowed).
 * The function should stop when N reaches 1.
 */

function print_descending(n) {
  if (n === 1) return console.log(n);
  console.log(n);
  print_descending(n - 1);
}

print_descending(5);
