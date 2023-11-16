const resultElement = document.getElementById ('result')
const input1 = document.getElementById ('input1')
const input2 = document.getElementById ('input2')
const submitBtn = document.getElementById ('submit')
const plusBtn = document.getElementById ('plus')
const minusBtn = document.getElementById ('minus')
const multiplyBtn = document.getElementById ('multiply')
const divisionBtn = document.getElementById ('division')

let x

plusBtn.onclick = function () {
    x = +input1.value + +input2.value
}
minusBtn.onclick = function () {
    x = +input1.value - +input2.value
}
multiplyBtn.onclick = function () {
    x = +input1.value * +input2.value
}
divisionBtn.onclick = function () {
    x = +input1.value / +input2.value
}

function printResult (result) {
    result < 0 ? resultElement.style.color = 'red' : resultElement.style.color = 'green'
    resultElement.textContent = result
}

submitBtn.onclick = function () {
    const result = x
    printResult (result)
}
