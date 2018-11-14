const btnForm = document.querySelector('.todo-form');
const input = document.querySelector('.todo-form-message');
const toDoList = document.querySelector('.todo-list');


const addTask = (e) => {
    e.preventDefault();
    const titleTask = input.value;
    if (titleTask === "") return;

    console.log(titleTask)


    const toDo = document.createElement('div');
    toDo.classList.add('todo-element')


    const toDoBar = document.createElement('div');
    toDoBar.classList.add('todo-element-bar');


    const toDoDate = document.createElement('div');
    toDoDate.classList.add('todo-element-bar');
    const date = new Date();
    const dateText = date.getDate() + '-' + (date.getMonth() + 1) + '-' + date.getFullYear() + '  ' + date.getHours() + ':' + date.getMinutes();
    toDoDate.innerText = dateText;


    const toDoDelete = document.createElement('button');
    toDoDelete.classList.add('todo-element-delete');
    toDoDelete.classList.add('button');
    toDoDelete.innerHTML = '<i class="fas fa-trash-alt"></i>';


    toDoBar.appendChild(toDoDate);
    toDoBar.appendChild(toDoDelete)


    const toDoText = document.createElement('div');
    toDoText.classList.add('todo-element-text');
    toDoText.innerText = titleTask;


    toDo.appendChild(toDoBar);
    toDo.appendChild(toDoText);


    toDoList.append(toDo);

    input.value = "";
}


btnForm.addEventListener('submit', addTask)


// remove task 
toDoList.addEventListener('click', function (e) {
    if (e.target.closest('.todo-element-delete') !== null) {
        const todoElem = e.target.closest('.todo-element');
        todoElem.parentNode.removeChild(todoElem);
    }
});

// search
todoSearch.addEventListener('input', function () {
    const value = this.value;
    const items = toDoList.querySelectorAll('.todo-element');


    [].forEach.call(items, function (item) {
        const text = item.querySelector('.todo-element-text').innerText;

        if (text.indexOf(value) !== -1) {
            item.style.setProperty('display', "");
        } else {
            item.style.setProperty('display', 'none');
        }
    });

});


// addTask enter
const textarea = document.getElementById("todoMessage");

const enter = (e) => {
    if (e.keyCode === 13) {
        addTask(e)
    } else return
    console.log(e.keyCode)
}

textarea.addEventListener('keydown', enter)