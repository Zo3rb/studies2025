# 🧠 Hash Table Data Structure

Welcome to the **from-scratch** implementation of the Hash Table (aka Hash Map) data structure, developed for deep understanding and hands-on mastery.

---

## 📌 What is a Hash Table?

A **Hash Table** is a data structure that allows you to store and retrieve data in **key-value** pairs with average-case constant time complexity **O(1)**.

---

### 📦 Real-World Analogy

> Think of a **library** with thousands of books. Instead of searching shelf-by-shelf, a **catalog** lets you instantly locate a book using its title. That catalog uses a _hashing mechanism_ internally.

---

## 🔍 Visual Explanation

### 🔧 Hash Function and Bucket System

1. **Keys** are passed into a **hash function**.
2. The result maps the key to a specific **bucket/index**.
3. If multiple keys map to the same bucket, it's called a **collision**.

---

### 💥 Collision Handling with Chaining

In this implementation, we’ll use **chaining** (storing values in arrays or linked lists at each bucket) to resolve collisions.

---

## ✅ Features

- ✅ Custom hash function
- ✅ `set(key, value)`
- ✅ `get(key)`
- ✅ `remove(key)`
- ✅ Collision handling (chaining)
- ✅ Clean, commented code
- ✅ Real examples and test cases
- ✅ Made with 💻 by hand – no built-ins like Map or Object

---

## 🚀 Getting Started

### Clone the project

```bash
git clone https://github.com/your-username/hash-table-from-scratch.git
cd hash-table-from-scratch

```

### Run the code

```bash
node src/test.js

```

---

## 🥪 Sample Output

```bash
Setting: (user, Alice)
Setting: (age, 30)
Retrieving user: Alice
Removing user...
User found? null

```

---

## 📚 Use Cases

- Count character frequencies
- Detect duplicates
- Implement dictionary/word maps
- Build caches
- Index-based lookups

---

## 🧠 Learning Objectives

- Deep dive into hash tables
- Understand how keys are hashed
- Learn about real-world performance concerns (resizing, load factor)
- Practice solving real algorithm problems with your own data structure

---
