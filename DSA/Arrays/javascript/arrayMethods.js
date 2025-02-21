// arraysMethods.js

/*
 This file contains useful methods that can be applied to JavaScript Arrays.
 Each method includes an example and explanation for better understanding.
 Additionally, Higher-Order Functions (HOFs) are demonstrated at the end.
*/

// Creating an Array
let myArray = [1, 2, 3, 4, 5];
console.log("Original Array:", myArray);

// 1. push(): Adds an element to the end of the array
myArray.push(6);
console.log("After push(6):", myArray);

// 2. pop(): Removes and returns the last element
let poppedValue = myArray.pop();
console.log("After pop():", myArray, "| Popped Value:", poppedValue);

// 3. unshift(): Adds an element to the beginning of the array
myArray.unshift(0);
console.log("After unshift(0):", myArray);

// 4. shift(): Removes and returns the first element
let shiftedValue = myArray.shift();
console.log("After shift():", myArray, "| Shifted Value:", shiftedValue);

// 5. splice(): Adds/Removes elements at a specific index
myArray.splice(2, 0, 10); // Inserts 10 at index 2
console.log("After splice(2, 0, 10):", myArray);

// 6. slice(): Returns a shallow copy of a portion of an array
let slicedArray = myArray.slice(1, 4);
console.log("After slice(1, 4):", slicedArray);

// 7. indexOf(): Returns the index of the first occurrence of a value
let indexValue = myArray.indexOf(3);
console.log("Index of 3:", indexValue);

// 8. includes(): Checks if an element exists in an array
let hasValue = myArray.includes(4);
console.log("Array includes 4:", hasValue);

// 9. reverse(): Reverses the order of elements in the array
myArray.reverse();
console.log("After reverse():", myArray);

// 10. sort(): Sorts the array in ascending order
myArray.sort((a, b) => a - b);
console.log("After sort():", myArray);

// 11. concat(): Merges two arrays
let newArray = myArray.concat([7, 8, 9]);
console.log("After concat([7, 8, 9]):", newArray);

// Higher-Order Functions (HOFs) with Arrays

// 12. map(): Applies a function to each element in the array
let doubled = myArray.map((x) => x * 2);
console.log("After map(x => x * 2):", doubled);

// 13. filter(): Filters elements based on a condition
let evenNumbers = myArray.filter((x) => x % 2 === 0);
console.log("After filter(x => x % 2 === 0):", evenNumbers);

// 14. reduce(): Reduces the array to a single value
let sumOfNumbers = myArray.reduce((acc, x) => acc + x, 0);
console.log("After reduce((acc, x) => acc + x, 0):", sumOfNumbers);
