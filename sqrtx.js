function mySqrt(x) {
  if (x < 2) {
    return x;
  } else {
    for (let i = 0; i < x; i++) {
      if (i * i == x) {
        return i;
      } else if ((i + 1) * (i + 1) > x) {
        return i;
      }
    }
  }
}