class DynamicArray {
  constructor(defaultSize = 4) {
    // Your code here
    this.length = 0;
    this.data = new Array(defaultSize);
    this.capacity = this.data.length;
  }

  read(index) {
    // Your code here
    return this.data[index];
  }

  unshift(val) {
    // Your code here
    for (let i = this.length; i > 0; i--) {
      this.data[i] = this.data[i - 1];
    }
    this.data[0] = val;
    this.length++;
  }
}

module.exports = DynamicArray;
