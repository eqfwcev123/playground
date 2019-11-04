function hideNumbers(str) {
  const newStr = [...str];
  return newStr.map((cur, ind) => (ind < newStr.length - 4 ? '*' : cur)).join('');
}

console.log(hideNumbers('01033334444')); // *******4444
console.log(hideNumbers('027778888')); // *****8888
