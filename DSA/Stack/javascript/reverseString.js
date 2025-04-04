#!/bin/node

const Stack = require("./stack");

/**
 * Implementation of Reverse String Algorithm.
 */

function reverseString(inputString) {
  let stack = new Stack();
  let reverseStr = "";

  for (let i = 0; i < inputString.length; i++) {
    stack.push(inputString[i]);
  }

  while (!stack.isEmpty()) {
    reverseStr += stack.pop();
  }

  return reverseStr;
}

let str1 = "!evitacudE ot emocleW";
let str2 = "Hello, World! from Reverse String Function.";
console.log(reverseString(str1));
console.log(reverseString(str2));
