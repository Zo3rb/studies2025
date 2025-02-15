/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
  let richest = 0;
  for (let account of accounts) {
    let sum = 0;
    for (let amount of account) sum += amount;
    if (sum >= richest) richest = sum;
  }
  return richest;
};
