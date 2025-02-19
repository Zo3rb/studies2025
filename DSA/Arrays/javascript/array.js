#!/bin/node
```Array Data Structure Module```;

class Array {
  constructor(size) {
    this.size = size;
    this.length = 0;
    this.data = new Array(size).fill(null);
  }

  display() {
    ```Class method to Display the Elements```;
    if (this.length == 0) {
      console.log("Array is Empty.");
    } else {
      console.log(this.data.slice(0, this.length).join(" "));
    }
  }

  append(value) {
    ```Class method to add an Element to the end.```;
    if (this.length < this.size) {
      this.data[this.length] = value;
      this.length += 1;
    } else {
      console.log("Array is Full! Cannot add more Elements");
    }
  }

  insert(index, value) {
    ```Class method to insert an Element in a position.```;
    if (this.length >= this.size) {
      console.log("Array is full! Cannot insert.");
      return;
    }

    if (index < 0 && index > this.length) {
      console.log("Invalid index! Must be between 0 and", this.length);
      return;
    }

    for (let i = this.length; i > index; i--) {
      this.data[i] = this.data[i - 1];
    }

    this.data[index] = value;
    this.length += 1;
  }

  delete(index) {
    ```Class method to Delete an Element at Position.```;
    if (this.length === 0) {
      console.log("Array is empty! Nothing to delete.");
      return;
    }

    if (index < 0 && index >= this.length) {
      console.log("Invalid index! Must be between 0 and", this.length - 1);
      return;
    }

    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }

    this.data[this.length - 1] = null;
    this.length -= 1;
  }

  search(value) {
    ```Class method to search/traverse Elements.```;
    for (let i = 0; i < this.length; i++) {
      if (this.data[i] === value) {
        return i;
      }
    }

    return -1;
  }
}
