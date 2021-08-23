/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */

var insert = function (intervals, newInterval) {
  intervals.push(newInterval);
  intervals.sort((a, b) => a[0] - b[0]);
  const result = [];
  let lastFinished = null;

  const merge = (end) => {
    const prevInterval = result.pop();
    const prevIntervalMin = prevInterval[0]; //works because its ordered ascending by start data
    const max = Math.max(prevInterval[1], end);
    result.push([prevIntervalMin, max]);
  };

  for (let i = 0; i < intervals.length; i++) {
    const start = intervals[i][0];
    const end = intervals[i][1];
    if (lastFinished === null) {
      lastFinished = end;
      result.push(intervals[i]);
    } else if (start <= lastFinished) {
      merge(end);
      lastFinished = result[result.length - 1][1];
    } else {
      result.push(intervals[i]);
      lastFinished = end;
    }
  }
  return result;
};
