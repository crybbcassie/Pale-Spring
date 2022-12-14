let board = document.querySelector('#board');
const SQUARES_NUMBER = 440;
let colors = ["#FFD6A1", "#FFAFA3", "#6C7394", "#8DB591", "#DFE3BC"];

for (let i = 0; i < SQUARES_NUMBER; i++) {
    let square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('mouseover', () => setColor(square));
    square.addEventListener("mouseleave", () => removeColor(square));

    board.append(square)
}

function setColor(element) {
    let color = getRandomColor();
    element.style.backgroundColor = color;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element) {
    element.style.backgroundColor = "#1d1d1d";
     element.style.boxShadow = `0 0 2px #000`;
}

function getRandomColor() {
    let i = Math.floor(Math.random() *colors.length);
    return colors[i]
}