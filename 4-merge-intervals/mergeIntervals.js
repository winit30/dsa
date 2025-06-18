function mergeIntervals(intervals) {
  // Replace this placeholder return statement with your code

  intervals.sort((a, b) => a[0] - b[0]);
  const output = [];

  for (let i = 0; i < intervals.length; i++) {
    if (i === 0) {
      output.push(intervals[i]);
    } else {
      let prevInterval = output[output.length - 1];
      if (prevInterval[1] < intervals[i][0]) {
        output.push(intervals[i]);
      } else {
        if (prevInterval[1] < intervals[i][1]) {
          output[output.length - 1][1] = intervals[i][1];
        }
      }
    }
  }

  return output;
}

export { mergeIntervals };
