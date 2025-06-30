#!/usr/bin/env python3
"""
Module: set_examples
Description: Demonstrates built-in Python set usage with core and advanced operations.
"""

def demonstrate_set_operations():
    """
    Demonstrates basic set operations in Python including creation, add/remove,
    membership check, clear, and advanced set algebra.
    """
    # 📌 Creating a Set
    s = set()                # Empty set
    s = {1, 2, 3}            # Set with values

    # ✅ Common Methods
    s.add(4)                 # Add element
    s.remove(2)              # Remove element (throws error if not present)
    s.discard(5)             # Remove safely (no error if not found)
    print(3 in s)            # Membership check: True/False
    s.clear()                # Remove all elements
    print(len(s))            # Get size of set

    # 🧠 Advanced Operations
    a = {1, 2, 3}
    b = {2, 3, 4}

    print(a.union(b))        # {1, 2, 3, 4}
    print(a.intersection(b)) # {2, 3}
    print(a.difference(b))   # {1}


if __name__ == "__main__":
    demonstrate_set_operations()
