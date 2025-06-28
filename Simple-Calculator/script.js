const input = document.querySelector("#display");
const maindiv = document.querySelector("#main-body");
maindiv.addEventListener("click", (event) => {
  if (event.target.innerHTML == "=") {
    input.value = eval(input.value);
  } else {
    addvalue(event.target.innerHTML);
  }
});
function addvalue(char) {
  input.value = input.value + char;
}
