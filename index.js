const todoInput  = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList   = document.querySelector('.todo-list');


todoButton.addEventListener('click',addToDo);
todoList.addEventListener('click',checkDelete);

function addToDo(event){
event.preventDefault();

//ToDo Div create
const todoDiv = document.createElement("div");
todoDiv.classList.add("todo");
//Create LI (List element)
const newTodo = document.createElement("li");
newTodo.innerText = todoInput.value;
newTodo.classList.add("todo-item");
//List item'ı olusturdugun div'in içine at
todoDiv.appendChild(newTodo);

//Checked Mark button
const completedButton = document.createElement("button");
completedButton.innerHTML = '<i class="fas fa-check"></i>';
completedButton.classList.add("complete-btn");
todoDiv.appendChild(completedButton);

//Trash Mark button
const trashButton = document.createElement("button");
trashButton.innerHTML = '<i class="fas fa-trash"></i>';
trashButton.classList.add("trash-btn");
todoDiv.appendChild(trashButton);

// APPEND TO LIST
todoList.appendChild(todoDiv);
// Clear todo INPUT VALUE
todoInput.value = "";

}


function checkDelete(e){
   const item = e.target;
//REMOVE TODO TASK
   if(item.classList[0]=== 'trash-btn'){
    const delTodo= item.parentElement;
    delTodo.remove();
   }

//CHECK
if(item.classList[0]=== 'complete-btn'){
const todo = item.parentElement;
todo.classList.toggle("completed");
}

}