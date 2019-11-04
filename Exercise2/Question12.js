function uniq(array) {
  return array.filter((cur, ind) => array.indexOf(cur) === ind);
  // 0 === 0 true
  // 1 === 1 true
  // 0 === 2 false
  // 3 === 3 true
  // 4 === 4 true
  // 3 === 5 false
  // 4 === 6 false
}

console.log(uniq([2, 1, 2, 3, 4, 3, 4])); // [ 2, 1, 3, 4 ]
