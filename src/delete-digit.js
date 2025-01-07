const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let str = n.toString();
  let arr = str.split("");
  let arrNum = [];
  let arrTemp = [];
  for (let i = 0; i < arr.length; i = i + 1) {
    arrTemp = [...arr];
    arrTemp.splice(i, 1);
    arrNum.push(arrTemp.join(""));
  }
  return +arrNum.sort().pop();
}

module.exports = {
  deleteDigit,
};
