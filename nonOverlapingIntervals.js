var eraseOverlapIntervals = function (intervals) {
  intervals.sort((a, b) => a[1] - b[1]);
  let intervalsToRemove = 0;
  let currentIntervalThatFinishLatest = intervals[0][1];

  for (let i = 0; i < intervals.length - 1; i++) {
    const nextStart = intervals[i + 1][0];
    const nextEnd = intervals[i + 1][1];
    if (currentIntervalThatFinishLatest > nextStart) {
      intervalsToRemove++;
    } else {
      currentIntervalThatFinishLatest = nextEnd;
    }
  }

  return intervalsToRemove;
};
