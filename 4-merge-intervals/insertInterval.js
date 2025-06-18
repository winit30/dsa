function insertInterval(existingIntervals, newInterval) {
  const result = [];
  let i = 0;

  while (
    i < existingIntervals.length &&
    existingIntervals[i][0] < newInterval[0]
  ) {
    result.push(existingIntervals[i]);
    i++;
  }

  if (result.length === 0 || result[result.length - 1][1] < newInterval[0]) {
    result.push(newInterval);
  } else {
    result[result.length - 1][1] = Math.max(
      newInterval[1],
      result[result.length - 1][1]
    );
  }

  while (i < existingIntervals.length) {
    let prev = result[result.length - 1];
    if (prev[1] >= existingIntervals[i][0]) {
      result[result.length - 1][1] = Math.max(
        existingIntervals[i][1],
        result[result.length - 1][1]
      );
    } else {
      result.push(existingIntervals[i]);
    }
    i++;
  }

  return result;
}

export { insertInterval };
