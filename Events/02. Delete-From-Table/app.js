function deleteByEmail() {
    let tableToDeleteFrom = document.getElementById('customers');
    let emailToDelete = document.querySelector('input[name=email]').value;
    let resultElement = document.getElementById('result');

    let allMails = document.querySelectorAll('tr td:nth-of-type(2)');

    let emailElements = Array.from(allMails);
    let targetElement = emailElements.find(x => x.textContent == emailToDelete);

    if (targetElement) {
        targetElement.parentNode.remove();
        resultElement.textContent = "Deleted.";
    }
    else {
        resultElement.textContent = "Not found.";
    }
}