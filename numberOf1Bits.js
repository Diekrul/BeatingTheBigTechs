/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
  const binaryRepresentation = n.toString(2).split('');
  const filtered = binaryRepresentation.filter((v) => v === '1');
  return filtered.length;
};
