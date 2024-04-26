function addItem() {
    let ulElements = document.getElementById('items');
    let newElement = document.getElementById('newItemText');
    let elementToAdd = document.createElement('li');

    elementToAdd.textContent = newElement.value;
        
    ulElements.appendChild(elementToAdd);

}