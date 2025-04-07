# Getting Started with Array Data Structure

\***\*Array\*\*** is a collection of items of the same variable type that are stored at contiguous memory locations. It is one of the most popular and simple data structures used in programming.

### Basic terminologies of Array

- \***\*Array Index:\*\*** In an array, elements are identified by their indexes. Array index starts from 0.
- \***\*Array element:\*\*** Elements are items stored in an array and can be accessed by their index.
- \***\*Array Length:\*\*** The length of an array is determined by the number of elements it can contain.

### Memory representation of Array

In an array, all the elements are stored in contiguous memory locations. So, if we initialize an array, the elements will be allocated sequentially in memory. This allows for efficient access and manipulation of elements.

<p float="left">
  <img src="https://media.geeksforgeeks.org/wp-content/uploads/20250224182515919065/1-.webp" />
  <br /> <br /> <br />
  <img src="https://media.geeksforgeeks.org/wp-content/uploads/20250224182515574059/2-.webp" />
  <br /> <br /> <br />
    <img src="https://media.geeksforgeeks.org/wp-content/uploads/20250224182515285430/3-.webp" />
</p>

### Why do we Need Arrays?

Assume there is a class of five students and if we have to keep records of their marks in examination then, we can do this by declaring five variables individual and keeping track of records but what if the number of students becomes very large, it would be challenging to manipulate and maintain the data.

What it means is that, we can use normal variables (v1, v2, v3, ..) when we have a small number of objects. But if we want to store a large number of instances, it becomes difficult to manage them with normal variables.

![ALT](https://media.geeksforgeeks.org/wp-content/uploads/20240405123859/Importance-of-Array.webp)

### Types of Arrays

Arrays can be classified in two ways:

- On the basis of Size
- On the basis of Dimensions

![ALT](https://media.geeksforgeeks.org/wp-content/uploads/20240731124259/Types-of-Arrays.webp)

\***\*1. Fixed Sized Arrays\*\***

We cannot alter or update the size of this array. Here only a fixed size (i,e. the size that is mentioned in square brackets \***\*[]\*\***) of memory will be allocated for storage. In case, we don’t know the size of the array then if we declare a larger size and store a lesser number of elements will result in a wastage of memory or we declare a lesser size than the number of elements then we won’t get enough memory to store all the elements. In such cases, static memory allocation is not preferred.

```python
# Python
arr = [0] * 5
```

\***\*2. Dynamic Sized Arrays\*\***

The size of the array changes as per user requirements during execution of code so the coders do not have to worry about sizes. They can add and removed the elements as per the need. The memory is mostly dynamically allocated and de-allocated in these arrays.

```python
# Python Dynamic Array
arr = []
```

```javascript
// JavaScript Dynamic Sized Array
let arr = new Array();
```

### Types of Arrays on the basis of Dimensions

\***\*1. One-dimensional Array(1-D Array):\*\*** You can imagine a 1d array as a row, where elements are stored one after another.

![ALT](<https://media.geeksforgeeks.org/wp-content/uploads/20240405123929/One-Dimensional-Array(1-D-Array).webp>)

\***\*2. Multi-dimensional Array:\*\*** A multi-dimensional array is an array with more than one dimension. We can use multidimensional array to store complex data in the form of tables, etc. We can have 2-D arrays, 3-D arrays, 4-D arrays and so on.

- \***\*Two-Dimensional Array(2-D Array or Matrix):\*\*** 2-D Multidimensional arrays can be considered as an array of arrays or as a matrix consisting of rows and columns.

![ALT](<https://media.geeksforgeeks.org/wp-content/uploads/20240408165401/Two-Dimensional-Array(2-D-Array-or-Matrix).webp>)

- \***\*Three-Dimensional Array(3-D Array):\*\*** A 3-D Multidimensional array contains three dimensions, so it can be considered an array of two-dimensional arrays.

![ALT](<https://media.geeksforgeeks.org/wp-content/uploads/20240408165421/Three-Dimensional-Array(3-D-Array).webp>)

### Operations on Array

### \***\*1. Array Traversal\*\***

Array traversal refers to the process of accessing and processing each element of an array sequentially. This is one of the most fundamental operations in programming, as arrays are widely used data structures for storing multiple elements in a single variable.

\***\*How Array Traversal Works?\*\***

When an array is created, it occupies a contiguous block of memory where elements are stored in an indexed manner. Each element can be accessed using its index, which starts from `0` in most programming languages.

For example, consider an array containing five integers:

> `arr = [10, 20, 30, 40, 50]`

Here:

- The first element (`10`) is at \***\*index 0\*\***.
- The second element (`20`) is at \***\*index 1\*\***.
- The last element (`50`) is at \***\*index 4\*\***.

Array traversal means accessing each element from start to end (or sometimes in reverse order), usually by using a loop.

\***\*Types of Array Traversal\*\***

Array traversal can be done in multiple ways based on the requirement:

1. \***\*Sequential (Linear) Traversal\*\***
   - This is the most common way of traversing an array.
   - It involves iterating through the array one element at a time from the first index to the last.
   - Used for printing elements, searching, or performing calculations (such as sum or average).
2. \***\*Reverse Traversal\*\***
   - Instead of starting from index `0`, the traversal begins from the last element and moves towards the first.
   - This is useful in cases where we need to process elements from the end.

> To read more about Array Traversal Refer, [Traversal in Array](https://www.geeksforgeeks.org/traversal-in-array/)

### \***\*2. Insertion in Array\*\***

Insertion in an array refers to the process of adding a new element at a specific position while maintaining the order of the existing elements. Since arrays have a fixed size in static implementations, inserting an element often requires shifting existing elements to make space.

\***\*How Insertion Works in an Array?\*\***

Arrays are stored in contiguous memory locations, meaning elements are arranged in a sequential block. When inserting a new element, the following happens:

1. \***\*Identify the Position\*\***: Determine where the new element should be inserted.
2. \***\*Shift Elements\*\***: Move the existing elements one position forward to create space for the new element.
3. \***\*Insert the New Element\*\***: Place the new value in the correct position.
4. \***\*Update the Size (if applicable)\*\***: If the array is dynamic, its size is increased.

For example, if we have the array:

> `arr = [10, 20, 30, 40, 50]`

and we want to insert `25` at index `2`, the new array will be:

> `arr = [10, 20, 25, 30, 40, 50]`

Here, elements `30`, `40`, and `50` have shifted right to make space.

\***\*Types of Insertion\*\***

\***\*1. Insertion at the Beginning (Index 0)\*\***

- Every element must shift one position right.
- This is the least efficient case for large arrays as it affects all elements.

\***\*2. Insertion at a Specific Index\*\***

- Elements after the index shift right.
- If the index is in the middle, half of the array moves.

\***\*3. Insertion at the End\*\***

- The simplest case since no shifting is required.
- Used in dynamic arrays where size increases automatically (e.g., Python lists, Java `ArrayList`).

> To read more about Insertion in Array Refer, [Inserting Elements in an Array – Array Operations](https://www.geeksforgeeks.org/inserting-elements-in-an-array-array-operations/)

### \***\*3. Deletion in Array\*\***

Deletion in an array refers to the process of removing an element from a specific position while maintaining the order of the remaining elements. Unlike linked lists, where deletion is efficient, removing an element from an array requires shifting elements to fill the gap.

\***\*How Deletion Works in an Array?\*\***

Since arrays have contiguous memory allocation, deleting an element does not reduce the allocated memory size. Instead, it involves:

1. \***\*Identify the Position\*\***: Find the index of the element to be deleted.
2. \***\*Shift Elements\*\***: Move the elements after the deleted element one position to the left.
3. \***\*Update the Size (if applicable)\*\***: If using a dynamic array, the size might be reduced.

For example, consider the array:

> `arr = [10, 20, 30, 40, 50]`

If we delete the element `30` (index `2`), the new array will be:

> `arr = [10, 20, 40, 50]`

Here, elements `40` and `50` shifted left to fill the gap.

\***\*Types of Deletion\*\***

\***\*1. Deletion at the Beginning (Index 0)\*\***

- Every element shifts left by one position.
- This is the most expensive case as it affects all elements.

\***\*2. Deletion at a Specific Index\*\***

- Only elements after the index shift left.
- If the index is in the middle, half of the array moves.

\***\*3. Deletion at the End\*\***

- The simplest case since no shifting is required.
- The size of the array is reduced (in dynamic arrays).

> To read more about Deletion in Array Refer, [Deleting Elements in an Array – Array Operations](https://www.geeksforgeeks.org/deleting-elements-in-an-array-array-operations/)

\***\*4. Searching in Array\*\***

Searching in an array refers to the process of finding a specific element in a given list of elements. The goal is to determine whether the element exists in the array and, if so, find its index (position).

Searching is a fundamental operation in programming, as it is used in data retrieval, filtering, and processing.

### \***\*Types of Searching in an Array\*\***

There are two main types of searching techniques in an array:

\***\*1. Linear Search (Sequential Search)\*\***

- This is the simplest search algorithm.
- It traverses the array one element at a time and compares each element with the target value.
- If a match is found, it returns the index of the element.
- If the element is not found, the search continues until the end of the array.

##### \***\*Example:\*\***

Consider an array:

> `arr = [10, 20, 30, 40, 50]`

If we search for `30`, the algorithm will:

1. Compare `10` with `30` → No match.
2. Compare `20` with `30` → No match.
3. Compare `30` with `30` → \***\*Match found at index\*\*** **`**2**`\*\*\*\***.\*\*\*\*

\***\*2. Binary Search (Efficient Search for Sorted Arrays)\*\***

- Works only on sorted arrays (in increasing or decreasing order).
- Uses a divide and conquer approach.
- It repeatedly divides the search space in half until the target element is found.

##### \***\*How Binary Search Works?\*\***

1. Find the middle element of the array.
2. If the target is equal to the middle element, return its index.
3. If the target is less than the middle element, search the left half.
4. If the target is greater than the middle element, search the right half.
5. Repeat until the element is found or the search space is empty.

##### \***\*Example:\*\***

Consider a sorted array:

> `arr = [10, 20, 30, 40, 50]`

If we search for `30`:

1. Middle element = `30` → Match found!
2. The search ends in just one step, making it much faster than linear search.
