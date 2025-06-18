function intervalsIntersection(intervalListA, intervalListB) {
  const intersections = [];
  let i = 0;
  let j = 0;

  while (i < intervalListA.length && j < intervalListB.length) {
    let start = Math.max(intervalListA[i][0], intervalListB[j][0]);
    let end = Math.min(intervalListA[i][1], intervalListB[j][1]);

    if (start <= end) {
      intersections.push([start, end]);
    }

    if (intervalListA[i][1] < intervalListB[j][1]) i++;
    else j++;
  }

  return intersections;
}

export { intervalsIntersection };
