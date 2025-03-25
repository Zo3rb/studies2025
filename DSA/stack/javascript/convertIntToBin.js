#!/bin/node

/**
 * Implementation of Convert Integers to Binaries.
 */

const Stack = require("./stack");

function convertIntToBin(decNum) {
  // Implementation of the Function.
  let stack = new Stack();
  binRes = "";

  while (decNum !== 0) {
    if (decNum % 2 === 0) stack.push(0);
    else stack.push(1);

    decNum = parseInt(decNum / 2);
  }

  while (!stack.isEmpty()) {
    binRes += String(stack.pop());
  }

  return Number(binRes);
}

let inputNum = 242;
console.log(convertIntToBin(inputNum));
