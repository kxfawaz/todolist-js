const todoForm = document.getElementById("newTodoForm");
const todoList = document.getElementById("todoList");


todoForm.addEventListener('submit',function(e){
    e.preventDefault();

    let removebutton = document.createElement('button');
    removebutton.innerText= "X";

    let newTodo = document.createElement("li");
    newTodo.innerText = document.getElementById("task").value

    todoList.appendChild(newTodo);
    newTodo.appendChild(removebutton);
})

// newTodo.innertext , newTodo.innertext linethrough



todoList.addEventListener('click',function(e){
    const clickedItem = e.target.tagName.toLowerCase();
    if(clickedItem === "li"){
        e.target.style.textDecoration = 'line-through';
    }
    else if(clickedItem === 'button'){
        e.target.parentNode.remove();
    }
})