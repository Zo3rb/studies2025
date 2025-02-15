# 📌 Big-O Notation & Complexity Analysis

## 🔍 What is Big-O Notation?

Big-O notation is a mathematical concept used to describe the efficiency of an algorithm in terms of **time complexity** and **space complexity**. It helps in understanding how an algorithm's performance scales as the input size increases.

## ⚡ Why is Big-O Important?

- **Performance Evaluation**: Determines whether an algorithm is efficient.
- **Scalability**: Helps predict behavior for large inputs.
- **Algorithm Comparison**: Enables selection of the best approach.

## ⏳ Time Complexity Notation

| Notation       | Complexity Type  | Example                                |
| -------------- | ---------------- | -------------------------------------- |
| **O(1)**       | Constant Time    | Accessing an element in an array       |
| **O(log n)**   | Logarithmic Time | Binary Search                          |
| **O(n)**       | Linear Time      | Looping through an array               |
| **O(n log n)** | Log-Linear Time  | Merge Sort, Quick Sort (average case)  |
| **O(n²)**      | Quadratic Time   | Nested loops in a brute-force approach |
| **O(2ⁿ)**      | Exponential Time | Recursive Fibonacci                    |
| **O(n!)**      | Factorial Time   | Traveling Salesman brute-force         |

## 📏 Space Complexity Notation

Space complexity measures the amount of memory an algorithm uses relative to input size. It consists of:

- **Auxiliary Space**: Extra memory beyond input storage.
- **Recursive Stack Space**: Memory used by recursive calls.

## 🔬 How to Analyze an Algorithm

1. **Identify the key operations** (loops, recursion, memory allocation).
2. **Ignore constants** (focus on dominant terms).
3. **Consider best-case, worst-case, and average-case scenarios.**
4. **Evaluate time & space trade-offs.**

## 📚 Step-by-Step Examples

### **Example 1: Constant Time - O(1)**

```python
 def get_first_element(arr):
     return arr[0]
```

🔹 This function always takes the same time regardless of input size → **O(1)**

### **Example 2: Linear Time - O(n)**

```python
 def print_elements(arr):
     for item in arr:
         print(item)
```

🔹 Iterates through all `n` elements → **O(n)**

### **Example 3: Quadratic Time - O(n²)**

```python
 def print_pairs(arr):
     for i in range(len(arr)):
         for j in range(len(arr)):
             print(arr[i], arr[j])
```

🔹 Nested loops → **O(n²)**

## 🏋️‍♂️ Practice Exercises

1. Analyze the time complexity of the following function:

```python
 def sum_numbers(n):
     total = 0
     for i in range(n):
         total += i
     return total
```

2.Determine the complexity of this recursive function:

```python
 def factorial(n):
     if n == 0:
         return 1
     return n * factorial(n-1)
```

## 🚀 Next Step: Big-O Assessments

Once you're comfortable with complexity analysis, we'll move on to solving complexity-based assessments to test your understanding!
