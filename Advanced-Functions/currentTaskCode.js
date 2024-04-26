let hoverElement = document.getElementById('gradient');
let resultElement = document.getElementById('result');

const gradientMouseHandler = (e) => {
    let percent = Math.floor(e.offsetX / e.target.offsetWidth * 100);

    resultElement.textContent = percent+"%";
}


hoverElement.addEventListener('mousemove', gradientMouseHandler);
