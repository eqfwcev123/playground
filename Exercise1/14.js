// 14번
let star4 = '';
for (let i = 4; i >= 0; i--) {
  for (let j = 0; j < 5; j++) {
    if (j >= i) {
      star4 += '*';
    } else {
      star4 += ' ';
    }
  }
  star4 += '\n';
}
console.log(star4);
