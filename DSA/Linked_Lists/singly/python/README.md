# Singly Linked List in Python

## 📘 Overview

A **Singly Linked List** is a linear data structure where each element (called a node) contains two parts:

- `data`: the actual value.
- `next`: a reference to the next node in the sequence.

Unlike arrays, linked lists are not stored in contiguous memory locations, allowing dynamic memory usage.

---

## ⚙️ Node Structure

Each node in the list contains:

```python
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None
```
