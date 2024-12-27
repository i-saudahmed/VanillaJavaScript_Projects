const tasks = document.querySelector("#tasks");
const newTaskOfInput = document.querySelector("#newtask input");
document.querySelector("#push").onclick = function () {
  if (newTaskOfInput.value.length == 0) {
    alert("please enter a task");
  } else {
    tasks.innerHTML += `<div class="task">
        <span id="taskname">${newTaskOfInput.value}</span>
        <button class="delete"> 
            <i class="fa-solid fa-trash-can"></i>
        </button>
        </div>`;
    newTaskOfInput.value = "";
    var currentTask = document.querySelectorAll(".delete");

    currentTask.forEach((curElem) => {
      curElem.onclick = function () {
        this.parentNode.remove();
      };
    });

    const taskSelect = document.querySelectorAll(".task");

    taskSelect.forEach((curElem) => {
      curElem.onclick = function () {
        this.classList.toggle("completed");
      };
    });
  }
};
