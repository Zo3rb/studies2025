const findMinimum = (arr) => {
  // Time: O(n)
  // Space: O(1)
  // Your code here
  let minNum = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < minNum) {
      minNum = arr[i];
    }
  }

  return minNum;
};

const runningSum = (arr) => {
  // Time: O(n)
  // Space: O(1)
  // Your code here
  for (let i = 1; i < arr.length; i++) {
    arr[i] = arr[i] + arr[i - 1];
  }

  return arr;
};

const evenNumOfChars = (arr) => {
  // Time: O(n^2)
  // Space: O(1)
  // Your code here
  let evenNums = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length % 2 === 0) evenNums += 1;
  }

  return evenNums;
};

const smallerThanCurr = (arr) => {
  // Time: O(n^2)
  // Space: O(n)
  // Your code here
  const smallerArr = [];

  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] < arr[i]) sum += 1;
    }
    smallerArr[i] = sum;
  }

  return smallerArr;
};

const twoSum = (arr, target) => {
  // Time: O(n)
  // Space: O(1)
  // Your code here
  arr.sort((a, b) => a - b);
  let ptr1 = 0;
  let ptr2 = arr.length - 1;
  while (ptr1 < ptr2) {
    if (arr[ptr1] + arr[ptr2] === target) return true;
    else if (arr[ptr1] + arr[ptr2] > target) ptr2--;
    else ptr1++;
  }

  return false;
};

const secondLargest = (arr) => {
  // Time: O(n)
  // Space: O(1)
  // Your code here
  if (arr.length < 2) return undefined;

  let largest = -Infinity;
  let secLargest = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];

    if (num >= largest) {
      secLargest = largest;
      largest = num;
    } else if (num > secLargest) {
      secLargest = num;
    }
  }

  return secLargest === -Infinity ? undefined : secLargest;
};

const shuffle = (arr) => {
  // Time: O(n)
  // Space: O(n)
  // Your code here
  let newReturnedArr = arr.slice();
  for (let i = newReturnedArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newReturnedArr[i], newReturnedArr[j]] = [
      newReturnedArr[j],
      newReturnedArr[i],
    ];
  }

  return newReturnedArr;
};

module.exports = [
  findMinimum,
  runningSum,
  evenNumOfChars,
  smallerThanCurr,
  twoSum,
  secondLargest,
  shuffle,
];
