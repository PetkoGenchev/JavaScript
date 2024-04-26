function calc() {
    let firstInput = document.getElementById('num1');
    let secondInput = document.getElementById('num2');
    
    let firstNumber = Number(firstInput.value);
    let secondNumber = Number(secondInput.value);

    let sum = firstNumber + secondNumber;

    let resultElement = document.getElementById('sum');
    resultElement.value = sum;
}
