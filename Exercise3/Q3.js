/*
요소의 프로퍼티(id, content, completed)를 문자열 인수로 전달하면 todos의 요소를 정렬하는 함수를 작성하라.

단, todos는 변경되지 않도록 하자.
 */


const todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];

function sortBy(key) {
  let newArr = [...todos];
  return newArr.sort((a, b) => a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0)
  // 3 > 2 ? 1 : (3 < 2 ? -1 : 0) = 1 (양수) 3 은 2 뒤에 가야한다
  // 3 > 1 ? 1 : (3 < 1 ? -1 : 0) = 1 (양수) 3 은 1 뒤에 가야한다
  // 2 > 1 ? 1 : (2 < 1 ? -1 : 0) = 1 (양수) 2 는 1 뒤에 가야한다
}

console.log(sortBy('id'));
console.log(todos)
/*
[
  { id: 1, content: 'Javascript', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 3, content: 'HTML', completed: false }
]
*/
console.log(sortBy('content'));
/*
[
  { id: 2, content: 'CSS', completed: true },
  { id: 3, content: 'HTML', completed: false },
  { id: 1, content: 'Javascript', completed: false }
]
*/
console.log(sortBy('completed'));
/*
[
  { id: 3, content: 'HTML', completed: false },
  { id: 1, content: 'Javascript', completed: false },
  { id: 2, content: 'CSS', completed: true }
]
*/