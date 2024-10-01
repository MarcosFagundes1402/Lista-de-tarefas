let list = document.querySelector('.list');
let input = document.querySelector('.input');

let tasks = [
];

input.addEventListener('keyup', (event) => {
    if (event.key.toLowerCase() === 'enter' && input.value != '') {
        tasks.push({
            done: false,
            title: input.value
        });
        input.value = '';
        renderList();
    }
})

function renderList() {
    list.innerHTML = '';
    for (let i in tasks) {
        let taskLI = document.createElement('li');

        let taskInput = document.createElement('input');
        taskInput.setAttribute('type', 'checkbox');
        if (tasks[i].done === true) {
            taskInput.setAttribute('checked', 'true');
            taskLI.classList.add('done');
        }
        taskInput.addEventListener('click', () => {
            tasks[i].done = !tasks[i].done;
            renderList();
        })

        taskLI.appendChild(taskInput);

        let taskSpan = document.createElement('span');
        taskSpan.innerHTML = tasks[i].title;
        taskLI.appendChild(taskSpan);

        list.appendChild(taskLI);
    }
}
