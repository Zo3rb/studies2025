#!/bin/node

/**
 * Implementation of the Solution.
 */

const Stack = require("./stack");

function isMatch(p1, p2) {
  return (
    (p1 === "(" && p2 === ")") ||
    (p1 === "{" && p2 === "}") ||
    (p1 === "[" && p2 === "]")
  );
}

function isParenBalanced(parenString) {
  let stack = new Stack();
  let isBalanced = true;
  let index = 0;

  while (index < parenString.length) {
    let paren = parenString[index];

    if ("({[".includes(paren)) {
      stack.push(paren);
    } else {
      if (stack.isEmpty()) {
        isBalanced = false;
        break;
      } else {
        let top = stack.pop();
        if (!isMatch(top, paren)) {
          isBalanced = false;
          break;
        }
      }
    }

    index += 1;
  }

  return stack.isEmpty() && isBalanced;
}

// Example Usage
console.log(isParenBalanced("({[]})")); // ✅ true
console.log(isParenBalanced("({[})]")); // ❌ false
console.log(isParenBalanced("{[(])}")); // ❌ false
console.log(isParenBalanced("{[()]}")); // ✅ true
