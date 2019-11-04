function isNotOverlapArray(array) {
  const newArr = array.slice(0);
  return newArr.every((cur, ind) => (newArr.indexOf(cur) === ind ? cur <= newArr.length : false));
}

console.log(isNotOverlapArray([4, 1, 3, 2])); // true
console.log(isNotOverlapArray([4, 1, 3])); // false
