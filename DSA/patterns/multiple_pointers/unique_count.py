#!/bin/python3

'''
    Problem:
    Given a sorted array, count the number of unique values.
'''

def count_unique_values(arr):
    """
        Problem Solution.
    """
    if not arr:
        return 0

    left = 0

    for right in range(1, len(arr)):
        if arr[left] != arr[right]:
            left += 1
            arr[left] = arr[right]

    return left + 1

# Example Usage
print(count_unique_values([1, 1, 2, 2, 3, 4, 4, 5]))  # Output: 5
print(count_unique_values([]))                        # Output: 0