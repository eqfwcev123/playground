// completed 프로퍼티의 값이 true 인 요소의 갯수 구하기
let todos = [
  { id: 3, content: "HTML", completed: false },
  { id: 2, content: "CSS", completed: true },
  { id: 1, content: "Javascript", completed: false }
];

function countCompletedTodos() {
  return todos.reduce((acc, todo) => todo.completed ? acc + 1 : acc, 0);
}

// console.log(0 + );
console.log(countCompletedTodos()); // 1
