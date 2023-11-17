let taskList = [
  {
    id: 0,
    title: "Organizar la habitación",
    date: "2023-11-17",
    check: true,
  },
  {
    id: 1,
    title: "Hacer las compras",
    date: "2023-11-17",
    check: false,
  },
];

// ============ Agregar Tareas ==========//

const form = document.getElementById("form");
const list = document.getElementById("list");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log(e);
  const titleTask = document.querySelector(".titleTask").value;
  const dateTask = document.querySelector(".dateTask").value;
  //   console.log(titleTask, dateTask);

  let obj = {
    id: taskList.length,
    title: titleTask,
    date: dateTask,
    check: true,
  };

  taskList.push(obj);
  //   console.log(taskList);

  list.innerHTML = "";

  taskList.forEach((task) => {
    const { id, title, date } = task;
    list.innerHTML += `
            <div class="contT">
                <h3 class="titleTask">${title}</h3>
                <input type="text" class="dateTask" value=${date}>
                <button onClick="deleteTaks(${id})" class="btnDelete">X</button>
            </div>
    `;
  });
});

// ============Eliminar==========//
function deleteTaks(id) {
  const resp = taskList.splice(id, 1);
  list.innerHTML = "";

  taskList.forEach((task) => {
    const { id, title, date } = task;
    list.innerHTML += `
            <div class="contT">
                <h3 class="titleTask">${title}</h3>
                <input type="text" class="dateTask" value=${date}>
                <button onClick="deleteTaks(${id})" class="btnDelete">X</button>
            </div>
    `;
  });
}

// ============Filtrar ==========//

window.addEventListener("DOMContentLoaded", () => {
  taskList.forEach((task) => {
    const { id, title, date } = task;
    list.innerHTML += `
            <div class="contT">
                <h3 class="titleTask">${title}</h3>
                <input type="text" class="dateTask" value=${date}>
                <button onClick="deleteTaks(${id})" class="btnDelete">X</button>
            </div>
    `;
  });
});

const btnOld = document.getElementById("btnOld");
const btnNew = document.getElementById("btnNew");

btnOld.addEventListener("click", function () {
  console.log("old");
  filterTask(false);
});
btnNew.addEventListener("click", function () {
  console.log("new");
  filterTask(true);
});

function filterTask(value) {
  const task = taskList.filter((ta) => ta.check === value);

  list.innerHTML = "";

  task.forEach((task) => {
    const { id, title, date } = task;
    list.innerHTML += `
            <div class="contT">
                <h3 class="titleTask">${title}</h3>
                <input type="text" class="dateTask" value=${date}>
                <button onClick="deleteTaks(${id})" class="btnDelete">X</button>
            </div>
    `;
  });
}
