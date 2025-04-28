# Factorial of a Number Using Recursion

## Problem Statement

Given a positive integer `N`, **calculate the factorial of the number** using recursion.

The factorial of a number `N` is the product of all positive integers less than or equal to `N`. Mathematically, it is represented as `N!`.

For example:

- `5! = 5 * 4 * 3 * 2 * 1 = 120`
- `0! = 1`

You are **not allowed** to use loops like `for`, `while`, or `do-while`. Use only **recursive calls** to calculate the factorial.

---

## Example

**Input:**

```bash
N = 4
```

**Output:**

```bash
24
```

**Explanation:** 4! = 4 _ 3 _ 2 \* 1 = 24

---

## Constraints

- `1 <= N <= 20`
- Factorial grows exponentially, so use recursion wisely for larger values.

---

## Pseudocode

```bash
function factorial(n):
    if n == 0:
        return 1
    return n * factorial(n - 1)
```

---

## Approach

- Define a recursive function that accepts a single parameter `n`.
- **Base Case:** If `n` is `0`, return `1` (since `0! = 1` by definition).
- **Recursive Case:** Return `n` multiplied by the result of the function called with `n-1`.

---

## What You'll Learn

- How recursion can be used to calculate the factorial of a number
- How to manage recursive calls and base cases
- Understanding recursive function flow and call stack

---
