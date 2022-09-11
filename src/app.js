const digitsContainer = document.getElementById("digits-container");
const operatorsContainer = document.getElementById("operators-container");
const outputField = document.getElementById("output-field");

let leftOperand = '0';
let rightOperand = '0';
let operator = "";
digitsContainer.addEventListener("click", (e) => {
  if (e.target.localName === "button") {
    outputField.innerText += e.target.innerText;
    if (operator === "") {
      leftOperand += parseInt(e.target.innerText);
      console.log(leftOperand);
    } else {
      rightOperand += parseInt(e.target.innerText);
      console.log(rightOperand);
    }
  }
});
operatorsContainer.addEventListener("click", (e) => {
    operator = '';
  if (e.target.localName === "button") {
    outputField.innerText += e.target.innerText;
    operator = e.target.innerText;
    console.log(operator);
  }
});
const equalsButton = document.getElementById('btn-equals').addEventListener('click',()=>{
    if (operator === 'X') {
        const result  =  parseInt(leftOperand)*parseInt(rightOperand);
        outputField.innerText = result;
    }
    else if(operator === '+'){
        const result = parseInt(leftOperand)+parseInt(rightOperand);
        outputField.innerText = result;
    }
    else{
        const result =  parseInt(leftOperand)-parseInt(rightOperand);
        outputField.innerText = result;
    }
})

