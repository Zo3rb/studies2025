const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function (number) {
  console.log(number);
});

// Or with arrow function
const newNums = numbers.map((number) => number * 2);

console.log(newNums);

// Regular function that does something
function greet(name) {
  console.log(`Hello, ${name}!`);
}

// Function that takes another function as an argument
function executeGreeting(callbackFn) {
  callbackFn("John");
}

// Pass greet as a callback
executeGreeting(greet); // Outputs: Hello, John!

function makeBreakfast() {
  console.log("Starting breakfast preparation...");

  setTimeout(() => {
    console.log("1. Toasting bread...");

    setTimeout(() => {
      console.log("2. Bread is toasted! Adding butter...");

      setTimeout(() => {
        console.log("3. Butter added! Making eggs...");

        setTimeout(() => {
          console.log("4. Eggs are ready! Breakfast is served!");
        }, 2000); // Cooking eggs
      }, 1000); // Adding butter
    }, 2000); // Toasting
  }, 1000); // Initial preparation
}

makeBreakfast();

function getUser(id, successCallback, errorCallback) {
  console.log(`Fetching user ${id}...`);

  setTimeout(() => {
    // Simulate random error
    if (Math.random() > 0.5) {
      // Success case
      const user = { id: id, name: "John" };
      successCallback(user);
    } else {
      // Error case
      errorCallback(new Error("Failed to fetch user"));
    }
  }, 1000);
}

// Using the function with error handling
getUser(
  1,
  // Success callback
  (user) => {
    console.log("Success:", user);
  },
  // Error callback
  (error) => {
    console.log("Error:", error.message);
  }
);
