/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function (a, b) {
  //Not necessary because the XOR also converts numbers to binaries
  //But important to know.

  /*const fromNumberToBinary = (number) => {
    if (number >= 0) {
      return number.toString(2);
    } else {
      //unsigned unshift operand ===> representation of a negative number
      return (number >>> 0).toString(2);
    }
  };*/

  const sumTwoBinaryNumbers = (a, b) => {
    while (b !== 0) {
      //AND (&) Marks where are all the carry's
      let carry = a & b;

      //XOR (^) => Sum the two binaries without counting the carry's
      a = a ^ b;

      //Takes the carry binary representation (remember that is in 32 bits representation), and move one space to left (shift)
      //this means, if carry is 10 (remember that returns a Integer number) is equal to 000000.....1010 (which is 10 represented as bits)
      // and finally 000000.....1010 << 1 is equal to
      //0000000000000000000000000000010100 => which is 20 as number
      b = carry << 1;
    }
    return a;
  };

  const result = sumTwoBinaryNumbers(a, b);
  return result;
};
