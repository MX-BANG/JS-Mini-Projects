const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

// Add task on button click
addTaskBtn.addEventListener("click", function () {
  const taskText = taskInput.value.trim();

  if (taskText !== "") {
    addTaskToList(taskText);
    taskInput.value = ""; // Clear input
  } else {
    alert("Please write something like a journal entry 📓");
  }
});

function addTaskToList(taskText) {
  const li = document.createElement("li");
  li.textContent = taskText;

  // Add delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "✖";
  deleteBtn.style.marginLeft = "15px";
  deleteBtn.style.background = "transparent";
  deleteBtn.style.border = "none";
  deleteBtn.style.color = "#b08f6a";
  deleteBtn.style.fontSize = "16px";
  deleteBtn.style.cursor = "pointer";

  deleteBtn.addEventListener("click", function () {
    taskList.removeChild(li);
  });

  li.appendChild(deleteBtn);
  taskList.appendChild(li);
}
