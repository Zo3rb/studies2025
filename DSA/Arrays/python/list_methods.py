# list_methods.py

"""
This file contains useful methods that can be applied to Python lists.
Each method includes an example and explanation for better understanding.
Additionally, Higher-Order Functions (HOFs) and List Comprehensions are demonstrated at the end.
"""

from functools import reduce

# Creating a List
my_list = [1, 2, 3, 4, 5]
print("Original List:", my_list)

# 1. Append: Adds an element to the end of the list
my_list.append(6)
print("After append(6):", my_list)

# 2. Insert: Inserts an element at a specified index
my_list.insert(2, 10)  # Inserts 10 at index 2
print("After insert(2, 10):", my_list)

# 3. Extend: Extends list by appending elements from another iterable
my_list.extend([7, 8, 9])
print("After extend([7, 8, 9]):", my_list)

# 4. Remove: Removes the first occurrence of a value
my_list.remove(10)
print("After remove(10):", my_list)

# 5. Pop: Removes and returns an element at a given index (default is last)
popped_value = my_list.pop()
print("After pop():", my_list, "| Popped Value:", popped_value)

# 6. Index: Returns the index of the first occurrence of a value
index_value = my_list.index(3)
print("Index of 3:", index_value)

# 7. Count: Counts the occurrences of a specific value
count_value = my_list.count(2)
print("Count of 2:", count_value)

# 8. Reverse: Reverses the order of the list
my_list.reverse()
print("After reverse():", my_list)

# 9. Sort: Sorts the list in ascending order
my_list.sort()
print("After sort():", my_list)

# 10. Copy: Creates a shallow copy of the list
copy_list = my_list.copy()
print("Copied List:", copy_list)

# 11. Clear: Removes all elements from the list
my_list.clear()
print("After clear():", my_list)

# Higher-Order Functions (HOFs) with Lists
numbers = [1, 2, 3, 4, 5]

# 12. Map: Applies a function to each element in the list
doubled = list(map(lambda x: x * 2, numbers))
print("After map(lambda x: x * 2, numbers):", doubled)

# 13. Filter: Filters elements based on a condition
even_numbers = list(filter(lambda x: x % 2 == 0, numbers))
print("After filter(lambda x: x % 2 == 0, numbers):", even_numbers)

# 14. Reduce: Reduces the list to a single value (Requires functools)
sum_of_numbers = reduce(lambda x, y: x + y, numbers)
print("After reduce(lambda x, y: x + y, numbers):", sum_of_numbers)

# List Comprehensions

# 15. Basic List Comprehension: Creating a new list by squaring each element
squared_numbers = [x ** 2 for x in numbers]
print("List Comprehension - Squared Numbers:", squared_numbers)

# 16. List Comprehension with Condition: Filtering even numbers
even_numbers_comp = [x for x in numbers if x % 2 == 0]
print("List Comprehension - Even Numbers:", even_numbers_comp)

# 17. Nested List Comprehension: Creating pairs from two lists
list1 = [1, 2, 3]
list2 = ['a', 'b', 'c']
pairs = [(x, y) for x in list1 for y in list2]
print("Nested List Comprehension - Pairs:", pairs)
