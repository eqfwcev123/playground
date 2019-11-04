function findDuplicated(array) {
  array = array.sort((a, b) => a - b);

  const newArr = [];
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i + 1] === array[i]) {
      newArr.push(array[i]);
    }
  }
  return newArr;
}

console.log(findDuplicated([1, 2, 3, 4, 1, 2, 3])); // [ 1, 2, 3]
