function isHarshad(n) {
  const newArr = [...n.toString()].slice();
  const newNum = newArr.reduce((acc, cur) => +cur + acc, 0);
  if (n % newNum === 0) {
    return true;
  }
  return false;
}

console.log(isHarshad(10)); // true
console.log(isHarshad(12)); // true
console.log(isHarshad(18)); // true
console.log(isHarshad(11)); // false
console.log(isHarshad(13)); // false
