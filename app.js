const myOwnCalculator = () =>{
    
const resultElement = document.getElementById ('result')
const input1 = document.getElementById ('input1')
const input2 = document.getElementById ('input2')
const submitBtn = document.getElementById ('submit')
const plusBtn = document.getElementById ('plus')
const minusBtn = document.getElementById ('minus')
const multiplyBtn = document.getElementById ('multiply')
const divisionBtn = document.getElementById ('division')

let x

const handleClickPlusButton = () => {
    x = +input1.value + +input2.value
 }
 
 plusBtn.addEventListener("click", handleClickPlusButton)

 const handleClickMinusButton = () => {
    x = +input1.value - +input2.value
 }
 
 minusBtn.addEventListener("click", handleClickMinusButton)

 const handleClickMultiplyButton = () => {
    x = +input1.value * +input2.value
 }
 
 multiplyBtn.addEventListener("click", handleClickMultiplyButton)

 const handleClickDivisionButton = () => {
    x = +input1.value / +input2.value
 }
 
 divisionBtn.addEventListener("click", handleClickDivisionButton)

function printResult (result) {
    const color = result < 0 ? 'red' : 'green'
    resultElement.style.color = color
    resultElement.textContent = result
}

submitBtn.onclick = function () {
    const result = x
    printResult (result)
}
}

myOwnCalculator()