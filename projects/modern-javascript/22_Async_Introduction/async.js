// Run and Observe the Scenario.
console.log("1"); // Synchronous Code.

setTimeout(() => {
  console.log("2"); // Asynchronous Code.
}, 0);

console.log("3"); // Synchronous Code.

/**
 * Output:
 *  "1"
 *  "3"
 *  "2"
 *
 * Why?
 * JavaScript Engine will execute all the Synchronous Code first.
 * then Check the Callback queue and if there handled results.
 * Only then It'll handle the handled results
 * by
 * Event Loop takes those and add it to the Call stack only when The Synchronous code finishes.
 */
