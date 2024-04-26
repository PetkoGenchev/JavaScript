function addItem() {

    let inputTextContent = document.getElementById('newItemText').value;
    let inputValue = document.getElementById('newItemValue').value;

    let newOption = document.createElement('option');
    newOption.textContent = inputTextContent;
    newOption.value = inputValue;

    let dropDown = document.getElementById('menu');

    dropDown.appendChild(newOption);

    document.getElementById('newItemText').value = '';
    document.getElementById('newItemValue').value = '';


}