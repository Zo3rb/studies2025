// statements.
let message = "Hello";
console.log(message);
message = "World";
console.log(message);

// This is a single-line comment

/*
This is a
multi-line comment
*/

console.log("Comments don't affect the code execution");

// Code blocks.
if (true) {
  let blockScoped = "I'm inside the block";
  console.log(blockScoped);
}

// console.log(blockScoped); // This would cause an error

for (let i = 0; i < 3; i++) {
  console.log("Loop iteration: " + i);
}

// Whitespace and Line Breaks.
let sum = 1 + 2 + 3;
console.log(sum); // Outputs: 6
