/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
  const count1Numbers = (n) => {
    let count = 0;
    while (n !== 0) {
      count = count + (n & 1);
      n = n >>> 1;
    }
    return count;
  };

  const result = [];
  for (let i = 0; i <= n; i++) {
    result.push(count1Numbers(i));
  }
  return result;
};
