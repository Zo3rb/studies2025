#!/bin/python3

'''
    Implementation of Binary Search
'''

def binary_search(arr, target, left, right):
    '''
        Implementation.
    '''
    if left > right:
        return -1

    mid = (left + right) // 2

    if arr[mid] == target:
        return mid
    elif arr[mid] < target:
        return binary_search(arr, target, mid + 1, right)
    else:
        return binary_search(arr, target, left, mid - 1)

# Example Usage
arr = [1, 3, 5, 7, 9, 11]
target = 5
print(binary_search(arr, target, 0, len(arr) - 1))  # Output: 2
