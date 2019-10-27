let todos = [
  { id: 3, content: "HTML", completed: false },
  { id: 2, content: "CSS", completed: true },
  { id: 1, content: "Javascript", completed: false }
];

function toggleCompletedAll() {
  // todo.completed 가 false 면 : 뒤에있는 식을 실행
  return todos.map(todo => todo.completed ? todo : Object.assign(todo, { completed: !todo.completed }));
}

toggleCompletedAll();

console.log(todos);
/*
[
  { id: 3, content: 'HTML', completed: true },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: true }
]
*/
