var generateParenthesis = function (n) {
  let result = [];

  function generate(open, close, path) {
    if (path.length === n * 2) {
      result.push(path);
      return;
    }

    if (open < n) {
      generate(open + 1, close, path + "(");
    }

    if (close < open) {
      generate(open, close + 1, path + ")");
    }
  }

  generate(0, 0, "");

  return result;
};

console.log(generateParenthesis(2));
