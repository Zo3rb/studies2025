import { add, subtract } from "./utils.js";

console.log(add(5, 3));
console.log(subtract(5, 3));

import Calculator, { VERSION } from "./calculator.js";

const calc = new Calculator();
console.log(calc.add(5, 3)); // 8
console.log(VERSION); // '1.0'
