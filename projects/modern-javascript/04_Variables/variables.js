"use strict";

let age = 25;
console.log(age); // Outputs: 25

age = 26; // We can change the value
console.log(age); // Outputs: 26

let name = "Alice";
console.log(name); // Outputs: Alice

name = "Bob"; // We can also change string values
console.log(name); // Outputs: Bob

const PI = 3.14159;
console.log(PI); // Outputs: 3.14159

// PI = 3.14; // This would cause an error: Assignment to a constant variable

const person = { name: "Charlie", age: 30 };
person.age = 31; // We can modify properties of a const object
console.log(person); // Outputs: {name: "Charlie", age: 31}

// person = {name: "David", age: 25}; // This would cause an error: Assignment to a constant variable

let globalVar = "I'm visible everywhere";

function scopeExample() {
  let functionVar = "I'm only visible in this function";
  if (true) {
    let blockVar = "I'm only visible in this block";
    console.log(globalVar, functionVar, blockVar); // This works fine
  }
  console.log(globalVar, functionVar); // This works fine
  // console.log(blockVar); // This would cause an error
}

scopeExample();
console.log(globalVar); // This works fine
// console.log(functionVar); // This would cause an error

const MAX_USERS = 100;
const DEFAULT_LANGUAGE = "English";
const COMPANY_NAME = "Acme Corporation";

function createUser(username) {
  if (getCurrentUserCount() < MAX_USERS) {
    // Create user logic here
    console.log(
      `Creating user ${username} with default language ${DEFAULT_LANGUAGE}`
    );
  } else {
    console.log(
      `Cannot create user. ${COMPANY_NAME} has reached the maximum user limit.`
    );
  }
}

createUser("Alice");
