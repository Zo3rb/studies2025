#!/usr/bin/env node
/**
 * Module: customSet
 * Description: Implements a custom Set using an internal object (hash map).
 */

class CustomSet {
  /**
   * Initializes the internal hash map to store unique elements.
   */
  constructor() {
    this._data = {};
  }

  /**
   * Adds an element to the set if it's not already present.
   * @param {*} element - The element to be added.
   */
  add(element) {
    this._data[element] = true;
  }

  /**
   * Checks whether the element exists in the set.
   * @param {*} element - The element to check for existence.
   * @returns {boolean} True if the element exists, otherwise false.
   */
  has(element) {
    return element in this._data;
  }

  /**
   * Deletes an element from the set if it exists.
   * @param {*} element - The element to remove.
   * @returns {boolean} True if deleted, false if not found.
   */
  delete(element) {
    if (element in this._data) {
      delete this._data[element];
      return true;
    }
    return false;
  }

  /**
   * Removes all elements from the set.
   */
  clear() {
    this._data = {};
  }

  /**
   * Returns the number of unique elements in the set.
   * @returns {number} The size of the set.
   */
  size() {
    return Object.keys(this._data).length;
  }

  /**
   * Returns an array of all elements in the set.
   * @returns {Array} Array of elements in the set.
   */
  values() {
    return Object.keys(this._data);
  }

  /**
   * Returns a new set containing all unique elements from both sets.
   * @param {CustomSet} otherSet - Another CustomSet instance.
   * @returns {CustomSet} New set with union of both.
   */
  union(otherSet) {
    const result = new CustomSet();
    for (let key in this._data) {
      result.add(key);
    }
    for (let key in otherSet._data) {
      result.add(key);
    }
    return result;
  }

  /**
   * Returns a new set with elements found in both sets.
   * @param {CustomSet} otherSet - Another CustomSet instance.
   * @returns {CustomSet} New set with common elements.
   */
  intersection(otherSet) {
    const result = new CustomSet();
    for (let key in this._data) {
      if (otherSet.has(key)) {
        result.add(key);
      }
    }
    return result;
  }

  /**
   * Returns a new set with elements in this set but not in the other.
   * @param {CustomSet} otherSet - Another CustomSet instance.
   * @returns {CustomSet} New set with the difference.
   */
  difference(otherSet) {
    const result = new CustomSet();
    for (let key in this._data) {
      if (!otherSet.has(key)) {
        result.add(key);
      }
    }
    return result;
  }
}
