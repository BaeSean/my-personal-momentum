const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");

let todos = [];

const STORAGE_KEY = "todos";

getTodos();
todoForm.addEventListener("submit", addTodo);


function paintList(todo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");

    li.id = todo.id;
    button.innerText = "X";
    button.addEventListener("click", deleteTodo);
    span.innerText = todo.text;

    li.appendChild(span);
    li.appendChild(button);
    todoList.append(li);
}

function addTodo(event) {
    event.preventDefault();

    const newTodo = todoInput.value;
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    };

    todoInput.value = ""
    paintList(newTodoObj);

    todos.push(newTodoObj);
    setTodos();
}

function deleteTodo(event) {
    const li = event.target.parentElement;

    li.remove();
    todos = todos.filter(element => {
        return element.id.toString() !== li.id
    });
    setTodos();
}

function setTodos() {
    localStorage.setItem("todos", JSON.stringify(todos));
}

function getTodos() {
    const savedTodos = localStorage.getItem(STORAGE_KEY);

    if (savedTodos != null) {
        const parsedTodos = JSON.parse(savedTodos);
        parsedTodos.forEach(element => {
            todos = parsedTodos;
            paintList(element);
        });
    }
}

