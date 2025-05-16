const { Buffer } = require("node:buffer");

const memoryContainer = Buffer.alloc(4); // 4 Bytes (32 bits).

// Assigning to Buffer.
memoryContainer[0] = 0xf4;
memoryContainer[1] = 0x3a;
memoryContainer[2] = 0x66;
memoryContainer[3] = 0xb2;

console.log(memoryContainer); // Logging the 4 Bytes.

// Logging each Byte of the buffer with index.
// These will be logged in decimals.
console.log(memoryContainer[0]);
console.log(memoryContainer[1]);
console.log(memoryContainer[2]);
console.log(memoryContainer[3]);

// For saving numbers in buffers and for the negative values.
// We should use the ".write" method which supports a various ranges.
// example:
memoryContainer.writeInt8(-34, 2); // Assigning the negative value.
const negativeIntValue = memoryContainer.readInt8(2); // Getting the negative value.
console.log("Negative Value at position 2: ", negativeIntValue); // Logging the negative value.
console.log(memoryContainer); // Reading the whole buffer Again.
console.log(memoryContainer.toString("utf-8")); // Reading the whole buffer Again into String DT.

const aliBuff = Buffer.from("Ali"); // Another way to create a buffer with data directly.
console.log(aliBuff.toLocaleString()); // Logging the data as a local String.

console.log();
console.log();
