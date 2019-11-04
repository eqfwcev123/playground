function sumDivisor(num) {
  let count = 0;
  for (let i = num; i >= 1; i--) {
    if (num % i === 0) {
      count += i;
    }
  }
  return count;
}

console.log(sumDivisor(12)); // 28
