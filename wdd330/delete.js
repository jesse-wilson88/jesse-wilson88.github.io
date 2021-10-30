function outer() {
  const outside = "Outside!";
  function inner() {
    const inside = "Inside!";
    console.log(outside);
    console.log(inside);
  }
  return inner;
}
