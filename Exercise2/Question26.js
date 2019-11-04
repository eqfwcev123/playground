function specialSort(array) {
  let newArray = array.slice(0);
  newArray = newArray.sort((a, b) => a - b);
  const newArr1 = newArray.filter((cur) => cur >= 0);
  const newArr2 = newArray.filter((cur) => cur < 0).reverse();
  return newArr2.concat(newArr1);
}

const testArray = [-1, 1, 3, -2, 2, 0];

console.log(testArray); // [ -1, 1, 3, -2, 2, 0 ]
console.log(specialSort(testArray)); // [ -1, -2, 0, 1, 2, 3 ]
