/**
 * @param {number[][]} intervals
 * @return {boolean}
 */
var canAttendMeetings = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  for (let i = 0; i < intervals.length - 1; i++) {
    const endPrevMeeting = intervals[i][1];
    const startNextMeeting = intervals[i + 1][0];
    if (endPrevMeeting > startNextMeeting) {
      return false;
    }
  }
  return true;
};
