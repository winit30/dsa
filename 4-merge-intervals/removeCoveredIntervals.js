function removeCoveredIntervals(intervals) {
  // Replace this placeholder return statement with your code
  intervals.sort((a, b) => {
    if (a[0] === b[0]) {
      return b[1] - a[1];
    } else {
      return a[0] - b[0];
    }
  });

  let [start, end] = intervals[0];

  let remaining = 1;

  for (let i = 1; i < intervals.length; i++) {
    // check for covered
    if (end < intervals[i][1]) {
      remaining++;
      [start, end] = intervals[i];
    }
  }
  return remaining;
}

export { removeCoveredIntervals };
