/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
  const binaryRepresentation = n.toString(2).split('');
  const filtered = binaryRepresentation.filter((v) => v === '1');
  return filtered.length;
};

/*
var hammingWeight = function(n) {
    var count = 0;
    
    while(n !== 0) {
        if (n & 1 > 0)
            count++;
        
        n = n >>> 1;
    }
    
    return count;
};
*/
