/** @format */

const inputBox = document.getElementById("input");
const increment = document.getElementById("plus");
const decrement = document.getElementById("minus");
const spanText = document.getElementById("spanText");
decrement.innerHTML;
let DefaultInputValue = 1;
let limitValue = 5;
increment.addEventListener("click", (e) => {
  DefaultInputValue++;
   
  if (inputBox.value < limitValue) {
    const initialValue=inputBox.value = DefaultInputValue;
      if (initialValue == limitValue) {
        spanText.innerHTML = `Not Available more than ${limitValue}`
    }
    }
    
});
decrement.addEventListener("click", (e) =>{
  if  (inputBox.value > 1) {
  inputBox.value--;
  }
});
console.log("Everthing is fine");
