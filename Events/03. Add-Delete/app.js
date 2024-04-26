function addItem() {

    let listofItems = document.getElementById('items');
    let itemToAdd = document.getElementById('newItemText');
    let newItemCreated = document.createElement('li');
    newItemCreated.textContent = itemToAdd.value;

    let deleteElement = document.createElement('a');
    deleteElement.href = '#';
    deleteElement.text = '[Delete]';
    deleteElement.addEventListener('click', (e) => {
        e.currentTarget.parentElement.remove();
    });

    newItemCreated.appendChild(deleteElement);
    listofItems.appendChild(newItemCreated);
}