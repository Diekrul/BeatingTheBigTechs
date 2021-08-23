/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  intervals.sort((a, b) => a[1] - b[1]);
  let lastFinishedInterval = null;
  let prevInterval = [];
  const nonOverlappingIntervals = [];

  const replace = (union) => {
    nonOverlappingIntervals.pop();
    nonOverlappingIntervals.pop();
    nonOverlappingIntervals.push(union);
  };

  const checkWithPrev = () => {
    const prev = nonOverlappingIntervals[nonOverlappingIntervals.length - 2];
    const current = nonOverlappingIntervals[nonOverlappingIntervals.length - 1];
    const prevFinished = prev[1];
    const currentStart = current[0];
    const currentEnd = current[1];
    if (currentStart <= prevFinished) {
      const minimumStart = prev[0] < currentStart ? prev[0] : currentStart;
      const maximumEnd = prev[1] > currentEnd ? prev[1] : currentEnd;
      const union = [minimumStart, maximumEnd];
      replace(union);
      lastFinishedInterval = currentEnd;
      prevInterval = union;
      if (nonOverlappingIntervals.length >= 2) {
        checkWithPrev();
      }
    }
  };

  for (let i = 0; i < intervals.length; i++) {
    const aStart = intervals[i][0];
    const aEnd = intervals[i][1];
    const isOverlapping = aStart <= lastFinishedInterval;
    nonOverlappingIntervals.push(intervals[i]);
    if (lastFinishedInterval != null && isOverlapping) {
      checkWithPrev();
    } else {
      lastFinishedInterval = aEnd;
      prevInterval = intervals[i];
    }
  }
  return nonOverlappingIntervals;
};
