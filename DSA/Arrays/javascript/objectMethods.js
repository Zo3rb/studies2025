// objectMethods.js

/*
 This file contains useful methods that can be applied to JavaScript Objects.
 Each method includes an example and explanation for better understanding.
 Additionally, Higher-Order Functions (HOFs) are demonstrated at the end.
*/

// Creating an Object
let myObject = { name: "Alice", age: 25, city: "New York" };
console.log("Original Object:", myObject);

// 1. Object.keys(): Returns an array of keys
console.log("Keys:", Object.keys(myObject));

// 2. Object.values(): Returns an array of values
console.log("Values:", Object.values(myObject));

// 3. Object.entries(): Returns an array of key-value pairs
console.log("Entries:", Object.entries(myObject));

// 4. Object.assign(): Copies properties from one object to another
let newObject = Object.assign({}, myObject, { job: "Engineer" });
console.log("After assign():", newObject);

// 5. Object.hasOwnProperty(): Checks if an object has a specific property
console.log("Has 'age':", myObject.hasOwnProperty("age"));
console.log("Has 'salary':", myObject.hasOwnProperty("salary"));

// 6. delete: Removes a property from an object
delete myObject.city;
console.log("After delete city:", myObject);

// 7. Object.freeze(): Freezes an object (prevents modifications)
let frozenObject = Object.freeze({ name: "Bob", age: 30 });
// frozenObject.age = 35; // This will fail silently in strict mode
console.log("After freeze:", frozenObject);

// 8. Object.seal(): Seals an object (prevents adding/removing properties but allows modification of existing ones)
let sealedObject = Object.seal({ name: "Charlie", age: 40 });
sealedObject.age = 45; // Allowed
// sealedObject.city = "London"; // Not allowed
console.log("After seal:", sealedObject);

// Higher-Order Functions (HOFs) with Objects
let users = {
  Alice: 25,
  Bob: 30,
  Charlie: 35,
};

// 9. Mapping over Object values
let doubledAges = Object.fromEntries(
  Object.entries(users).map(([key, value]) => [key, value * 2])
);
console.log("Mapped (Doubled Ages):", doubledAges);

// 10. Filtering Object entries
let filteredUsers = Object.fromEntries(
  Object.entries(users).filter(([key, value]) => value > 28)
);
console.log("Filtered Users (age > 28):", filteredUsers);

// 11. Reducing Object values to a single value
let totalAge = Object.values(users).reduce((acc, value) => acc + value, 0);
console.log("Total Age after reduce():", totalAge);
