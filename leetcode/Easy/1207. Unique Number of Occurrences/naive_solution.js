/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
  if (arr.length < 2 || (arr.length === 2 && arr[0] != arr[1])) return false;
  let mapped = {};
  let mappedValues = [];

  for (let element of arr) mapped[element] = (mapped[element] || 0) + 1;
  for (let val of Object.values(mapped)) mappedValues.push(val);
  mappedValues = mappedValues.toSorted(function (a, b) {
    return a - b;
  });

  console.log(mappedValues);

  for (let ele of mappedValues) {
    let left = mappedValues.indexOf(ele);
    let right = mappedValues.lastIndexOf(ele);
    if (left != right) return false;
  }

  return true;
};
