/**
 * Problem 1: Print Numbers from 1 to N (Ascending Order)
 * Write a recursive function that takes a number N as input and prints numbers from 1 down to N.
 * Constraints:
 * You must use recursion (no loops allowed).
 * The function should stop when 1 reaches N.
 */

function print_ascending(n, current = 1) {
  if (current > n) return;
  console.log(current);
  print_ascending(n, current + 1);
}

print_ascending(5);
