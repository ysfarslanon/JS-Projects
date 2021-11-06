let todoTitle = document.querySelector('#todo-title')
let todoDetail = document.querySelector('#todo-detail')
let todoList = document.querySelector('#todo-list')
let form = document.querySelector('form')
let btnAdd = document.querySelector('#btn-add')
let todos=[
    {title:"abooo", detail:"ddddddddddd"},
    {title:"abosoo", detail:"ddddddddddd"}
]

window.localStorage.setItem("todos",JSON.stringify(todos))
btnAdd.addEventListener('click',todoAdd)
let item = JSON.parse(window.localStorage.getItem("todos"))
//localStorage.setItem("todos",JSON.stringify({title:"asdas",detail:"ddddd"}))
function todoAdd(){
    let title = todoTitle.value
    let detail = todoDetail.value
    if(title && detail){
        todoList.innerHTML += createTodoCard(title, detail)
        todos.push({title:todoTitle.value,detail:todoDetail.value})
        window.localStorage.setItem("todos",JSON.stringify(todos))
        resetInput()
    }
  
}

function createTodoCard(title,detail) {
    return `
    <div class="card shadow-lg mb-2">
        <div class="card-header">
            <h5 class="card-title">${title}</h5>
        </div>
        <div class="card-body">
            <p class="card-text">${detail}</p>
        </div>
    </div>
    `
}

function resetInput(){
    todoTitle.value = ""
    todoDetail.value = ""
}

function load() {
    let todos2 = JSON.parse(window.localStorage.getItem())
}