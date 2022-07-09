function isValid(s) {
  const list = [];
  const characters = {
    ")": "(",
    "}": "{",
    "]": "[",
  };
  for (let char of s) {
    if (!characters[char]) {
      list.push(char);
    } else if (list.pop() !== characters[char]) {
      return false;
    }
  }
  return list.length === 0;
}
