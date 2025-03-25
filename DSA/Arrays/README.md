# Array Abstract Data Type (ADT) Implementation

This project implements an **Array ADT** from scratch in **Python** and **JavaScript**.  
Unlike built-in lists or arrays, this custom implementation helps understand **manual memory management, dynamic resizing, and basic operations** such as:

- **Creation**
- **Insertion**
- **Deletion**
- **Searching**
- **Appending**
- **Displaying**

![Array Representation](https://media.geeksforgeeks.org/wp-content/uploads/20220721080308/array.png)

## 🚀 Features Implemented

👉 **Dynamic Memory Management** (Unlike Python Lists or JavaScript Arrays)  
👉 **Manual Insert, Delete, Append, and Search Operations**  
👉 **Object-Oriented Implementation** for better understanding

---

## 📚 Understanding Arrays

An **array** is a data structure used to store elements **contiguously** in memory.  
Each element can be accessed using an **index**.

### **Why Use a Custom Implementation?**

- Built-in Python **lists** and JavaScript **arrays** provide a lot of functionalities that abstract away low-level details.
- This project **simulates a fixed-size array** like in C, allowing us to understand **how arrays work under the hood**.

---

## 🛠 How to Run the Implementations

### **🔹 Python Implementation**

[Python](./python/array.py)

---

### **🔹 JavaScript Implementation**

[JavaScript](./javascript/array.js)

---

## ✨ Operations and Complexity

| Operation | Time Complexity                                | Space Complexity |
| --------- | ---------------------------------------------- | ---------------- |
| Create    | O(1)                                           | O(n)             |
| Append    | O(1) If space available, O(n) If resize needed | O(1)             |
| insert    | O(n)                                           | O(1)             |
| Delete    | O(n)                                           | O(1)             |
| Search    | O(n)                                           | O(1)             |
| Display   | O(n)                                           | O(1)             |

## 📌 Credits

This implementation is inspired by **GeeksForGeeks** but rewritten from scratch to understand how **arrays work at a lower level** in **Python and JavaScript**.
