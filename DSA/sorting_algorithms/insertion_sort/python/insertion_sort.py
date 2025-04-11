#!/bin/python3
"""
Insertion Sort Algorithm Implementation in Python

This algorithm builds the sorted array one item at a time.
It is efficient for small datasets and nearly sorted arrays.

Time Complexity:
- Best: O(n)
- Average: O(n^2)
- Worst: O(n^2)

Space Complexity: O(1)
Stable: Yes
"""

def insertion_sort(arr):
    """
    Sorts a list in ascending order using the insertion sort algorithm.

    Args:
        arr (list): The list of elements to sort.

    Returns:
        list: Sorted list in ascending order.
    """
    for i in range(1, len(arr)):
        current_value = arr[i]
        j = i - 1

        while j >= 0 and current_value < arr[j]:
            arr[j + 1] = arr[j]
            j -= 1

        arr[j + 1] = current_value

    return arr

# Example usage
if __name__ == "__main__":
    data = [10, 3, 0, 2, 6, 1, 5, 4, 8, 7, 9]
    print("Original array:", data)
    sorted_data = insertion_sort(data)
    print("Sorted array:", sorted_data)
