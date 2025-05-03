# Quicksort Algorithm

Quicksort is [a sorting algorithm](https://www.programiz.com/dsa/sorting-algorithm) based on the **divide and conquer approach** where

1. An array is divided into subarrays by selecting a **pivot element** (element selected from the array).
   While dividing the array, the pivot element should be positioned in such a way that elements less than pivot are kept on the left side and elements greater than pivot are on the right side of the pivot.
2. The left and right subarrays are also divided using the same approach. This process continues until each subarray contains a single element.
3. At this point, elements are already sorted. Finally, elements are combined to form a sorted array.

---

## Working of Quicksort Algorithm

**1. Select the Pivot Element**

There are different variations of quicksort where the pivot element is selected from different positions. Here, we will be selecting the rightmost element of the array as the pivot element.

![Quick Sort Steps](https://www.programiz.com/sites/tutorial2program/files/quick-sort-0.1_0.png "Selection of rightmost element")

---

**2. Rearrange the Array**

Now the elements of the array are rearranged so that elements that are smaller than the pivot are put on the left and the elements greater than the pivot are put on the right.

![Quick Sort Steps](https://www.programiz.com/sites/tutorial2program/files/quick-sort-0.2_0.png "pivoting")

---

Here's how we rearrange the array:

1. A pointer is fixed at the pivot element. The pivot element is compared with the elements beginning from the first index.

   ![Quick Sort Steps](https://www.programiz.com/sites/tutorial2program/files/quick-sort-partition-first-step.png "Quick Sort Steps")

---

If the element is greater than the pivot element, a second pointer is set for that element.

![Quick Sort Steps](https://www.programiz.com/sites/tutorial2program/files/quick-sort-partition-second-step.png "Quick Sort Steps")

---

Now, pivot is compared with other elements. If an element smaller than the pivot element is reached, the smaller element is swapped with the greater element found earlier.

![Quick Sort Steps](https://www.programiz.com/sites/tutorial2program/files/quick-sort-partition-third-step.png "Quick Sort Steps")

---

Again, the process is repeated to set the next greater element as the second pointer. And, swap it with another smaller element.

![Quick Sort Steps](https://www.programiz.com/sites/tutorial2program/files/quick-sort-partition-fourth-step.png "Quick Sort Steps")

---

The process goes on until the second last element is reached.

![Quick Sort Steps](https://www.programiz.com/sites/tutorial2program/files/quick-sort-partition-fifth-step.png "Quick Sort Steps")

---

Finally, the pivot element is swapped with the second pointer.

![Quick Sort Steps](https://www.programiz.com/sites/tutorial2program/files/quick-sort-partition-sixth-step.png "Quick Sort Steps")

---

**3. Divide Subarrays**

Pivot elements are again chosen for the left and the right sub-parts separately. And, **step 2** is repeated.

![Quick Sort Steps](https://www.programiz.com/sites/tutorial2program/files/quick-sort_1.png "Quick Sort Steps")

---

The subarrays are divided until each subarray is formed of a single element. At this point, the array is already sorted.

---

## Quick Sort Algorithm

```bash

quickSort(array, leftmostIndex, rightmostIndex)
  if (leftmostIndex < rightmostIndex)
    pivotIndex <- partition(array,leftmostIndex, rightmostIndex)
    quickSort(array, leftmostIndex, pivotIndex - 1)
    quickSort(array, pivotIndex, rightmostIndex)

partition(array, leftmostIndex, rightmostIndex)
  set rightmostIndex as pivotIndex
  storeIndex <- leftmostIndex - 1
  for i <- leftmostIndex + 1 to rightmostIndex
  if element[i] < pivotElement
    swap element[i] and element[storeIndex]
    storeIndex++
  swap pivotElement and element[storeIndex+1]
return storeIndex + 1
```

### Visual Illustration of Quicksort Algorithm

You can understand the working of quicksort algorithm with the help of the illustrations below.

![Quick Sort Steps](https://www.programiz.com/sites/tutorial2program/files/quick-sort-working.png "Quick Sort first half")

---

![Quick Sort Steps](https://www.programiz.com/sites/tutorial2program/files/quick-sort-1.png "Quick Sort second half")

---

## Quicksort Complexity

| Property                  | Value      |
| ------------------------- | ---------- |
| Time Complexity (Best)    | O(n log n) |
| Time Complexity (Worst)   | O(n²)      |
| Time Complexity (Average) | O(n log n) |
| Space Complexity          | O(log n)   |
| Stability                 | No         |

---

### 1. Time Complexities

- **Worst Case Complexity [Big-O]**: `O(n2)`  
  It occurs when the pivot element picked is either the greatest or the smallest element.

  This condition leads to the case in which the pivot element lies in an extreme end of the sorted array. One sub-array is always empty and another sub-array contains `n - 1` elements. Thus, quicksort is called only on this sub-array.

  However, the quicksort algorithm has better performance for scattered pivots.

- **Best Case Complexity [Big-omega]**: `O(n*log n)`  
  It occurs when the pivot element is always the middle element or near to the middle element.
- **Average Case Complexity [Big-theta]**: `O(n*log n)`  
  It occurs when the above conditions do not occur.

### 2. Space Complexity

The space complexity for quicksort is `O(log n)`.

---

## Quicksort Applications

Quicksort algorithm is used when

- the programming language is good for recursion
- time complexity matters
- space complexity matters
