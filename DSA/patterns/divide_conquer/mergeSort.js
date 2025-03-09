function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

function merge(left, right) {
  let sortedArray = [];
  let i = 0,
    j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) sortedArray.push(left[i++]);
    else sortedArray.push(right[j++]);
  }

  return [...sortedArray, ...left.slice(i), ...right.slice(j)];
}

// Example Usage
let arr = [6, 3, 8, 5, 2, 7, 4, 1];
console.log(mergeSort(arr)); // Output: [1, 2, 3, 4, 5, 6, 7, 8]
