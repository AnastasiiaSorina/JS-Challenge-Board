const board = document.querySelector('#board')
const colors = ['#7A9298', '#4E6E76', '#224A54', '#D6E8EC', '#C8E0E6', '#BAD8E0', '#89CDB7', '#62BC9F', '#3BAB87', '#F2DBD4', '#EDCFC6','#E9C3B8']
const SQUARES_NUMBER = 900

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => setColor(square))
    square.addEventListener('mouseleave', () => removeColor(square))

    board.append(square)
}   

function setColor(element) {
    const color = getRandomColor()
    element.style.backgroundColor = color
}

function removeColor(element) {
    element.style.backgroundColor = '#3C3C3C'
}

function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}