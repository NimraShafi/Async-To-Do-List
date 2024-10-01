import apifatch from "./api.js";
import renderTask from "./main.js";
const taskManager = (() => {
  const tasks = [];

  function addTask(task) {
    tasks.push(task);
  }
  const removeTask = (index) => {
    tasks.splice(index, 1);
  };

  function getTasks() {
    return tasks; 
  }

  return { addTask, getTasks, removeTask };
})();

async function initializeTask() {
  try {
    const todoData = await apifatch();

    if (todoData && todoData.todos) {
      todoData.todos.forEach((task) => {
        taskManager.addTask(task);
        renderTask();
      });
    } else {
      console.log("No tasks found or error fetching tasks");
    }

    // const allTasks = taskManager.getTasks();
    // console.log(allTasks);
  } catch (error) {
    console.error("Error fetching tasks:", error);
  }
}

initializeTask();

export default taskManager;
