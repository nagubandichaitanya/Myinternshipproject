document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('todo-form');
    const taskInput = document.getElementById('task-input');
    const todoList = document.getElementById('todo-list');

    loadTasks();

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const task = taskInput.value.trim();
        if (task) {
            addTask(task);
            taskInput.value = '';
        }
    });

    function addTask(task) {
        const li = document.createElement('li');
        li.textContent = task;

        // Create an edit button
        const editBtn = document.createElement('button');
        editBtn.className = 'edit-btn';
        editBtn.textContent = 'Edit';
        editBtn.addEventListener('click', () => {
            li.classList.toggle('editing');
            const editingInput = li.querySelector('.editing-input');
            const editingText = li.querySelector('.editing-text');
            if (editingInput) {
                editingText.value = editingInput.value;
                editingInput.remove();
                editingText.classList.add('editing-text');
            } else {
                editingInput.value = editingText.textContent;
                editingText.remove();
                li.appendChild(editingInput);
                editingInput.classList.add('editing-input');
            }
        });

        // Create a delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-btn';
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', () => {
            li.remove();
            saveTasks();
        });

        li.appendChild(editBtn);
        li.appendChild(deleteBtn);
        todoList.appendChild(li);
        saveTasks();
    }

    function loadTasks() {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.forEach(addTask);
    }

    function saveTasks() {
        const tasks = Array.from(todoList.children).map(li => li.textContent);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
});