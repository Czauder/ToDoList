const btnForm = document.querySelector('.todo-form');
const input = document.querySelector('.todo-form-message');
const toDoList = document.querySelector('.todo-list');

// check value 
const addTask = (e) => {
    e.preventDefault();
    const titleTask = input.value;
    if (titleTask === "") return;

    console.log(titleTask)

    // add whole puzzle 
    //  todo-items
    const toDo = document.createElement('div');
    toDo.classList.add('todo-element')

    // bar up
    const toDoBar = document.createElement('div');
    toDoBar.classList.add('todo-element-bar');

    // data bar
    const toDoDate = document.createElement('div');
    toDoDate.classList.add('todo-element-bar');
    const date = new Date();
    const dateText = date.getDate() + '-' + (date.getMonth() + 1) + '-' + date.getFullYear() + ' godz.: ' + date.getHours() + ':' + date.getMinutes();
    toDoDate.innerText = dateText;

    // add remove button
    const toDoDelete = document.createElement('button');
    toDoDelete.classList.add('todo-element-delete');
    toDoDelete.classList.add('button');
    toDoDelete.innerHTML = '<i class="fas fa-trash-alt"></i>';

    // move item to bar 
    toDoBar.appendChild(toDoDate);
    toDoBar.appendChild(toDoDelete)

    // item + txt 
    const toDoText = document.createElement('div');
    toDoText.classList.add('todo-element-text');
    toDoText.innerText = titleTask;

    //connetced all
    toDo.appendChild(toDoBar);
    toDo.appendChild(toDoText);

    //move to the list
    toDoList.append(toDo);

    input.value = "";
}


btnForm.addEventListener('submit', addTask)


// delete task 
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