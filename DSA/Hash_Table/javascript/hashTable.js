#!/usr/bin/env node

/**
 * HashTable.js
 *
 * A from-scratch implementation of a Hash Table (Hash Map) in JavaScript
 * Features a basic hash function and collision handling via chaining.
 */

class HashTable {
  /**
   * Creates an instance of HashTable.
   * @param {number} [size=53] - Initial size of the internal buckets array.
   */
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  /**
   * Hashes a string key to an integer index.
   * @param {string} key - The key to hash.
   * @returns {number} - Index in the internal array.
   */
  _hash(key) {
    let total = 0;

    const PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      const char = key[i];
      const value = char.charCodeAt(0) - 96;
      total = (total * PRIME + value) % this.keyMap.length;
    }

    return total;
  }

  /**
   * Inserts or updates a key-value pair in the hash table.
   * @param {string} key - The key to set.
   * @param {*} value - The value associated with the key.
   */
  set(key, value) {
    const index = this._hash(key);
    if (!this.keyMap[index]) {
      this.keyMap[index] = value;
    }

    for (let pair of this.keyMap[index]) {
      if (pair[0] === key) {
        pair[1] = value;
        return;
      }
    }

    this.keyMap[index].push([key, value]);
  }

  /**
   * Retrieves the value for a given key.
   * @param {string} key - The key to retrieve.
   * @returns {*|null} - The associated value, or null if not found.
   */
  get(key) {
    const index = this._hash(key);
    const bucket = this.keyMap[index];

    if (!bucket) return null;

    for (let pair of bucket) {
      if (pair[0] === key) return pair[1];
    }

    return null;
  }

  /**
   * Removes a key-value pair from the hash table.
   * @param {string} key - The key to remove.
   * @returns {boolean} - True if removed, false if not found.
   */
  remove(key) {
    const index = this._hash(key);
    const bucket = this.keyMap[index];

    if (!bucket) return false;

    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        bucket.splice(i, 1);
        return true;
      }
    }

    return false;
  }
}

module.exports = HashTable;
