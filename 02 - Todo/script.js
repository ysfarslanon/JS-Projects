// elements
let todoTitle = document.querySelector("#todo-title");
let todoDetail = document.querySelector("#todo-detail");
let todoList = document.querySelector("#todo-list");
let form = document.querySelector("form");
let btnAdd = document.querySelector("#btn-add");
let btnRemoveAllTodo = document.querySelector("#btn-remove-all");
let inputInfo = document.querySelector("#inputInfo")
// variables
let todos = JSON.parse(localStorage.getItem("todos"))
  ? JSON.parse(localStorage.getItem("todos"))
  : [];
// events
btnAdd.addEventListener("click", todoAdd);
btnRemoveAllTodo.addEventListener("click", removeAllTodos);
// load function
loadTodosCard();
// functions
function todoAdd() {
  let id = todos.length + 1;
  let title = todoTitle.value;
  let detail = todoDetail.value;

  if (title && detail) {
    hideAlerts()
    todoList.innerHTML += createTodoCard(id, title, detail);
    todos.push({ id: id, title: title, detail: detail });
    localStorage.setItem("todos", JSON.stringify(todos));
    resetInput();
  }else{
    showAlerts()
  }
}

function createTodoCard(id, title, detail) {
  return `
    <div class="card shadow-lg mb-3" id="card-${id}">
                    <div class="card-header">
                        <h5 class="card-title" id="title-${id}">${title}</h5>
                    </div>
                    <div class="card-body">
                        <p class="card-text" id="detail-${id}">${detail}</p>
                    </div>
                    <div class="card-footer text-center">
                        <button class="btn btn-outline-warning me-lg-4 mb-2 mb-lg-0" id=btn-done-${id} onclick="doneTodo(${id})">Done</button>
                        <button class="btn btn-outline-danger ms-lg-4" id=btn-remove-${id} onclick="removeTodo(${id})">Remove</button>
                    </div>
                </div>
    `
}

function resetInput() {
  todoTitle.value = "";
  todoDetail.value = "";
}

function loadTodosCard() {
  todos.forEach((item) => {
    todoList.innerHTML += createTodoCard(item.id, item.title, item.detail);
  });
}

function removeAllTodos() {
  localStorage.clear();
  while (todos.length > 0) {
    todos.pop();
  }
  todoList.innerHTML = "";
}

function doneTodo(ID) {
  let title = document.querySelector(`#title-${ID}`)
  let detail = document.querySelector(`#detail-${ID}`)
  if (title.classList.contains("completedTodo")) {
    title.classList.remove("completedTodo", "text-success")
    detail.classList.remove("completedTodo", "text-success")
  } else {
    title.classList.add("completedTodo", "text-success")
    detail.classList.add("completedTodo", "text-success")
  }
}

function removeTodo(ID) {
  let card = document.querySelector(`#card-${ID}`);
  card.remove();
  deleteByID();
  localStorage.setItem("todos", JSON.stringify(todos));
}

function deleteByID(ID) {
  for (let i = 0; i < todos.length; i++) {
    if (todos[i].id == ID) {
      todos.splice(i, 1);
    }
  }
}

function showAlerts(){
  todoTitle.classList.add("alertInput")
  todoDetail.classList.add("alertInput")
  inputInfo.classList.remove("d-none")
  inputInfo.classList.add("d-block")
}

function hideAlerts(){
  todoTitle.classList.remove("alertInput")
  todoDetail.classList.remove("alertInput")
  inputInfo.classList.remove("d-block")
  inputInfo.classList.add("d-none")
}