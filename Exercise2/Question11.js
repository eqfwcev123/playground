function checkPalindrom(str) {
  // 인수를 반전한 것과 반전하지 않은 인수들의 요소를 비교
  const newStr = [...str];
  for (let i = 0; i < newStr.length; i++) {
    if (newStr[i] === newStr.reverse()[i]) {
      return true;
    }
    return false;
  }
}
// console.log([1,2,3].reverse()[0])

console.log(checkPalindrom('dad')); // true
console.log(checkPalindrom('mom')); // true
console.log(checkPalindrom('palindrom')); // false
console.log(checkPalindrom('s')); // true
