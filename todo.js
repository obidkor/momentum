const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const toDos_local = "toDos"

let toDos = [];

function filterFunc(toDo){
    return toDo.id ===1
}

function delTodos(event){
    const btn =event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter(function(toDo){
        return toDo.id !== parseInt(li.id);
    });
    toDos = cleanToDos;
    saveToDos();
}

function saveToDos(){
    localStorage.setItem(toDos_local,JSON.stringify(toDos))
}

function printToDo(text){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length+1;
    delBtn.innerHTML="❌";
    delBtn.classList.add("btn")
    delBtn.addEventListener("click",delTodos)
    span.innerText = text;
    li.appendChild(delBtn);
    li.appendChild(span);
    li.id = newId;
    li.classList.add("toDo")
    toDoList.appendChild(li);

    const toDoObj = {
        text : text,
        id: newId
    }
    toDos.push(toDoObj);
    saveToDos();
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    printToDo(currentValue);
    toDoInput.value="";
}

function loadToDos(){
    const loadedToDos = localStorage.getItem(toDos_local);
    if(loadedToDos !== null){
        const pasredToDos = JSON.parse(loadedToDos);
        pasredToDos.forEach(function(toDo){
            printToDo(toDo.text);
        })
    }
}

function init(){
    loadToDos();
    toDoForm.addEventListener("submit",handleSubmit)
}

init();