const fs = require("node:fs");

let content = fs.readFileSync("./text.txt");
content = content.toJSON();
content = { ...content, plain: content.toLocaleString() };

console.log(content);
