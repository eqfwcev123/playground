function average(array) {
  return array.reduce((acc, cur) => acc + cur, 0) / array.length;
}

console.log(average([5, 3, 4])); // 4
