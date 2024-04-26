function toggle() {


let button = document.querySelector('.button');
let hideLink = document.querySelector('#extra');

if(button.textContent === 'More'){
    button.textContent = 'Less';
    hideLink.style.display = 'block';
}
else{
        button.textContent = 'More';
        hideLink.style.display = 'none';
}
}