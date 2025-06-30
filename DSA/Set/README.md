# Set Data Structure – A Complete Guide

## 📌 Overview

A **Set** is a fundamental data structure used to store a collection of **unique** elements. Unlike arrays or lists, sets do not allow duplicates, and the order of elements is not guaranteed.

---

## 📚 Characteristics

- **Uniqueness**: A set automatically removes duplicate elements.
- **Unordered**: No indexing or guaranteed ordering of elements.
- **Efficient lookups**: Membership checks are typically O(1) using hashing.
- **Dynamic size**: You can add/remove elements at runtime.

---

## 🧠 Real-World Analogy

Imagine a key holder with only one hook per key. Even if you try to hang the same key twice, it stays as one.

---

## ✅ Core Operations

| Operation      | Description                        | Time Complexity (avg) |
| -------------- | ---------------------------------- | --------------------- |
| `add(element)` | Adds a unique element              | O(1)                  |
| `delete(el)`   | Removes an element if it exists    | O(1)                  |
| `has(el)`      | Checks if an element is in the set | O(1)                  |
| `clear()`      | Removes all elements               | O(n)                  |
| `size`         | Returns the number of elements     | O(1)                  |

---

## 🌍 Common Use Cases

- Removing duplicates from a list/array
- Membership testing (e.g., "Have we seen this element before?")
- Set operations: union, intersection, difference
- Graph algorithms, caching, and deduplication in databases

---

## 🧪 Example

### JavaScript

```js
const mySet = new Set();
mySet.add(1);
mySet.add(2);
mySet.add(2); // duplicate, ignored
console.log(mySet.has(1)); // true
console.log(mySet.size); // 2
```

### Python

```python
s = set()
s.add(1)
s.add(2)
s.add(2)  # duplicate, ignored
print(1 in s)  # True
print(len(s))  # 2
```

## 📦 Goal of This Guide

By the end of this project, you'll be able to:

- Understand how sets work under the hood
- Use sets effectively in problem solving
- Build your own set implementation from scratch in Python and JavaScript
