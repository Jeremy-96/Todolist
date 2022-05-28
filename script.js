/**
 * Get element from the HTML file
 */
const todo = document.getElementById("todo");
const button = document.getElementById("newtask--button");


/**
 * Listen events
 */
button.addEventListener("click", addTask);


/**
 * addTask()
 * taskList = Create a new element in todo list,
 * input = Value of text enter by user,
 * text = Use the value of input,
 * Then, we add value of text in the taskList
 */
function addTask(event) {
  event.preventDefault();
  const taskList = document.createElement("li");
  taskList.classList.add("todo__task")
  const del = document.createElement("button");
  del.classList.add("delete__task");
  const input = document.getElementById("newtask--input").value;
  const text = document.createTextNode(input);
  taskList.appendChild(text) + taskList.appendChild(del);
  todo.appendChild(taskList);
}


