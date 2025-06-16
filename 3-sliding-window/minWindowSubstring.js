export function minWindowSubstring(s, t) {
  const tLength = t.length;
  let start = 0;
  let collectionT = new Map();
  let windowMap = new Map();

  let matched = 0;
  let result = [-1, -1];
  let resLength = Infinity;

  for (let i = 0; i < t.length; i++) {
    if (collectionT.has(t[i])) {
      collectionT.set(t[i], collectionT.get(t[i]) + 1);
    } else {
      collectionT.set(t[i], 1);
    }
  }

  for (let end = 0; end < s.length; end++) {
    const endChar = s[end];

    if (windowMap.has(endChar)) {
      windowMap.set(endChar, windowMap.get(endChar) + 1);
    } else {
      windowMap.set(endChar, 1);
    }

    if (
      collectionT.has(endChar) &&
      windowMap.get(endChar) <= collectionT.get(endChar)
    ) {
      matched++;
    }

    while (matched === tLength) {
      if (end - start + 1 < resLength) {
        resLength = end - start + 1;
        result = [start, end + 1];
      }

      const startChar = s[start];
      windowMap.set(startChar, windowMap.get(startChar) - 1);
      if (
        collectionT.has(startChar) &&
        windowMap.get(startChar) < collectionT.get(startChar)
      ) {
        matched--;
      }
      start++;
    }
  }

  // Replace this placeholder return statement with your code
  return s.slice(result[0], result[1]);
}

// Driver code
function main() {
  const s = ["PATTERN", "LIFE", "ABRACADABRA", "STRIKER", "DFFDFDFVD"];
  const t = ["TN", "I", "ABC", "RK", "VDD"];
  for (let i = 0; i < s.length; i++) {
    console.log(
      `${i + 1}.\ts: ${s[i]}\n\tt: ${
        t[i]
      }\n\tThe minimum substring containing ${t[i]} is: ${minWindowSubstring(
        s[i],
        t[i]
      )}`
    );
    console.log("-".repeat(100));
  }
}

main();
