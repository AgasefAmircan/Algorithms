function guessNumber(n) {
  let left = 1;
  let right = n;
  while (left <= right) {
    let mid = Math.floor((right + left) / 2);
    let res = guess(mid);
    if (res === 0) {
      return mid;
    } else if (res === 1) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
};