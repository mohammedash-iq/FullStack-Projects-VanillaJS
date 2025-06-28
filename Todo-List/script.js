let data = localStorage.getItem("tasks");
let taskarray = data ? JSON.parse(data) : [];
const taskname = document.querySelector("#task-name-input");
const taskdisc = document.querySelector("#task-disc-input");
const addbtn = document.querySelector("#add-task-btn");
const taskdiv = document.querySelector("#tasks");
const warning = document.querySelector("h3");
const loadtask = function () {
  taskarray.forEach((element) => {
    const maindiv = document.createElement("div");
    const subdiv = document.createElement("div");
    const task = document.createElement("h4");
    task.innerHTML = element.name;
    const disc = document.createElement("p");
    disc.innerHTML = element.disc;
    const deletebtn = document.createElement("button");
    deletebtn.innerHTML = "Delete";
    deletebtn.setAttribute("id", element.name);
    const donebtn = document.createElement("button");
    donebtn.setAttribute("id", element.name);
    donebtn.innerHTML = "Done";
    subdiv.appendChild(task);
    subdiv.appendChild(disc);
    maindiv.appendChild(subdiv);
    maindiv.appendChild(deletebtn);
    maindiv.appendChild(donebtn);
    taskdiv.appendChild(maindiv);
  });
};
loadtask();
addbtn.addEventListener("click", () => {
  let count = 0;
  taskarray.forEach((element) => {
    if (element.name == taskname.value) {
      count++;
      console.log(count);
    }
  });
  if (count == 0) {
    newtask = { name: taskname.value, disc: taskdisc.value };
    taskarray.push(newtask);
    localStorage.setItem("tasks", JSON.stringify(taskarray));
    taskdiv.innerHTML = "";
    loadtask();
  } else if (taskname.value == "") {
    warning.innerHTML = "Please Enter a Task !";
  } else {
    warning.innerHTML = "Task already Exists !";
  }
});
const deletebtn = document.querySelector("#tasks");

deletebtn.addEventListener("click", (event) => {
  if (event.target.innerHTML == "Done") {
    const index = taskarray.findIndex(
      (task) => task.name == event.target.getAttribute("id")
    );
    taskarray.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify(taskarray));
    tasks.removeChild(event.target.parentElement);
  } else {
    const index = taskarray.findIndex(
      (task) => task.name == event.target.getAttribute("id")
    );
    console.log(index);
    taskarray.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify(taskarray));
    tasks.removeChild(event.target.parentElement);
  }
});
