// A simple object as we've seen before
const person = {
  name: "John",
  age: 30,
  greet() {
    console.log(`Hello, my name is ${this.name}`);
  },
};

// Numbers have methods - they're objects!
const num = 42;
console.log(num.toString()); // "42"
console.log((42).toFixed(2)); // "42.00"

// Strings have methods too
const str = "hello";
console.log(str.toUpperCase()); // "HELLO"

// Even functions are objects
function greet() {
  console.log("Hi!");
}
console.log(typeof greet); // "function"
console.log(greet instanceof Object); // true

// Arrays are objects
const arr = [1, 2, 3];
console.log(typeof arr); // "object"

// The only primitives that aren't objects are:
// - null
// - undefined
// - numbers (they're automatically converted to Number objects when needed)
// - strings (they're automatically converted to String objects when needed)
// - booleans (they're automatically converted to Boolean objects when needed)
// - symbols

// JavaScript automatically "wraps" primitives when needed
const primitive = "hello";
console.log(primitive.length); // 5 - JavaScript temporarily converts to String object
