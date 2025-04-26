/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  let sum = "";
  y = String(x).split("");
  while (y.length) {
    sum += y.pop();
  }

  return String(x) === sum;
};
