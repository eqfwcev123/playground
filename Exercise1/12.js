// 12번
let star2 = '';
for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    if (j >= i) {
      star2 += '*';
    } else {
      star2 += ' ';
    }
  }
  star2 += '\n';
}
console.log(star2);
