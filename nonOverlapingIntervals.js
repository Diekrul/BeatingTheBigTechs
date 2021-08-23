/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function (intervals) {
  for (let i = 0; i < intervals.length; i++) {
    intervals.sort((a, b) => a[0] - b[0]);
  }
  const minStartingInterval = intervals[0][0];
  for (let i = 0; i < intervals.length; i++) {
    intervals.sort((a, b) => a[1] - b[1]);
  }
  let lastFinished = minStartingInterval;
  const result = [];
  let intervalsRemoved = 0;
  for (let i = 0; i < intervals.length; i++) {
    let start = intervals[i][0];
    let end = intervals[i][1];
    if (start >= lastFinished) {
      result.push(intervals[i]);
      lastFinished = end;
    } else {
      intervalsRemoved++;
    }
  }
  return intervalsRemoved;
};
