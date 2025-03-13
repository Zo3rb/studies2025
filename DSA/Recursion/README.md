# Recursion in Python and JavaScript

Recursion is a programming technique where a function calls itself to solve a smaller instance of the same problem. It is widely used in mathematical computations, searching algorithms, tree traversals, and backtracking problems.

## 🔹 Key Components of Recursion

1. **Base Case** – The condition where recursion stops.
2. **Recursive Case** – The function calls itself with a reduced problem size.

---

## 📌 Recursion Examples in Python

### 1️⃣ **Factorial of a Number**

```python
def factorial(n):
    if n == 0 or n == 1:
        return 1  # Base case
    return n * factorial(n - 1)  # Recursive case

print(factorial(5))  # Output: 120

```

### 2️⃣ **Fibonacci Series**

```python
def fibonacci(n):
    if n <= 0:
        return 0
    elif n == 1:
        return 1
    return fibonacci(n - 1) + fibonacci(n - 2)

print(fibonacci(6))  # Output: 8

```

### 3️⃣ **Sum of an Array**

```python
def sum_array(arr, n):
    if n <= 0:
        return 0  # Base case
    return arr[n - 1] + sum_array(arr, n - 1)

print(sum_array([1, 2, 3, 4, 5], 5))  # Output: 15

```

---

## 📌 Recursion Examples in JavaScript

### 1️⃣ **Factorial of a Number**

```javascript
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1; // Base case
  }
  return n * factorial(n - 1); // Recursive case
}

console.log(factorial(5)); // Output: 120
```

### 2️⃣ **Fibonacci Series**

```javascript
function fibonacci(n) {
  if (n <= 0) return 0;
  if (n === 1) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(6)); // Output: 8
```

### 3️⃣ **Sum of an Array**

```javascript
function sumArray(arr, n) {
  if (n <= 0) {
    return 0; // Base case
  }
  return arr[n - 1] + sumArray(arr, n - 1);
}

console.log(sumArray([1, 2, 3, 4, 5], 5)); // Output: 15
```
