function toastBread() {
  return new Promise((resolve, reject) => {
    console.log("Starting to toast bread...");

    setTimeout(() => {
      // Simulate success case
      resolve("Toasted bread");

      // Could simulate failure with:
      // reject('Toaster is broken!');
    }, 2000);
  });
}

// Using the Promise
toastBread()
  .then((result) => console.log(result))
  .catch((error) => console.log("Error:", error));

console.log("Doing other things while bread is toasting...");

// Let's create Promises in different states
const pendingPromise = new Promise((resolve, reject) => {
  // This Promise stays pending because we never call resolve or reject
});

const fulfilledPromise = new Promise((resolve, reject) => {
  resolve("Success!");
});

const rejectedPromise = new Promise((resolve, reject) => {
  reject("Something went wrong");
});

console.log("Pending Promise:", pendingPromise);
console.log("Fulfilled Promise:", fulfilledPromise);
console.log("Rejected Promise:", rejectedPromise);
