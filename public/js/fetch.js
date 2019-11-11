let todos = [];
// DOMs
const $todos = document.querySelector(".todos");
const $input = document.querySelector(".input-todo");
const render = data => {
  todos = data;
  console.log("[render]", todos);
  let html = "";
  todos.forEach(({ id, content, completed }) => {
    html += `
      <li id="${id}" class="todo-item">
        <input class="checkbox" type="checkbox" id="ck-${id}" ${
      completed ? "checked" : ""
    }>
        <label for="ck-${id}">${content}</label>
        <button class="remove-todo">X</button>
      </li>`;
  });
  $todos.innerHTML = html;
};

// fetch 는 무조건 res.json() 로 해줘야 한다
const getTodos = () => {
  fetch("/todos") // promise 역할
    .then(res => res.json())
    .then(res => (todos = res))
    .then(render)
    .catch(err => console.log(err));
};
const generateId = () => {
  return todos.length ? Math.max(...todos.map(todo => todo.id)) + 1 : 1;
};
window.onload = getTodos;
$input.onkeyup = ({ target, keyCode }) => {
  const content = target.value.trim();
  if (!content || keyCode !== 13) return;
  target.value = "";
  // ajax.post("/todos", { id: generateId(), content, completed: false }, render);
  fetch("/todos", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ id: generateId(), content, completed: false })
  })
    .then(res => res.json())
    .then(res => (todos = res))
    .then(render)
    .catch(err => console.log(err));
};
$todos.onchange = ({ target }) => {
  const id = target.parentNode.id;
  const completed = !todos.find(todo => todo.id === +id).completed;
  // ajax.patch(`/todos/${id}`, { completed }, render);
  fetch(`/todos/${id}`, {
    method: "PATCH",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ completed })
  })
    .then(res => res.json())
    .then(res => (todos = res))
    .then(render)
    .catch(err => console.log(err));
};
$todos.onclick = ({ target }) => {
  if (!target.classList.contains("remove-todo")) return;
  const id = target.parentNode.id;
  // ajax.delete(`/todos/${id}`, render);
  fetch(`/todos/${id}`, {
    method: "DELETE",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ completed })
  })
    .then(res => res.json())
    .then(res => (todos = res))
    .then(render)
    .catch(err => console.log(err));
};
