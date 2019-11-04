// Todo list Version 2

// Version2 라는 것은 돔을 건드리지 않고 불러온 데이터를 변경하는 것이다.

// 서버에서 자료를 가지고 온다
let todos = [];

const getTodos = function () {
  // TODO: 서버로 부터 todos 데이터를 취득
  // 랜선을 타고 데이터가 왔다갔다 하는데, ASCII 코드만 왔다갔다 할 수 있다
  // 정보를 주고받을 때 규약이 필요한데 이 규약을 protocol 이라고 한다
  // 웹브라우저랑 데이터베이스가 데이터를 주고 받을때 JSON 이라는 프로토콜을 사용한다
  // JSON 에 주로 담긴는 데이터는 배열이다(데이터를 주고 받는 일종의 규칙).
  todos = [
    { id: 1, content: 'HTML', completed: false },
    { id: 2, content: 'CSS', completed: true },
    { id: 3, content: 'JS', completed: false }
  ];

  // load Event 가 발생해서 서버에서 데이터를 가지고 온다
  // 이 데이터를 가지고 화면에 뿌려야 한다
  render();
};

const $input = document.querySelector('.input-todo');
const $todos = document.querySelector('.todos');

// 화면에 데이터 뿌리기
const render = function () {
  // html은 화면에 그려질 내용이다
  let html = '';
  todos.forEach((todo) => {
    html += `
        <li id ='${todo.id}'>
          <label>
            <input type="checkbox" class='${todo.completed ? 'checked-box' : ''}'${todo.completed ? 'checked' : ''}>
            <span>${todo.content}</span>
          </label>
          <button class='remove'>X</button>
        </li>
      `;
  });
  $todos.innerHTML = html;
};

// 추가 (spread 문법)
const addTodo = function (e) {
  if (e.keyCode !== 13 || e.target.value === '') return;
  todos = [
    ...todos,
    {
      id: todos.length > 1 ? todos[todos.length - 1].id + 1 : !undefined + 0,
      content: e.target.value,
      completed: false
    }
  ];
  render();
  e.target.value = '';
};

// 변경 (map)
const toggleCompleted = function (e) {
  console.log(e.target);
  // todo.completed 은 기존의 데이터
  todos = todos.map((todo) => (todo.id === +(e.target.parentNode.parentNode.id) ? { ...todo, completed: !todo.completed } : todo));
  console.log(todos);
  render();
};

// 삭제 (filter)
const removeTodo = function (e) {
  // this.removeChild 를하면 요소를 하는데 밑에서 render를 하니까 안지워 진것처럼 동작 한다.
  if (!e.target.classList.contains('remove')) return;
  todos = todos.filter((todo) => +e.target.parentNode.id !== todo.id);
  // 1 !== 1 false
  // 1 !== 2 true
  // 1 !== 3 true
  render();
};

// 서버에 가서 데이터를 받아온 후
window.onload = getTodos;

// 새로운 요소 추가
$input.onkeyup = addTodo;

// 완선된 요소에 줄 긋기. map을 사용해서 요소를 껏다킬 수 있다.
// todos 를 클릭하면 completed 를 true 혹은 false로 바꾼다
$todos.onchange = toggleCompleted;

// 삭제
$todos.onclick = removeTodo;

// 바뀔때 마다 render를 해줘야 한다 --> 그닥 좋은 방법은 아니다

// 과제 : 추가, 변경, 삭제, 취소선(check 를 하면서 취소선이 들어가고 completed가 true가 되야한다)
