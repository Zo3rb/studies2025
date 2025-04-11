# Bubble Sort

**Bubble sort** is [a sorting algorithm](https://www.programiz.com/dsa/sorting-algorithm) that compares two adjacent elements and swaps them until they are in the intended order.

Just like the movement of air bubbles in the water that rise up to the surface, each element of the array move to the end in each iteration. Therefore, it is called a bubble sort.

---

## Working of Bubble Sort

Suppose we are trying to sort the elements in **ascending order**.

**1. First Iteration (Compare and Swap)**

1. Starting from the first index, compare the first and the second elements.
2. If the first element is greater than the second element, they are swapped.
3. Now, compare the second and the third elements. Swap them if they are not in order.
4. The above process goes on until the last element.

![Compare two adjacent elements and swap them if the first element is greater than the next element](https://www.programiz.com/sites/tutorial2program/files/Bubble-sort-0.png "Bubble Sort step 0")

**2. Remaining Iteration**

The same process goes on for the remaining iterations.

After each iteration, the largest element among the unsorted elements is placed at the end.

![Continue the swapping and put the largest element among the unsorted list at the end](https://www.programiz.com/sites/tutorial2program/files/Bubble-sort-1.png "Bubble Sort step 1")

In each iteration, the comparison takes place up to the last unsorted element.

![Swapping occurs only if the first element is greater than the next element](https://www.programiz.com/sites/tutorial2program/files/Bubble-sort-2.png "Bubble Sort step 2")

The array is sorted when all the unsorted elements are placed at their correct positions.

![The array is sorted if all the elements are kept in the right order.](https://www.programiz.com/sites/tutorial2program/files/Bubble-sort-3.png "Bubble Sort step 3")

## Bubble Sort Algorithm

```bash
bubbleSort(array)
  for i <- 1 to sizeOfArray - 1
    for j <- 1 to sizeOfArray - 1 - i
      if leftElement > rightElement
        swap leftElement and rightElement
end bubbleSort
```

---

## Optimized Bubble Sort Algorithm

In the above algorithm, all the comparisons are made even if the array is already sorted.

This increases the execution time.

To solve this, we can introduce an extra variable swapped. The value of swapped is set true if there occurs swapping of elements. Otherwise, it is set **false**.

After an iteration, if there is no swapping, the value of swapped will be **false**. This means elements are already sorted and there is no need to perform further iterations.

This will reduce the execution time and helps to optimize the bubble sort.

**Algorithm for optimized bubble sort is**

```bash
bubbleSort(array)
  for i <- 1 to sizeOfArray - 1
    swapped <- false
    for j <- 1 to sizeOfArray - 1 - i
      if leftElement > rightElement
        swap leftElement and rightElement
        swapped <- true
    if swapped == false
      break
end bubbleSort
```

---

## Bubble Sort Complexity

| **Aspect**           | **Details** |
| -------------------- | ----------- |
| **Time Complexity**  |             |
| Best                 | O(n)        |
| Worst                | O(n²)       |
| Average              | O(n²)       |
| **Space Complexity** | O(1)        |
| **Stability**        | Yes         |

---

### Complexity in Detail

Bubble Sort compares adjacent elements.

| **Cycle** | **Number of Comparisons** |
| --------- | ------------------------- |
| 1st       | (n-1)                     |
| 2nd       | (n-2)                     |
| 3rd       | (n-3)                     |
| ...       | ...                       |
| Last      | 1                         |

---

Hence, the number of comparisons is

```bash
(n-1) + (n-2) + (n-3) +.....+ 1 = n(n-1)/2
```

nearly equals to `n2`

Hence, **Complexity:** O(n2)

Also, if we observe the code, bubble sort requires two loops. Hence, the complexity is `n*n = n2`

### 1. Time Complexities

- **Worst Case Complexity:** `O(n2)`  
  If we want to sort in ascending order and the array is in descending order then the worst case occurs.
- **Best Case Complexity:** `O(n)`  
  If the array is already sorted, then there is no need for sorting.
- **Average Case Complexity:** `O(n2)`  
  It occurs when the elements of the array are in jumbled order (neither ascending nor descending).

### 2. Space Complexity

- Space complexity is `O(1)` because an extra variable is used for swapping.
- In the **optimized bubble sort algorithm**, two extra variables are used. Hence, the space complexity will be `O(2)`.

---

## Bubble Sort Applications

Bubble sort is used if

- complexity does not matter
- short and simple code is preferred
