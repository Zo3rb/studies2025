let numbers = [1, 2, 3, 4, 5];

numbers.forEach(function (number, index) {
  console.log(`Number at index ${index} is ${number}`);
});

// Using arrow function (shorter syntax)
numbers.forEach((number, index) => {
  console.log(`Number at index ${index} is ${number}`);
});

// Double each number
let doubled = numbers.map(function (number) {
  return number * 2;
});

console.log(numbers); // [1, 2, 3, 4, 5]   (original unchanged)
console.log(doubled); // [2, 4, 6, 8, 10]  (new array)

// Using arrow function
let squared = numbers.map((number) => number * number);
console.log(squared); // [1, 4, 9, 16, 25]

// Get only even numbers
let evenNumbers = numbers.filter(function (number) {
  return number % 2 === 0;
});

console.log(numbers); // [1, 2, 3, 4, 5, 6] (original unchanged)
console.log(evenNumbers); // [2, 4, 6]

// Using arrow function
let bigNumbers = numbers.filter((number) => number > 3);
console.log(bigNumbers); // [4, 5, 6]

// Sum all numbers
let sum = numbers.reduce(function (accumulator, currentNumber) {
  return accumulator + currentNumber;
}, 0); // 0 is the initial value

console.log(sum); // 15

// Using arrow function
let product = numbers.reduce((acc, curr) => acc * curr, 1);
console.log(product); // 120

let firstEven = numbers.find((number) => number % 2 === 0);
console.log(firstEven); // 2 (stops after finding first even number)

// More practical example
let users = [
  { id: 1, name: "John" },
  { id: 2, name: "Jane" },
  { id: 3, name: "Bob" },
];

let user = users.find((user) => user.id === 2);
console.log(user); // { id: 2, name: "Jane" }

let index = numbers.findIndex((number) => number > 3);
console.log(index); // 3 (index of first number greater than 3)

// If not found, returns -1
let notFound = numbers.findIndex((number) => number > 10);
console.log(notFound); // -1

let hasEven = numbers.some((number) => number % 2 === 0);
console.log(hasEven); // true (at least one even number exists)

let hasNegative = numbers.some((number) => number < 0);
console.log(hasNegative); // false (no negative numbers)

let allEven = numbers.every((number) => number % 2 === 0);
console.log(allEven); // true (all numbers are even)

let allPositive = numbers.every((number) => number > 0);
console.log(allPositive); // true (all numbers are positive)
