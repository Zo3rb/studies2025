/**
 * Implementation of CustomArray DSA.
 */
class CustomArray {
  constructor() {
    this.length = 0;
    this.data = {}; // Use object, not array
  }

  /**
   * Adds a value to the end of the array.
   * @param {*} value - The value to add.
   * @returns {CustomArray} The custom array instance for method chaining.
   */
  push(value) {
    this.data[this.length] = value;
    this.length++;
    return this;
  }

  /**
   * Retrieves the value at the specified index in the array.
   * @param {number} index - The index of the value to retrieve.
   * @returns {*} The value at the specified index, or undefined if the index is out of bounds.
   * @throws {TypeError} If the index is not a number.
   */
  get(index) {
    if (typeof index !== "number" || Number.isNaN(index)) {
      throw new TypeError("Index must be a number");
    }
    if (index < 0 || index >= this.length) {
      return undefined;
    }
    return this.data[index];
  }

  /**
   * Sets the value at the specified index in the array.
   * @param {number} index - The index at which to set the value.
   * @param {*} value - The value to set.
   * @returns {*} The value that was set, or undefined if the index is out of bounds.
   * @throws {TypeError} If the index is not a number.
   */
  set(index, value) {
    if (typeof index !== "number" || Number.isNaN(index)) {
      throw new TypeError("Index must be a number");
    }
    if (index < 0 || index >= this.length) {
      return undefined;
    }
    this.data[index] = value;
    return value;
  }

  // Remove the length() method - length is a property, not a method

  /**
   * Removes and returns the last item from the array.
   * @returns {*} The removed item, or undefined if the array is empty.
   */
  pop() {
    if (this.length <= 0) {
      return undefined;
    }
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  /**
   * Removes and returns the first item from the array.
   * @returns {*} The removed item, or undefined if the array is empty.
   */
  shift() {
    if (this.length <= 0) return undefined;

    const firstItem = this.data[0];

    for (let i = 0; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }

    delete this.data[this.length - 1];
    this.length--;
    return firstItem;
  }

  /**
   * Adds a value to the beginning of the array.
   * @param {*} value - Data to be added to the first element of the CustomArray
   * @returns {CustomArray} The custom array instance for method chaining.
   */
  unshift(value) {
    // Shift all existing elements one position to the right
    for (let i = this.length; i > 0; i--) {
      this.data[i] = this.data[i - 1];
    }

    // Insert the new value at the beginning
    this.data[0] = value;
    this.length++; // Only increment once!

    return this;
  }

  /**
   * Removes and returns the element at the specified index.
   * @param {number} index - Index of element to be removed.
   * @returns {*} The removed element, or undefined if index is out of bounds.
   * @throws {TypeError} If the index is not a number.
   */
  remove(index) {
    if (this.length <= 0) return undefined;

    if (typeof index !== "number" || Number.isNaN(index)) {
      throw new TypeError("Index must be a number"); // Consistent error type
    }

    if (index < 0 || index >= this.length) return undefined; // Fixed bounds check

    const itemToRemove = this.data[index];

    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }

    delete this.data[this.length - 1];
    this.length--;
    return itemToRemove;
  }

  /**
   * Finds the index of the first occurrence of a value in the array.
   * @param {*} value - Value to search for in the CustomArray.
   * @returns {number} The index of the first occurrence of the value, or -1 if not found.
   */
  indexOf(value) {
    for (let i = 0; i < this.length; i++) {
      if (value === this.data[i]) return i;
    }
    return -1;
  }

  /**
   * Checks if the Array is empty or not.
   * @returns {boolean} true if the array is empty, false otherwise.
   */
  isEmpty() {
    return this.length === 0;
  }

  /**
   * Removes all elements from the array, making it empty.
   * @returns {CustomArray} The custom array instance for method chaining.
   */
  clear() {
    this.data = {}; // More efficient than deleting individual properties
    this.length = 0;
    return this;
  }

  /**
   * Returns a string representation of the array.
   * @returns {string} String representation of the array.
   */
  toString() {
    const values = [];
    for (let i = 0; i < this.length; i++) {
      values.push(this.data[i]);
    }
    return `[${values.join(", ")}]`;
  }

  /**
   * Checks if the array contains a specific value.
   * @param {*} value - Value to search for.
   * @returns {boolean} true if the value exists, false otherwise.
   */
  includes(value) {
    return this.indexOf(value) !== -1;
  }

  /**
   * Creates a new array with all elements that pass a test.
   * @param {Function} callback - Function to test each element.
   * @returns {CustomArray} A new CustomArray with filtered elements.
   */
  filter(callback) {
    const result = new CustomArray();
    for (let i = 0; i < this.length; i++) {
      if (callback(this.data[i], i, this)) {
        result.push(this.data[i]);
      }
    }
    return result;
  }

  /**
   * Creates a new array with the results of calling a function for every element.
   * @param {Function} callback - Function to call for each element.
   * @returns {CustomArray} A new CustomArray with mapped elements.
   */
  map(callback) {
    const result = new CustomArray();
    for (let i = 0; i < this.length; i++) {
      result.push(callback(this.data[i], i, this));
    }
    return result;
  }
}
