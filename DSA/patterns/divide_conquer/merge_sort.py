#!/bin/python3

'''
    Implementation of Merge Sort.
'''

def merge_sort(arr):
    '''Sub Function.'''
    if len(arr) <= 1:
        return arr

    mid = len(arr) // 2
    left_half = merge_sort(arr[:mid])
    right_half = merge_sort(arr[mid:])

    return merge(left_half, right_half)

def merge(left, right):
    '''Divide and Conquer Function.'''
    sorted_array = []
    i = j = 0

    while i < len(left) and j < len(right):
        if left[i] < right[j]:
            sorted_array.append(left[i])
            i += 1
        else:
            sorted_array.append(right[j])
            j += 1

    sorted_array.extend(left[i:])
    sorted_array.extend(right[j:])
    return sorted_array

# Example Usage
arr = [6, 3, 8, 5, 2, 7, 4, 1]
print(merge_sort(arr))  # Output: [1, 2, 3, 4, 5, 6, 7, 8]
