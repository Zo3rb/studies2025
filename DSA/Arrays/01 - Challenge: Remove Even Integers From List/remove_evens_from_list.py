#!/bin/python3
"""
    Try to solve the Remove Even Integers From List problem.
"""

def remove_evens(lst):
    """Solution."""
    print("List without Even Numbers:")
    res = []
    for _ in lst:
        if _ % 2 != 0:
            res.append(_)

    return res

def remove_evens2(lst):
    """Solution."""
    print("List without Even Numbers - Solution Two.:")
    return [num for num in lst if num % 2 != 0]


print(remove_evens([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
print(remove_evens2([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
