function multiplier(x, y) {
  if (y === undefined) {
    return function (z) {
      return x * z;
    };
  } else {
    return x * y;
  }
}
