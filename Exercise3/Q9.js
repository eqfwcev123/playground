// todos
let todos = [
  { id: 3, content: "HTML", completed: false },
  { id: 2, content: "CSS", completed: true },
  { id: 1, content: "Javascript", completed: false }
];

function getMaxId() {
  // return todos.reduce((acc,todo)=> todo.id > acc ? acc = todo.id : acc, todos[0])
  return todos.reduce(
    (acc, todo) => (todo.id > acc ? todo.id : acc),
    todos[0].id
  );
}

function getMaxId2(){
  // Math.max 를 이용한 최대값 구하기
  return Math.max(...todos.map(todo => todo.id));
}

console.log(getMaxId()); // 3
