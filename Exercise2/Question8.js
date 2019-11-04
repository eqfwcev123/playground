function waterMelon(n) {
  let newStr = '';
  for (let i = 0; i < n; i++) {
    if (i % 2) {
      newStr += '박';
    } else {
      newStr += '수';
    }
  }
  return newStr;
}

console.log(`n이 3인 경우: ${waterMelon(3)}`);
console.log(`n이 4인 경우: ${waterMelon(4)}`);
