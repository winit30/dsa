export function findLongestSubstring(str) {
  const charMap = new Map();
  let start = 0;
  let subStringLen = 0;

  for (let end = 0; end < str.length; end++) {
    const endChar = str[end];
    if (charMap.has(endChar)) {
      start = charMap.get(endChar) > start ? charMap.get(endChar) + 1 : start;
      if (end - start + 1 > subStringLen) {
        subStringLen = end - start + 1;
      }
      charMap.set(endChar, end);
    } else {
      charMap.set(endChar, end);
    }
  }

  // Replace this placeholder return statement with your code
  return subStringLen;
}

console.log("result", findLongestSubstring("abcdbea"));
