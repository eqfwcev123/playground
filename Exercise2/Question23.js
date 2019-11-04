function getArray(arr) {
  return arr.filter((cur) => cur > 3 && !(cur % 2));
}

console.log(getArray([1, 2, 3, 4, 5, 6])); // [ 4, 6 ]
