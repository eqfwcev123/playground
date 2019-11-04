function adder(x, y) {
  let count = 0;
  for (let i = x; i <= y; i++) {
    count += i;
  }
  return count;
}

console.log(adder(3, 5)); // 12
