/**
 * @param {number[]} hours
 * @param {number} target
 * @return {number}
 */
var numberOfEmployeesWhoMetTarget = function (hours, target) {
  let emps = 0;
  for (let val of hours) {
    val >= target ? (emps += 1) : false;
  }

  return emps;
};
