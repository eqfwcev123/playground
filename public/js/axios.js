let todos = [];
//axios 도 fetch 와 비슷.
//axios 는 두번째 인자로 payload만 넣어주면된다.
// DOMs
const $todos = document.querySelector(".todos");
const $input = document.querySelector(".input-todo");
const render = () => {
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

const getTodos = () => {
  // ajax.get("/todos", render);
  axios
    .get("/todos")
    .then(res => (todos = res.data))
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
  axios
    .post("/todos", { id: generateId(), content, completed: false })
    .then(res => (todos = res.data))
    .then(render)
    .catch(err => console.log(err));
};
$todos.onchange = ({ target }) => {
  const id = target.parentNode.id;
  const completed = !todos.find(todo => todo.id === +id).completed;
  // ajax.patch(`/todos/${id}`, { completed }, render);
  axios
    .patch(`/todos/${id}`, { completed })
    .then(res => (todos = res.data))
    .then(render)
    .catch(err => console.log(err));
};
$todos.onclick = ({ target }) => {
  if (!target.classList.contains("remove-todo")) return;
  const id = target.parentNode.id;
  // ajax.delete(`/todos/${id}`, render);
  axios
    .delete(`/todos/${id}`)
    .then(res => (todos = res.data))
    .then(render)
    .catch(err => console.log(err));
};
