// 11번
let star = '';
for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    if (j <= i) {
      star += '*';
    }
  }
  star += '\n';
}
console.log(star);

// 다른방식 으로 풀기 (if 문 사용 안하고 풀기)
let star2 ='';
const line = 10;
for (let i = 0; i < line; i++) {
  for (let j = 0; j <= i; j++) {
    star2 += '*';
  }
  star2 += '\n';
}
console.log(star2);
