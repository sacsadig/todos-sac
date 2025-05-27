function addTask() {
  const input = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");
  if (input.value.trim()) {

  const li = document.createElement("li");
  li.className = "bg-grey-100 p-2 rounded mb-2";
  li.textContent = input.value.trim();
  taskList.appendChild(li);
  input.value = "";
}
}