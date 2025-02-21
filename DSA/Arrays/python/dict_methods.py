# dict_methods.py

"""
This file contains useful methods that can be applied to Python dictionaries.
Each method includes an example and explanation for better understanding.
Additionally, Higher-Order Functions (HOFs) are demonstrated at the end.
"""

# Creating a Dictionary
my_dict = {"name": "Alice", "age": 25, "city": "New York"}
print("Original Dictionary:", my_dict)

# 1. keys(): Returns a view of all keys in the dictionary
print("Keys:", my_dict.keys())

# 2. values(): Returns a view of all values in the dictionary
print("Values:", my_dict.values())

# 3. items(): Returns a view of all key-value pairs as tuples
print("Items:", my_dict.items())

# 4. get(): Returns the value for a key, or a default value if key is not found
print("Get age:", my_dict.get("age"))
print("Get country (default=Unknown):", my_dict.get("country", "Unknown"))

# 5. update(): Merges another dictionary into the current dictionary
my_dict.update({"job": "Engineer", "country": "USA"})
print("After update:", my_dict)

# 6. pop(): Removes a key and returns its value
popped_value = my_dict.pop("city")
print("After pop('city'):", my_dict, "| Popped Value:", popped_value)

# 7. popitem(): Removes and returns the last inserted key-value pair
popped_item = my_dict.popitem()
print("After popitem():", my_dict, "| Popped Item:", popped_item)

# 8. setdefault(): Returns the value of a key, setting it if not found
job_value = my_dict.setdefault("job", "Unemployed")
print("After setdefault('job', 'Unemployed'):", my_dict, "| Job:", job_value)

# 9. clear(): Removes all items from the dictionary
my_dict.clear()
print("After clear():", my_dict)

# Higher-Order Functions (HOFs) with Dictionaries
people = {"Alice": 25, "Bob": 30, "Charlie": 35}

# 10. Dictionary Comprehension: Creating a new dictionary by transforming values
doubled_ages = {key: value * 2 for key, value in people.items()}
print("Dictionary Comprehension - Doubled Ages:", doubled_ages)

# 11. Using map() with dictionaries: Creating a list of modified values
mapped_values = list(map(lambda item: (item[0], item[1] + 5), people.items()))
print("After map(lambda item: (item[0], item[1] + 5), people.items()):", dict(mapped_values))

# 12. Using filter() with dictionaries: Filtering people older than 28
filtered_people = dict(filter(lambda item: item[1] > 28, people.items()))
print("After filter(lambda item: item[1] > 28, people.items()):", filtered_people)

# 13. Using reduce() with dictionaries: Summing all ages
from functools import reduce
sum_of_ages = reduce(lambda acc, item: acc + item[1], people.items(), 0)
print("After reduce(lambda acc, item: acc + item[1], people.items(), 0):", sum_of_ages)
