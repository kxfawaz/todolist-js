
const todoForm = document.getElementById("newTodoForm");
const todoList = document.getElementById("todoList");

//first step is to retrieve any data from localStorage when the pageLoads

const savedTodos = JSON.parse(localStorage.getItem("todos")) || [] //if localstorage.getitem returns null we want to ensure savedTodos is initialized as an empty array preventing erros.
for (let i=0; i<savedTodos.length;i++){
    let newTodo = document.createElement("li");
    newTodo.innerText = savedTodos[i].task;
    newTodo.isCompleted = savedTodos[i].isComplete ? true : false; // if savedTodo[i].isCompleted is true, then newTodo.isCompleted = true, else it is false
    if(newTodo.isCompleted){
        newTodo.style.textDecoration = "line-through";
    }
    const removeButton = document.createElement('button');
    removeButton.innerText = "X";
    newTodo.appendChild(removeButton);
   todoList.appendChild(newTodo);
}

todoForm.addEventListener("submit",function(e){
    e.preventDefault();
    //creating a new todo item
   let newTodo = document.createElement('li');
   let taskValue = document.getElementById("task").value
   newTodo.innerText = taskValue;
   newTodo.isCompleted = false;

   //adding removing button

   let removeButton = document.createElement('button');
   removeButton.innerText = "X";
   newTodo.appendChild(removeButton);
   todoList.appendChild(newTodo);
    

// Saving the new todo to LocalStorage
 savedTodos.push({task: newTodo.innerText, isCompleted: false});
 localStorage.setItem("todos", JSON.stringify(savedTodos));


})

todoList.addEventListener('click',function(e){
     let clickedItem = e.target;

     if(clickedItem.tagName.toLowerCase() === "li"){
        clickedItem.style.textDecoration = "line-through";
        clickedItem.isCompleted = true;
    
     } else if(clickedItem.tagName.toLowerCase() === 'button'){
        clickedItem.style.textDecoration = "none";
        clickedItem.parentNode.remove();
        clickedItem.isCompleted = false;
     }
     
     for (let i = 0; i < savedTodos.length; i++) {
        if (savedTodos[i].task === clickedItem.innerText) {
          savedTodos[i].isCompleted = !savedTodos[i].isCompleted;
          localStorage.setItem("todos", JSON.stringify(savedTodos));
        }
      }
})

