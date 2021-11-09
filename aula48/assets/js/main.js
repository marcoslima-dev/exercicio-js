const inputTask = document.querySelector('.input-task')
const inputBtn = document.querySelector('.btn-task')
const tasks = document.querySelector('.tasks')

function createLi() {
    const li = document.createElement ('li')
    return li
}

inputTask.addEventListener('keypress', function (e){ 
    if (e.keyCode === 13) {
        if (!inputTask.value) return;
    createTask(inputTask.value);
    }
});

function clearInput() {
    inputTask.value = '';
    inputTask.focus();
}

function createDeleteBtn(li) {
    li.innerText += ' ';
    const deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'Apagar';
    deleteBtn.setAttribute('class', 'delete');
    deleteBtn.setAttribute('title','Apagar tarefa')
    li.appendChild(deleteBtn)
}


function createTask(textInput) {
    const li = createLi();
    li.innerText = textInput;
    tasks.appendChild(li);
    clearInput()
    createDeleteBtn(li)
    saveTask()
}

inputBtn.addEventListener('click', function () {
    if (!inputTask.value) return;
    createTask(inputTask.value);
})

document.addEventListener('click', function (e) {
    const el = e.target;
    if(el.classList.contains('delete')) {
        el.parentElement.remove();
        saveTask()
    }
})

function saveTask() {
    const liTask = tasks.querySelectorAll('li');
    const listOfTasks = [];

    for (let task of liTask) {
        let textTask = task.innerText;
        textTask = textTask.replace('Apagar', ' ').trim();
        listOfTasks.push(textTask);
    }
    const tasksJSON = JSON.stringify(listOfTasks);
    localStorage.setItem('tasks', tasksJSON);
}

function addSavedTasks() {
    const tasks = localStorage.getItem('tasks');
    const listOfTasks = JSON.parse(tasks)
    
    for (let task of listOfTasks) {
        createTask(task)
    }
}
addSavedTasks()