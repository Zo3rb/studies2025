# Binary Search

Binary Search is a searching algorithm for finding an element's position in a sorted array.

In this approach, the element is always searched in the middle of a portion of an array.

Binary search can be implemented only on a sorted list of items. If the elements are not sorted already, we need to sort them first.

---

## Binary Search Working

Binary Search Algorithm can be implemented in two ways which are discussed below.

1. Iterative Method
2. Recursive Method

The recursive method follows [the divide and conquer](https://www.programiz.com/dsa/divide-and-conquer) approach.

The general steps for both methods are discussed below.

1. The array in which searching is to be performed is:

   ![initial array Binary Search](https://cdn.programiz.com/sites/tutorial2program/files/binary-search-initial-array.png "initial array ")

   Initial array

   Let `x = 4` be the element to be searched.

2. Set two pointers low and high at the lowest and the highest positions respectively.

   ![setting pointers Binary Search](https://cdn.programiz.com/sites/tutorial2program/files/binary-search-set-pointers.png "setting pointers ")

   Setting pointers

3. Find the middle position mid of the array ie. `mid = (low + high)/2` and `arr[mid] = 6`.

   ![mid element Binary Search](https://cdn.programiz.com/sites/tutorial2program/files/binary-search-mid.png "mid element")

   Mid element

4. If `x == arr[mid]`, then return `mid`. Else, compare the element to be searched with `arr[mid]`.
5. If `x > arr[mid]`, compare x with the middle element of the elements on the right side of arr[mid]. This is done by setting low to `low = mid + 1`.
6. Else, compare x with the middle element of the elements on the left side of arr[mid]. This is done by setting high to `high = mid - 1`.

   ![finding mid element Binary Search](https://cdn.programiz.com/sites/tutorial2program/files/binary-search-find-mid.png "finding mid element")

   Finding mid element

7. Repeat steps 3 to 6 until `low` meets `high`.

   ![mid element Binary Search](https://cdn.programiz.com/sites/tutorial2program/files/binary-search-mid-again.png "mid element")

   Mid element

8. `x = 4` is found.

   ![found Binary Search](https://cdn.programiz.com/sites/tutorial2program/files/binary-search-found.png "found")

   Found

---

## Binary Search Complexity

**Time Complexities**

- **Best case complexity**: `O(1)`
- **Average case complexity**: `O(log n)`
- **Worst case complexity**: `O(log n)`

**Space Complexity**

The space complexity of the binary search is `O(1)`.

---

## Binary Search Applications

- In libraries of Java, .Net, C++ STL
- While debugging, the binary search is used to pinpoint the place where the error happens.
