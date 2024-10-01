import taskManager from "./stateManager.js";

const renderTask = () => {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = " ";

  const tasks = taskManager.getTasks();

  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.textContent = task.todo;
    li.classList.add("li");
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.classList.add("remove-btn");
    removeBtn.addEventListener("click", () => {
      taskManager.removeTask(index);
      renderTask();
    });

    li.appendChild(removeBtn);
    taskList.appendChild(li);
  });
};

const taskForm = document.getElementById("taskForm");
taskForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const taskInput = document.getElementById("taskInput");
  const newTask = taskInput.value;

  if (newTask) {
    taskManager.addTask({ todo: newTask });
    renderTask();
    taskInput.value = "";
  }

  renderTask();
});

export default renderTask;
