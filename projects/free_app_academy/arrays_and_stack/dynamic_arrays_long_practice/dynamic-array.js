class DynamicArray {
  constructor(defaultSize = 4) {
    // Your code here
    this.capacity = defaultSize;
    this.length = 0;
    this.data = new Array(this.capacity);
  }

  read(index) {
    // Your code here
    return this.data[index];
  }

  push(val) {
    // Your code here
    this.length += 1;
    // this.capacity += 1;
    this.data[this.length - 1] = val;
  }

  pop() {
    // Your code here
    if (this.length >= 1) {
      let tmp = this.data[this.length - 1];
      this.data[this.length - 1] = null;
      this.length--;
      return tmp;
    }

    return undefined;
  }

  shift() {
    // Your code here
    let tmp;
    if (this.length > 0) {
      tmp = this.data[0];
      this.data[0] === null;

      for (let i = 0; i < this.data.length; i++) {
        this.data[i] = this.data[i + 1];
      }

      this.length--;
    }

    return tmp;
  }

  unshift(val) {
    // Your code here
    this.length++;
    for (let i = this.length - 1; i > 0; i--) {
      this.data[i] = this.data[i - 1];
    }

    this.data[0] = val;
  }

  indexOf(val) {
    // Your code here
    if (this.length > 0) {
      for (let i = 0; i < this.length; i++) {
        if (this.data[i] === val) return i;
      }
    }

    return -1;
  }

  resize() {
    // Your code here
    if (this.capacity === this.length) {
      let newCapacity = this.capacity * 2;
      let newData = new Array(newCapacity);

      // Copy old data into newData
      for (let i = 0; i < this.length; i++) {
        newData[i] = this.data[i];
      }

      // Update reference
      this.data = newData;
      this.capacity = newCapacity;
    }
  }
}

module.exports = DynamicArray;
