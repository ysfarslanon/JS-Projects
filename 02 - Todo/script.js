// elements
let todoTitle = document.querySelector('#todo-title')
let todoDetail = document.querySelector('#todo-detail')
let todoList = document.querySelector('#todo-list')
let form = document.querySelector('form')
let btnAdd = document.querySelector('#btn-add')
let btnRemoveAllTodo = document.querySelector("#btn-remove-all")
// variables
let todos = JSON.parse(localStorage.getItem("todos")) ? JSON.parse(localStorage.getItem("todos")) : []
// events
btnAdd.addEventListener('click',todoAdd)
btnRemoveAllTodo.addEventListener('click',removeAllTodos)
// load function
loadTodosCard()
// functions
function todoAdd(){
    let title = todoTitle.value
    let detail = todoDetail.value
    let id = todos.length + 1

        if(title && detail){
        todoList.innerHTML += createTodoCard(id,title, detail)
        todos.push({id:id, title:title, detail:detail})
        localStorage.setItem("todos",JSON.stringify(todos))
        resetInput()
    }
  
}

function createTodoCard(id,title,detail) {
    return `
    <div class="card shadow-lg mb-3" id="card${id}">
                    <div class="card-header">
                        <h5 class="card-title">${title}</h5>
                    </div>
                    <div class="card-body">
                        <p class="card-text">${detail}</p>
                    </div>
                    <div class="card-footer text-center">
                        <button class="btn btn-outline-warning me-lg-4 mb-2 mb-lg-0">Done</button>
                        <button class="btn btn-outline-danger ms-lg-4">Remove</button>
                    </div>
                </div>
    `
}

function resetInput(){
    todoTitle.value = ""
    todoDetail.value = ""
}

function loadTodosCard(){
    for (let i = 0; i < todos.length; i++) {
        todoList.innerHTML += createTodoCard(todos[i].title, todos[i].detail)
    }
}

function removeAllTodos(){
    localStorage.clear()
    while(todos.length > 0){
        todos.pop()
    }
    todoList.innerHTML = ""
}