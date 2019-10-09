// 9번
let count3 = 0;
for (let i = 0; i < 20; i++) {
  if (i % 2 === 0 || i % 3 === 0) {
    count3 += i;
  }
}
console.log(count3);
