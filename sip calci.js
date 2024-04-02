const value = document.querySelector("#monthlyinvestmentbox");
const input = document.querySelector("#monthlyinvestment");
value.value= input.value;
input.addEventListener("input", (event) => {
  value.value = event.target.value;
});
const value2 = document.querySelector("#returnratebox");
const input2 = document.querySelector("#returnrate");
value2.value= input2.value;
input2.addEventListener("input", (event) => {
  value2.value = event.target.value;
});
const value3 = document.querySelector("#timeperiodbox");
const input3 = document.querySelector("#timeperiod");
value3.value= input3.value;
input3.addEventListener("input", (event) => {
  value3.value = event.target.value;
});