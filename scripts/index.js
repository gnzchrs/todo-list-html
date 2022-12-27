// Get references to the form and task list

const form = document.querySelector("form");
const taskList = document.querySelector("#task-list");

// Add a new task to the list when the form is submitted
document.querySelector("#task").focus();
form.addEventListener("submit", (e) => {
  e.preventDefault(); // prevent the form from reloading the page
  document.querySelector("#task").focus();

  // Get the task text from the input field
  const task = document.querySelector("#task").value;

  // Create a new list item for the task
  const div = document.createElement("div");
  div.className =
    "card d-flex mt-1 flex-row justify-content-between align-items-center p-3 border border-3 card-con";
  div.style.width = "100%";

  // Create a delete button for the task
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.className = "btn btn-danger";
  deleteButton.addEventListener("click", (e) => {
    taskList.removeChild(div);
  });

  // Add the task text and delete button to the list item
  div.appendChild(document.createTextNode(task));
  div.appendChild(deleteButton);
  // Add the new list item to the task list
  taskList.appendChild(div);

  // Clear the input field
  document.querySelector("#task").value = "";
});
