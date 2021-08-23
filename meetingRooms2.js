/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function (intervals) {
  if (intervals.length < 1) {
    return 0;
  }
  const lastFinishedMeeting = intervals.sort((a, b) => a[1] - b[1])[
    intervals.length - 1
  ][1];

  let currentRoomsUsed = 0;
  let maxOfRoomNeeded = 0;
  const startMeetings = [];
  const endMeetings = [];

  for (let i = 0; i < intervals.length; i++) {
    startMeetings.push(intervals[i][0]);
    endMeetings.push(intervals[i][1]);
  }
  startMeetings.sort((a, b) => a - b);
  endMeetings.sort((a, b) => a - b);

  for (let i = 0; i < lastFinishedMeeting; i++) {
    const start = startMeetings[0];
    const end = endMeetings[0];

    if (start === i) {
      let j = 0;

      while (startMeetings[j] === start) {
        startMeetings.shift();
        currentRoomsUsed++;
      }
    }
    if (end === i) {
      let j = 0;
      while (endMeetings[j] === end) {
        endMeetings.shift();
        currentRoomsUsed--;
      }
    }
    if (maxOfRoomNeeded < currentRoomsUsed) {
      maxOfRoomNeeded++;
    }
  }
  return maxOfRoomNeeded;
};
