/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let sum = String(x).startsWith("-") ? "-" : "";

  while (Math.abs(x) > 0) {
    sum += String(Math.abs(x) % 10);
    x = parseInt(Math.abs(x) / 10);
  }

  sum = Number(sum);

  if (sum <= -2147483648 || sum >= 2147483647) {
    return 0;
  }

  return sum;
};
