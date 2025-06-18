function countDaysWithoutMeetings(days, meetings) {
  meetings.sort((a, b) => a[0] - b[0]);

  let occupied = 0;

  let [start, end] = meetings[0];

  for (let i = 1; i < meetings.length; i++) {
    if (meetings[i][0] <= end) {
      end = Math.max(end, meetings[i][1]);
    } else {
      occupied += end - start + 1;
      start = meetings[i][0];
      end = meetings[i][1];
    }
  }

  occupied += end - start + 1;

  return days - occupied;
}

export { countDaysWithoutMeetings };
