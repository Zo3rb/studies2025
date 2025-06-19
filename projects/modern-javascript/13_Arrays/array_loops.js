let fruits = ["apple", "banana", "orange", "grape"];

// Basic forward iteration
for (let i = 0; i < fruits.length; i++) {
  console.log(`Fruit ${i + 1}: ${fruits[i]}`);
}

// Backward iteration
for (let i = fruits.length - 1; i >= 0; i--) {
  console.log(`Fruit ${i + 1}: ${fruits[i]}`);
}

// Skipping elements (every second element)
for (let i = 0; i < fruits.length; i += 2) {
  console.log(`Fruit ${i + 1}: ${fruits[i]}`);
}

let numbers = [1, 2, 3, 4, 5];

// Breaking out of a loop
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] === 3) {
    break;
  }
  console.log(numbers[i]);
} // Outputs: 1, 2

// Skipping elements with continue
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    continue;
  }
  console.log(numbers[i]);
} // Outputs: 1, 3, 5

// Modifying array elements
for (let i = 0; i < numbers.length; i++) {
  numbers[i] = numbers[i] * 2;
}
console.log(numbers); // [2, 4, 6, 8, 10]

let colors = ["red", "green", "blue"];

let i = 0;
while (i < colors.length) {
  console.log(colors[i]);
  i++;
}

// Another pattern using while
let j = colors.length;
while (j--) {
  console.log(colors[j]);
}

numbers = [1, 2, 3, 4, 5];

for (let number of numbers) {
  console.log(number);
}

// Note: You can't easily access the index in for...of
// If you need both element and index, use for loop or forEach
