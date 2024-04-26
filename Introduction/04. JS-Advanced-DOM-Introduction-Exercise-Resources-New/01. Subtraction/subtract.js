function subtract() {
    let firstValue = Number(document.getElementById('firstNumber').value);
    let secondValue = Number(document.getElementById('secondNumber').value);
    console.log(firstValue + ' ' + secondValue);
    let substraction = firstValue-secondValue;

    let result = document.getElementById('result');
    result.textContent = substraction;
    console.log(result.textContent);
}