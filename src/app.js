const digitsContainer = document.getElementById("digits-container");

for (let i = 1; i < 10; i++) {
  const button = document.createElement("button");
  button.classList.add(
    "bg-zinc-300",
    "text-xl",
    "w-10",
    "h-10",
    "text-center",
    "p-2",
    "my-2",
    "rounded-full",
    "mx-auto"
  );
  button.innerText = i;
  digitsContainer.appendChild(button);
}

const operatorsContainer = document.getElementById("operators-container");
const outputField = document.getElementById("output-field");
let leftOperand = "0";
let rightOperand = "0";
let operator = "";
const result = parseInt(leftOperand) * parseInt(rightOperand);
digitsContainer.addEventListener("click", (e) => {
  if (e.target.localName === "button") {
    outputField.innerText += e.target.innerText;
    if (operator === "") {
      leftOperand += (e.target.innerText);
      // console.log(leftOperand);
    } else {
      rightOperand += (e.target.innerText);
      // console.log(rightOperand);
    }
  }
});
operatorsContainer.addEventListener("click", (e) => {
  operator = "";
  if (e.target.localName === "button") {
    outputField.innerText += e.target.innerText;
    operator = e.target.innerText;
    console.log(operator);
  }
});

const equalsButton = document
  .getElementById("btn-equals")
  .addEventListener("click", (e) => {
    e.stopImmediatePropagation();
    if (operator === "X") {
      outputField.innerText = result;
      leftOperand = result;
    } else if (operator === "+") {
      const result = parseInt(leftOperand) + parseInt(rightOperand);
      outputField.innerText = result;
      leftOperand = result;
    } else {
      const result = parseInt(leftOperand) - parseInt(rightOperand);
      outputField.innerText = result;
      leftOperand = result;
    }
    rightOperand = "0";
    operator = "";
    console.log(outputField.innerText);
  });
const clearButton = document
  .getElementById("btn-clear")
  .addEventListener("click", () => {
    // console.log("clear!!!");
    outputField.innerText = "";
    leftOperand = "0";
    rightOperand = "0";
    operator = "";
  });
