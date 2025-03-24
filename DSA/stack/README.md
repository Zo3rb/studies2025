# Stack Data Structure

## 📌 Introduction

A **stack** is a linear data structure that follows the **Last In, First Out (LIFO)** principle. This means the last element added to the stack is the first one to be removed.

## 🔹 Key Stack Operations

1. **Push** – Adds an element to the top of the stack.
2. **Pop** – Removes and returns the top element of the stack.
3. **Peek (Top)** – Returns the top element without removing it.
4. **isEmpty** – Checks if the stack is empty.
5. **Size** – Returns the number of elements in the stack.

## 🔹 Applications of Stack

- **Undo/Redo functionality** in editors.
- **Backtracking algorithms** (e.g., maze solving, recursion calls).
- **Expression evaluation and syntax parsing** (e.g., balancing parentheses, converting infix to postfix).
- **Function call stack** in programming languages.

## 🔹 Stack Implementations

Stacks can be implemented using:

1. **Arrays (Static Stack)** – Uses a fixed-size array to store elements.
2. **Linked List (Dynamic Stack)** – Uses a linked list where nodes store stack elements dynamically.

## 🔹 Stack Complexity Analysis

| Operation | Time Complexity                                |
| --------- | ---------------------------------------------- |
| Push      | O(1)                                           |
| Pop       | O(1) If space available, O(n) If resize needed |
| Peek      | O(n)                                           |
| IsEmpty   | O(n)                                           |
| Size      | O(n)                                           |

## 🚀 Stack Implementations

We will implement stacks in **Python and JavaScript** using both **arrays and linked lists**.

Stay tuned for code implementations inside this directory! 🚀
