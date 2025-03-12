/**
 * @param {string} s
 * @return {boolean}
 */
var areOccurrencesEqual = function (s) {
  let ocu = {};
  let num;
  for (let letter of s) ocu[letter] = (ocu[letter] || 0) + 1;
  num = Object.values(ocu)[0];
  if (Object.keys(ocu).length === 1) return true;
  for (let key in ocu) {
    if (ocu[key] !== num) return false;
  }

  return true;
};
