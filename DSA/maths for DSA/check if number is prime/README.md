# Check if a Number is Prime

## Problem Statement

Given an integer `n`, determine whether `n` is a **prime number**.

A **prime number** is a number greater than 1 that has no positive divisors other than `1` and itself.

---

## Example

### Input

```bash
n = 29

```

### Output

```bash
True

```

### Input

```bash
n = 10

```

### Output

```bash
False

```

---

## Approach

### Naive Approach (O(n) Time Complexity)

- A number `n` is prime if it is not divisible by any number between `2` and `n-1`.
- Iterate from `2` to `n-1` and check if `n % i == 0`.

#### Pseudocode

```bash
if n <= 1:
    return False

for i from 2 to n-1:
    if n % i == 0:
        return False

return True

```

- **Drawback**: Very slow for large `n`.

---

### Optimized Approach (O(log n) Time Complexity)

- If `n` has any divisor greater than `\u221an`, it must have a corresponding divisor smaller than `\u221an`.
- So, we only need to check divisibility up to `\u221an`.

#### Pseudocode

```bash
if n <= 1:
    return False

for i from 2 to sqrt(n):
    if n % i == 0:
        return False

return True

```

---

## Why O(log n)?

- Checking up to log n significantly reduces the number of iterations compared to checking up to `n-1`.
- Particularly important for large numbers.

---

## Notes

- Special cases:

  - Numbers less than or equal to 1 are **not prime**.
  - 2 and 3 are prime numbers.

- Perfect squares need careful handling; however, the standard loop `i*i <= n` takes care of it naturally.

---

## Related Links

- [What is a Prime Number? (Khan Academy)](https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/what-is-a-prime-number)
- [Prime Numbers - Wikipedia](https://en.wikipedia.org/wiki/Prime_number)
