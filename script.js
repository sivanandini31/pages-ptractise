// Function to add a new task
function addTask() {
    const taskInput = document.getElementById("taskInput");
    const categoryInput = document.getElementById("categoryInput");
    const taskText = taskInput.value.trim();
    const category = categoryInput.value;

    if (taskText !== "") {
        const taskList = document.getElementById("taskList");

        // Create a new list item
        const li = document.createElement("li");
        li.classList.add(category); // Add category as class to style the task
        
        li.innerHTML = `
            <span>${taskText}</span>
            <button class="delete-btn" onclick="deleteTask(this)">Delete</button>
        `;
        
        taskList.appendChild(li);

        // Clear input fields after adding
        taskInput.value = "";
        categoryInput.value = "work";
    }
}

// Function to delete a task
function deleteTask(button) {
    button.parentElement.remove();
}

// Function to filter tasks based on selected category
function filterTasks() {
    const filterValue = document.getElementById("filterCategory").value;
    const tasks = document.querySelectorAll("li");

    tasks.forEach(task => {
        if (filterValue === "all" || task.classList.contains(filterValue)) {
            task.style.display = "flex"; // Show task
        } else {
            task.style.display = "none"; // Hide task
        }
    });
}
