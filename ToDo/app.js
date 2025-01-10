
const taskInputText = document.querySelector("#task-input");
const subBtn = document.querySelector("#submit-task");
let tasks = document.querySelector(".tasks");
let msg = document.querySelector("h3");
let Donetask=document.querySelector(".Done-Task")
let tasklist = [];
subBtn.addEventListener("click", () => {
  let inputText = taskInputText.value;
  if (inputText == "") {
    msg.innerHTML = "Enter a Proper Task";
  } else if (tasklist.includes(inputText) == true) {
    msg.innerHTML = "Task already Exists";
  } else {
    msg.innerHTML = "Task Created";
    tasklist.push(inputText);
    let taskDiv = document.createElement("div");
    taskDiv.classList.add("task-div");
    let taskText = document.createElement("p");
    taskText.innerHTML = inputText;
    let taskDone = document.createElement("button");
    taskDone.classList.add("doneBtn");
    taskDone.innerText = "Done";
    let taskDelete = document.createElement("button");
    taskDelete.classList.add("deleteBtn");
    taskDelete.innerText = "Delete";
    taskDiv.appendChild(taskText);
    taskDiv.appendChild(taskDone);
    taskDiv.appendChild(taskDelete);
    tasks.appendChild(taskDiv);
    taskInputText.value = "";
  }
});
tasks.addEventListener("click", (event) => {
  if (event.target.classList.contains("deleteBtn")) {
    event.target.parentElement.remove();
    tasklist.pop(event.target.parentElement.querySelector("p").innerHTML);
  }
  if (event.target.classList.contains("doneBtn")) {
    event.target.parentElement.remove();
    tasklist.forEach((item)=>{
        let li =document.createElement("li");
        li.innerHTML=item;
        Donetask.appendChild(li);
    })
    tasklist.pop(event.target.parentElement.querySelector("p").innerHTML);
    }
});