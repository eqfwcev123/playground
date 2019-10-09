// 13번
let star = '';
for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    if (j >= i) {
      star += '*';
    }
  }
  star += '\n';
}
console.log(star);


const line = 10;
let star2 = '';
for (let i = line; i > 0; i--) {
  for (let j = i; j > 0; j--) {
    star2 += '*';
  }
  star2 += '\n';
}
console.log(star2);
