function numberOfPrime(n) {
  const newArr = [];
  for (let i = 2; i <= n; i++) { // 2 3 4 5 6 7 8 9 10
    let primeChecker = true;
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        primeChecker = false;
      }
    }
    console.log(primeChecker);

    if (primeChecker) {
      newArr.push(i);
    }
  }
  return newArr.length;


}

console.log(numberOfPrime(5)); // 4

// 2 3 4 5 6 7 8 9 10

// 2
// 2 3
// 2 3 4
// 2 3 4 5
// 2 3 4 5 6
// 2 3 4 5 6 7
// 2 3 4 5 6 7 8
// 2 3 4 5 6 7 8 9
// 2 3 4 5 6 7 8 9 10
