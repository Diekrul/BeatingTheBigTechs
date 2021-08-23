/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  let result = null;
  if (x * x === x) return x;
  for (let i = 0; i < x; i++) {
    if (i * i === x) {
      result = i;
      break;
    } else if (i * i > x) {
      break;
    } else if (i * i < x) {
      result = i;
    }
  }
  return result;
};
