//meeting Room 2

function findSets(intervals) {
  let startTimings = intervals
    .map((interval) => interval[0])
    .sort((a, b) => a - b);
  let endTimings = intervals
    .map((interval) => interval[1])
    .sort((a, b) => a - b);

  let usedRooms = 0,
    endPointer = 0;

  for (let i = 0; i < intervals.length; i++) {
    if (startTimings[i] >= endTimings[endPointer]) {
      //Room is free
      endPointer++;
    } else {
      // need a room
      usedRooms++;
    }
  }
  return usedRooms;
}

export { findSets };
