let mainDiv = document.getElementById("main");

console.log("Child Nodes:", mainDiv.childNodes);
console.log("Child Elements:", mainDiv.children);

// Change the text color of the h1
document.querySelector("h1").style.color = "blue";

// Change the background of paragraphs with the 'highlight' class
let highlightedPara = document.querySelector(".highlight");
highlightedPara.style.backgroundColor = "yellow";

// Add some text to the first list item
document.querySelector("li").textContent += " (modified)";
