const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (Array.isArray(arr)) {
  } else {
    return false;
  }
  let result = [];
  for (let i = 0; i < arr.length; i = i + 1) {
    if (typeof arr[i] !== "string") {
      result.push(arr[i]);
    }
    if (arr[i] === "--double-next") {
      result.push(arr[i + 1]);
    }
    if (arr[i] === "--double-prev") {
      result.push(arr[i - 1]);
    }
    if (arr[i] === "--discard-next") {
      i = i + 1;
    }
    if (arr[i] === "--discard-prev") {
      result.pop();
    }
  }
  return result;
}

module.exports = {
  transform,
};
