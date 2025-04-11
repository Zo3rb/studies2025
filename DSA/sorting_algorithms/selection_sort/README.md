# Selection Sort Algorithm

Selection sort is [a sorting algorithm](https://www.programiz.com/dsa/sorting-algorithm) that selects the smallest element from an unsorted list in each iteration and places that element at the beginning of the unsorted list.

---

## Working of Selection Sort

1. Set the first element as `minimum`.

   ![Selection Sort Steps](https://www.programiz.com/sites/tutorial2program/files/Selection-sort-0-initial-array.png "New Array Initialized")

---

2. Compare `minimum` with the second element. If the second element is smaller than `minimum`, assign the second element as `minimum`.

   Compare `minimum` with the third element. Again, if the third element is smaller, then assign `minimum` to the third element otherwise do nothing. The process goes on until the last element.

   ![Selection Sort Steps](https://www.programiz.com/sites/tutorial2program/files/Selection-sort-0-comparision.png "comparison")

---

3. After each iteration, `minimum` is placed in the front of the unsorted list.

   ![Selection Sort Steps](https://www.programiz.com/sites/tutorial2program/files/Selection-sort-0-swapping.png "swapping")

---

4. For each iteration, indexing starts from the first unsorted element. Step 1 to 3 are repeated until all the elements are placed at their correct positions.

   ![Selection Sort Steps](https://www.programiz.com/sites/tutorial2program/files/Selection-sort-0.png "Selection Sort Step 0")

   ***

   ## ![Selection sort steps](https://www.programiz.com/sites/tutorial2program/files/Selection-sort-1.png "Selection sort steps 1")

   ## ![Selection sort steps](https://www.programiz.com/sites/tutorial2program/files/Selection-sort-2.png "Selection sort steps 2")

   ![Selection sort steps](https://www.programiz.com/sites/tutorial2program/files/Selection-sort-3_1.png "Selection sort steps 3")

---

## Selection Sort Algorithm

```bash
selectionSort(array, size)
  for i from 0 to size - 1 do
    set i as the index of the current minimum
    for j from i + 1 to size - 1 do
      if array[j] < array[current minimum]
        set j as the new current minimum index
    if current minimum is not i
      swap array[i] with array[current minimum]
end selectionSort
```

---

## 📊 Time and Space Complexity

| Aspect           | Complexity |
| ---------------- | ---------- |
| **Best Time**    | O(n²)      |
| **Worst Time**   | O(n²)      |
| **Average Time** | O(n²)      |
| **Space**        | O(1)       |
| **Stability**    | No         |

---

## 🔁 Number of Comparisons per Cycle

| Cycle | Comparisons |
| ----- | ----------- |
| 1st   | (n - 1)     |
| 2nd   | (n - 2)     |
| 3rd   | (n - 3)     |
| ...   | ...         |
| Last  | 1           |

---

Number of comparisons: `(n - 1) + (n - 2) + (n - 3) + ..... + 1 = n(n - 1) / 2` nearly equals to `n2`.

**Complexity** = `O(n2)`

Also, we can analyze the complexity by simply observing the number of loops. There are 2 loops so the complexity is `n*n = n2`.

**Time Complexities:**

- **Worst Case Complexity:** `O(n2)`  
  If we want to sort in ascending order and the array is in descending order then, the worst case occurs.
- **Best Case Complexity:** `O(n2)`  
  It occurs when the array is already sorted
- **Average Case Complexity:** `O(n2)`  
  It occurs when the elements of the array are in jumbled order (neither ascending nor descending).

The time complexity of the selection sort is the same in all cases. At every step, you have to find the minimum element and put it in the right place. The minimum element is not known until the end of the array is not reached.

**Space Complexity:**

Space complexity is `O(1)` because an extra variable `min_idx` is used.

---

## Selection Sort Applications

The selection sort is used when

- a small list is to be sorted
- cost of swapping does not matter
- checking of all the elements is compulsory
- cost of writing to a memory matters like in flash memory (number of writes/swaps is `O(n)` as compared to `O(n2)` of bubble sort)
