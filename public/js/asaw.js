let todos = [];
// async/await의 특징
// DOMs
const $todos = document.querySelector(".todos");
const $input = document.querySelector(".input-todo");
const render = data => {
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

//GET
const getTodos = async () => {
  try {
    const res = await axios.get("/todos");
    todos = res.data;
    render();
    //await.fetch('/todo')
    // .then(res => res.json())
    // .then(res => todos = res)
    // .then(render)
  } catch (e) {
    console.error(e);
  }
};

const generateId = () => {
  return todos.length ? Math.max(...todos.map(todo => todo.id)) + 1 : 1;
};
window.onload = getTodos;

// POST
$input.onkeyup = async ({ target, keyCode }) => {
  const content = target.value.trim();
  if (!content || keyCode !== 13) return;
  target.value = "";
  // ajax.post("/todos", { id: generateId(), content, completed: false }, render);
  try {
    const res = await axios.post("/todos", {
      id: generateId(),
      content,
      completed: false
    });
    todos = res.data;
    render();
  } catch (e) {
    console.error(e);
  }
};
$todos.onchange = async ({ target }) => {
  const id = target.parentNode.id;
  const completed = !todos.find(todo => todo.id === +id).completed;
  // ajax.patch(`/todos/${id}`, { completed }, render);
  try {
    const res = await axios.patch(`/todos/${id}`, { completed });
    todos = res.data;
    render();
  } catch (e) {
    console.error(e);
  }
};
$todos.onclick = async ({ target }) => {
  if (!target.classList.contains("remove-todo")) return;
  const id = target.parentNode.id;
  // ajax.delete(`/todos/${id}`, render);
  try {
    const res = await axios.delete(`/todos/${id}`);
    todos = res.data;
    render();
  } catch (e) {
    console.error(e);
  }
};
