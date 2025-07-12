#!/usr/bin/env python3
"""
hash_table.py

A from-scratch implementation of a Hash Table (Hash Map) in Python
Features a basic hash function and collision handling via chaining.
"""

class HashTable:
    """
    HashTable implements a simple hash table with chaining for collisions.
    """
    def __init__(self, size: int = 53):
        """
        Initialize the hash table.

        Args:
            size (int): Initial size of the internal buckets list.
        """
        self.size = size
        self.key_map = [[] for _ in range(size)]

    def _hash(self, key: str) -> int:
        """
        Hashes a string key to an integer index.

        Args:
            key (str): The key to hash.

        Returns:
            int: Index in the internal list.
        """
        total = 0
        prime = 31
        for i, char in enumerate(key):
            if i >= 100:
                break
            value = ord(char) - 96  # 'a' -> 1, 'b' -> 2, etc.
            total = (total * prime + value) % self.size
        return total

    def set(self, key: str, value) -> None:
        """
        Inserts or updates a key-value pair in the hash table.

        Args:
            key (str): The key to set.
            value: The value associated with the key.
        """
        index = self._hash(key)
        bucket = self.key_map[index]
        for i, pair in enumerate(bucket):
            if pair[0] == key:
                bucket[i] = (key, value)
                return
        bucket.append((key, value))

    def get(self, key: str):
        """
        Retrieves the value for a given key.

        Args:
            key (str): The key to retrieve.

        Returns:
            The associated value, or None if not found.
        """
        index = self._hash(key)
        bucket = self.key_map[index]
        for pair in bucket:
            if pair[0] == key:
                return pair[1]
        return None

    def remove(self, key: str) -> bool:
        """
        Removes a key-value pair from the hash table.

        Args:
            key (str): The key to remove.

        Returns:
            bool: True if removed, False if not found.
        """
        index = self._hash(key)
        bucket = self.key_map[index]
        for i, pair in enumerate(bucket):
            if pair[0] == key:
                bucket.pop(i)
                return True
        return False

if __name__ == "__main__":
    # Example usage and test cases
    ht = HashTable(5)

    print('--- Setting values ---')
    ht.set('user', 'Alice')
    print("Set: ('user', 'Alice')")
    ht.set('age', 30)
    print("Set: ('age', 30')")
    ht.set('fruit', 'apple')
    print("Set: ('fruit', 'apple')")

    # Demonstrate collision
    ht.set('elbub', 'collision test')  # designed to collide in small table
    print("Set: ('elbub', 'collision test')")

    print('\n--- Retrieving values ---')
    print(f"user: {ht.get('user')}")    # Alice
    print(f"age: {ht.get('age')}")      # 30
    print(f"fruit: {ht.get('fruit')}")  # apple
    print(f"elbub: {ht.get('elbub')}")  # collision test
    print(f"missing: {ht.get('missing')}")  # None

    print('\n--- Removing values ---')
    print(f"Remove 'age': {ht.remove('age')}")  # True
    print(f"age: {ht.get('age')}")              # None
    print(f"Remove 'missing': {ht.remove('missing')}")  # False

    print('\n--- Final internal state ---')
    print(ht.key_map)
