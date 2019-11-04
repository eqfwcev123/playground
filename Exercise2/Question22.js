function adjacentElementsProduct(arr) {
  let max = arr[0] * arr[1];
  for (let i = 1; i < arr.length - 1; i++) {
    if ((arr[i] * arr[i + 1]) > max) {
      max = arr[i] * arr[i + 1];
    }
  }
  return max;
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3])); // 21
