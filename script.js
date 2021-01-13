function subtract(e) {
    const firstNumber = document.getElementById('firstNumber').value;
    const secondNumber = document.getElementById('secondNumber').value;
    let total = document.getElementById('total');
    total.value = (firstNumber - secondNumber);
}
function multiplyNumbers() {
    const num1 = document.getElementById("mult-num-1").value;
    const num2 = document.getElementById("mult-num-2").value;
    const product = document.getElementById("product");
    product.value = (num1 * num2);
}

const submit = document.getElementById("mult-submit");
submit.addEventListener("click", multiplyNumbers)

function addNumbers() {
    let firstNumber = document.getElementById('first-number').value;
    let secondNumber = document.getElementById('second-number').value;
    let sumNumbers = document.getElementById('sum-add');
    sumNumbers.value = parseInt(firstNumber) + parseInt(secondNumber);
}
const addingBoth = document.getElementById("add-submit");
addingBoth.addEventListener("click", addNumbers)

function divideNumbers() {
    const firstNo = document.getElementById('firstNo').value;
    const secondNo = document.getElementById('secondNo').value;
    const sumBox = document.getElementById('sum');
    const sum = firstNo / secondNo;
    sumBox.value = sum;
}