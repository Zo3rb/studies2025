#!/bin/python3
"""
Bubble Sort Algorithm Implementation in Python

This script demonstrates the bubble sort algorithm, which repeatedly steps
through the list, compares adjacent elements, and swaps them if they are
in the wrong order.

Time Complexity:
- Best: O(n) [when already sorted]
- Average: O(n^2)
- Worst: O(n^2)

Space Complexity: O(1)

Stable: Yes
"""

def bubble_sort(arr):
    """
    Sorts a list in ascending order using the bubble sort algorithm.

    Args:
        arr (list): The list of elements to sort.

    Returns:
        list: Sorted list in ascending order.
    """
    n = len(arr)
    for i in range(n):
        swapped = False
        for j in range(0, n - i - 1):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
                swapped = True
        if not swapped:
            break
    return arr

# Example Usage
if __name__ == "__main__":
    data = [64, 34, 25, 12, 22, 11, 90]
    print("Original array:", data)
    sorted_data = bubble_sort(data)
    print("Sorted array:", sorted_data)
