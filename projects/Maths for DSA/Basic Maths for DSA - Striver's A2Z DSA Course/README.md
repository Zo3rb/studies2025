# Print All Divisors of a Number

## Problem Statement

Given an integer `n`, print **all divisors** of `n` in **increasing order**.

A **divisor** of `n` is any integer `d` such that `n % d == 0`.

---

## Example

### Input

```bash
n = 36

```

### Output

```bash
1 2 3 4 6 9 12 18 36

```

---

## Approach

### Naive Approach (O(n) Time Complexity)

- Iterate through all numbers from `1` to `n`.
- For each number `i`, check if `n % i == 0`.
- If it is, print `i`.

#### Pseudocode

```bash
for i from 1 to n:
    if n % i == 0:
        print i

```

- **Drawback**: For large `n`, this is inefficient.

---

### Optimized Approach (O(\u221an) Time Complexity)

- Divisors come in **pairs**.  
  For every divisor `i` ≤ √n, there is a corresponding divisor `n/i`.
- So, we only need to iterate from `1` to `√n`, and for each divisor:

  - Print `i`.
  - If `i` is not equal to `n/i`, also print `n/i`.

- To maintain **increasing order**, store divisors:

  - Small divisors (`i`) in one list.
  - Larger divisors (`n/i`) in another list.
  - Combine and print both lists at the end.

#### Pseudocode

```bash
Initialize two empty lists: small_divisors, large_divisors

for i from 1 to sqrt(n):
    if n % i == 0:
        add i to small_divisors
        if i != n / i:
            add n / i to large_divisors

print elements of small_divisors
print elements of large_divisors in reverse order

```

---

## Why O(\u221an)?

- Because if `i` > √n, `n/i` < √n, and those divisors have already been considered.
- Thus, we limit the number of iterations to about √n.

---

## Notes

- Handle perfect squares carefully.  
  For example, if `n = 36`, when `i = 6`, `n/i = 6` as well.  
  So we should only add `6` once, not twice.
- Always print divisors in **increasing order**.

---

## Related Links

- [Video Explanation (Code Library)](https://youtu.be/Ae_Ag_saG9s?si=gh994-PeP8HjLYxF)
