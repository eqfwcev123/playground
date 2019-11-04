function findMinDistance(array) {
  const newArr = [];
  let min = array[1] - array[0];
  for (let i = 1; i < array.length - 1; i++) {
    if (array[i + 1] - array[i] <= min) {
      newArr.push([array[i], array[i + 1]]);
      min = array[i + 1] - array[i];
    }
  }
  return newArr;
}

// 1차원 점의 배열
const array = [1, 3, 4, 8, 13, 17, 20, 23, 24];
console.log(findMinDistance(array)); // [[3, 4], [23, 24]]
