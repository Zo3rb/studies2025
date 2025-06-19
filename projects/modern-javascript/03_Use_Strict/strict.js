"use strict";

let x = 3.14;
console.log(x);

function strictFunction() {
  "use strict";
  let y = 3.14; // This is fine
  z = 42; // This will cause an error
}

strictFunction();
