# Print Name N Times Using Recursion

## Problem Statement

Given a number `N` and a string `name`, **print the `name` exactly `N` times** using recursion.

You are **not allowed** to use loops like `for`, `while`, or `do-while**. Use only **recursive calls** to print the name` N` times.

---

## Example

**Input:**

```bash
N = 3
name = "John"
```

**Output:**

```bash
John
John
John
```

---

## Constraints

- `1 <= N <= 10^5`
- The solution should avoid unnecessary string operations or extra data structures.
- The function should handle small and large values of `N` efficiently.

---

## Pseudocode

```bash
function printName(n, name):
    if n == 0:
        return
    print(name)
    call printName(n-1, name)
```

---

## Approach

- Define a recursive function that accepts two parameters: the count `n` and the `name` to print.
- **Base Case:**  
  If `n` is `0`, **stop** the recursion (no more printing).
- **Recursive Case:**  
  Print the `name` and call the same function with `n-1`.

---

## What You'll Learn

- How recursion replaces iteration
- How the call stack grows and shrinks with each recursive call
- Importance of defining a base case to prevent infinite recursion

---
