function minWindowSubsequence(str1, str2) {
  let start1 = 0;
  let start2 = 0;

  let minSequenceLen = Infinity;
  let substring = "";

  while (start1 < str1.length) {
    if (str1[start1] === str2[start2]) {
      start2++;
      if (start2 === str2.length) {
        // backTracking
        let start = start1;
        let end = start1;
        start2--;
        while (start2 >= 0) {
          if (str1[start] === str2[start2]) {
            start2--;
          }
          start--;
        }
        start++;
        if (end - start + 1 < minSequenceLen) {
          minSequenceLen = end - start + 1;
          substring = str1.slice(start, end + 1);
        }
        start1 = start;
        start2 = 0;
      }
    }
    start1++;
  }
}
