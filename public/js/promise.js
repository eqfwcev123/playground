let todos = [];
// DOMs
const $todos = document.querySelector(".todos");
const $input = document.querySelector(".input-todo");
const render = data => {
  // todos = data;
  // console.log("[render]", todos);
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
const ajax = (() => {
  const req = (method, url, payload) => {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open(method, url);
      xhr.setRequestHeader("content-type", "application/json");
      xhr.send(JSON.stringify(payload));
      xhr.onreadystatechange = () => {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;
        if (xhr.status === 200) {
          resolve(JSON.parse(xhr.response));
        } else {
          reject(new Error(xhr.status));
        }
      };
    });
  };
  return {
    get(url) {
      return req("GET", url);
    },
    post(url, payload) {
      return req("POST", url, payload);
    },
    patch(url, payload) {
      return req("PATCH", url, payload);
    },
    delete(url) {
      return req("DELETE", url);
    }
  };
})();

// GET
const getTodos = () => {
  ajax
    .get("/todos")
    .then(res => (todos = res))
    .then(render)
    .catch(err => console.log(err));
};
window.onload = getTodos;

// POST
const generateId = () => {
  return todos.length ? Math.max(...todos.map(todo => todo.id)) + 1 : 1;
};

$input.onkeyup = ({ target, keyCode }) => {
  const content = target.value.trim();
  if (!content || keyCode !== 13) return;
  target.value = "";
  ajax
    .post("/todos", { id: generateId(), content, completed: false })
    .then(res => (todos = res))
    .then(render)
    .catch(err => console.log(err));
};

// PATCH
$todos.onchange = ({ target }) => {
  const id = target.parentNode.id;
  const completed = !todos.find(todo => todo.id === +id).completed;
  ajax
    .patch(`/todos/${id}`, { completed })
    .then(res => (todos = res))
    .then(render)
    .catch(err => console.log(err));
};

// DELETE
$todos.onclick = ({ target }) => {
  if (!target.classList.contains("remove-todo")) return;
  const id = target.parentNode.id;
  ajax
    .delete(`/todos/${id}`)
    .then(res => (todos = res))
    .then(render)
    .catch(err => console.log(err));
};
