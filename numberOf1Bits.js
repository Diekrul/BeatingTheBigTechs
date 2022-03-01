/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
  let count = 0;
  while (n !== 0) {
    count = count + (n & 1);
    // if n & 1 === 0, means that n was 0 because any number that is not 1, AND 1, returns 0
    n = n >>> 1;
    // Push the digits from left to right. exmaple: 110=>011=>001=>000
  }
  return count;
};
