const digitsContainer = document.getElementById("digits-container");
const operatorsContainer = document.getElementById('operators-container')
const outputField = document.getElementById("output-field");
digitsContainer.addEventListener("click", (e) => {
  if (e.target.localName === "button") {
    outputField.value = e.target.innerText;
  }
});
operatorsContainer.addEventListener('click',(e)=>{
    if (e.target.localName === "button") {
        outputField.value = e.target.innerText;
    }
    
})
