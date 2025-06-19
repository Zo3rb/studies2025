function sayHello() {
  console.log("Hello, World!");
}

sayHello(); // Outputs: Hello, World!

function greet(name, time) {
  console.log("Good " + time + ", " + name + "!");
}

greet("Alice", "morning"); // Good morning, Alice!
greet("Bob", "evening"); // Good evening, Bob!

function greetWithDefault(name = "Guest") {
  console.log("Welcome, " + name + "!");
}

greetWithDefault(); // Welcome, Guest!
greetWithDefault("David"); // Welcome, David!

function add(a, b) {
  return a + b;
}

let result = add(3, 5);
console.log(result); // Outputs: 8

function gradeScore(score) {
  if (score >= 90) {
    return "A";
  }
  if (score >= 80) {
    return "B";
  }
  return "C";
}

console.log(gradeScore(95)); // Outputs: A
console.log(gradeScore(85)); // Outputs: B
console.log(gradeScore(75)); // Outputs: C

function noReturn() {
  console.log("This function doesn't return anything");
}

result = noReturn();
console.log(result); // Outputs: undefined

let globalVar = "I'm global";

function scopeExample() {
  let localVar = "I'm local";
  console.log(globalVar); // I'm global
  console.log(localVar); // I'm local
}

scopeExample();
console.log(globalVar); // I'm global
console.log(localVar); // Throws an error: localVar is not defined
