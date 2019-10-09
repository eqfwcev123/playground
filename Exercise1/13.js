// 13번
let star3 = '';
for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    if (j >= i) {
      star3 += '*';
    }
  }
  star3 += '\n';
}
console.log(star3);
