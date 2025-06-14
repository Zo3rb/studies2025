const linearSearch = require("./linearSearch");
const binarySearch = require("./binarySearch");

const unSortedArr = [0, 7, 5, 2, 3, 9, 1, 8, 6, 4];

console.log(
  `Trying Linear Search to find 3 and Index is: ${linearSearch(unSortedArr, 3)}`
);

const sortedArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(
  `Trying Binary Search to find 6 and Index is: ${binarySearch(sortedArr, 6)}`
);
