function digitSum(n) {
  let newN = n;
  if (newN > 100000000) {
    return false;
  }
  newN = [...n.toString()];
  return newN.reduce((acc, cur) => acc + +cur, 0);
}

console.log(digitSum(123)); // 6
console.log(digitSum(987)); // 24
console.log(digitSum(100000001)); // false
