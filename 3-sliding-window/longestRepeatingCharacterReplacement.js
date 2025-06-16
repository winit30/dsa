function longestRepeatingCharacterReplacement(s, k) {
  let n = s.length;
  let lenthOfMaxCharSubString = 0;
  let start = 0;
  let charFreq = new Map();
  let mostFreqChar = 0;

  for (let end = 0; end < n; end++) {
    if (charFreq.has(s[end])) {
      charFreq.set(s[end], charFreq.get(s[end]) + 1);
    } else {
      charFreq.set(s[end], 1);
    }

    mostFreqChar = Math.max(mostFreqChar, charFreq.get(s[end]));

    if (end - start + 1 - mostFreqChar > k) {
      charFreq.set(s[start], charFreq.get(s[start]) - 1);
      start++;
    }
    lenthOfMaxCharSubString = Math.max(
      lenthOfMaxCharSubString,
      end - start + 1
    );
  }
  return lenthOfMaxCharSubString;
}

// Driver code
const inputStrings = ["aabccbb", "abbcb", "abccde", "abbcab", "bbbbbbbbb"];
const k = [2, 1, 1, 2, 4];

for (let i = 0; i < inputStrings.length; ++i) {
  console.log(`${i + 1}.\tInput String: '${inputStrings[i]}'`);
  console.log(`\tk: ${k[i]}`);
  console.log(
    "\tLength of the longest substring with repeating characters: " +
      longestRepeatingCharacterReplacement(inputStrings[i], k[i])
  );
  console.log("-".repeat(100));
}
