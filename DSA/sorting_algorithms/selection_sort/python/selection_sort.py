#!/bin/python3
"""
Selection Sort Algorithm Implementation in Python

This algorithm repeatedly selects the minimum element from the unsorted portion
and places it at the beginning of the sorted portion.

Time Complexity:
- Best: O(n^2)
- Average: O(n^2)
- Worst: O(n^2)

Space Complexity: O(1)

Stable: No
"""

def selection_sort(arr):
    """
    Sorts a list in ascending order using the selection sort algorithm.

    Args:
        arr (list): The list of elements to sort.

    Returns:
        list: Sorted list in ascending order.
    """
    n = len(arr)
    for i in range(n):
        min_idx = i
        for j in range(i + 1, n):
            if arr[j] < arr[min_idx]:
                min_idx = j
        if i != min_idx:
            arr[i], arr[min_idx] = arr[min_idx], arr[i]
    return arr

# Example usage
if __name__ == "__main__":
    data = [10, 3, 0, 2, 6, 1, 5, 4, 8, 7, 9]
    print("Original array:", data)
    sorted_data = selection_sort(data)
    print("Sorted array:", sorted_data)
