/**
 * @param {number[]} A
 * @return {boolean}
 */
var isMonotonic = function (A) {
  let isMonotic = true;
  let monotoneType = "";
  for (let i = 0; i < A.length - 1; i++) {
    if (A[i] > A[i + 1]) {
      if (monotoneType === "asc") {
        isMonotic = false;
        break;
      }
      monotoneType = "desc";
    } else if (A[i] < A[i + 1]) {
      if (monotoneType === "desc") {
        isMonotic = false;
        break;
      }
      monotoneType = "asc";
    }
  }
  return isMonotic;
};
