const calcbutn = document.querySelector("#calculate-button");
const splitbutton = document.querySelector("#split-button");
const persons = document.querySelector("#input-person");
const tipval = document.querySelector("#select-tip");
let tip = document.querySelector(".tipvalue");
const bill = document.querySelector("#input-bill");
calcbutn.addEventListener("click", () => {
  let tip_value = (bill.value * tipval.value).toFixed(2);
  tip.innerHTML = `Your Tip Money is ${tip_value}`;
});
splitbutton.addEventListener("click", () => {
  let split_value = (bill.value / persons.value).toFixed(2);
  tip.innerHTML = `Divided bill is ${split_value} per head`;
});
