document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.querySelector("form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    buildToDo(e.target.new_task_description.value);
    form.reset();
  });
});

function buildToDo(todo) {
  let li = document.createElement("li");
  li.textContent = `${todo} `;
  let btn = document.createElement("button");
  btn.addEventListener("click", handleDelete);
  btn.textContent = "X";
  li.appendChild(btn);

  document.querySelector("#tasks").appendChild(li);
}

function handleDelete(e) {
  e.target.parentNode.remove();
}
