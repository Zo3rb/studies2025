function binarySearch(arr, target, left, right) {
  if (left > right) return -1;

  let mid = Math.floor((left + right) / 2);

  if (arr[mid] === target) return mid;
  else if (arr[mid] < target) return binarySearch(arr, target, mid + 1, right);
  else return binarySearch(arr, target, left, mid - 1);
}

// Example Usage
let arr = [1, 3, 5, 7, 9, 11];
let target = 5;
console.log(binarySearch(arr, target, 0, arr.length - 1)); // Output: 2
