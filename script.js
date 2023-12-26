document.addEventListener('DOMContentLoaded', function () {
    const taskForm = document.getElementById('taskForm');
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    taskForm.addEventListener('submit', function (event) {
        event.preventDefault();

        if (taskInput.value.trim() !== '') {
            addTask(taskInput.value.trim());
            taskInput.value = '';
        }
    });

    taskList.addEventListener('click', function (event) {
        const taskItem = event.target.closest('.list-group-item');

        if (taskItem) {
            if (event.target.classList.contains('delete-btn')) {
                removeTask(taskItem);
            } else if (event.target.classList.contains('edit-btn')) {
                editTask(taskItem);
            }
        }
    });

    function addTask(taskText) {
        const li = document.createElement('li');
        li.classList.add('list-group-item');
        li.innerHTML = `
            <span>${taskText}</span>
            <div>
                <button class="btn btn-warning edit-btn">Edit</button>
                <button class="btn btn-danger delete-btn">Delete</button>
            </div>
        `;
        taskList.appendChild(li);
    }

    function removeTask(taskItem) {
        taskItem.remove();
    }

    function editTask(taskItem) {
        const span = taskItem.querySelector('span');
        const newText = prompt('Edit task:', span.textContent);

        if (newText !== null) {
            span.textContent = newText;
        }
    }
});
