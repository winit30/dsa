function findRepeatedDnaSequences(s) {
  //Convert DNA string to number
  const toInt = { A: 0, C: 1, G: 2, T: 3 };
  const encoded = Array.from(s, (c) => toInt[c]);

  const a = 4;
  const k = 10;
  const n = s.length;
  let a_k = 1;
  let h = 0;

  if (n <= k) return [];

  for (let i = 0; i < k; i++) {
    h = h * a + encoded[i];
    a_k *= a;
  }

  const seen = new Set();
  const output = new Set();

  seen.add(h);

  for (let start = 1; start <= n - k; start++) {
    h = h * a - encoded[start - 1] * a_k + encoded[start + k - 1];
    if (seen.has(h)) {
      output.add(s.slice(start, start + k));
    } else {
      seen.add(h);
    }
  }

  return Array.from(output);
}

export { findRepeatedDnaSequences };
