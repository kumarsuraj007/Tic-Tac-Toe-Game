const gameBoardEl = document.getElementById('gameBoard');
const infoEl = document.getElementById('info');
const restartButton = document.querySelector('.restartButton');
const startCells = [
    "", "", "", "", "", "", "", "", "" 
];

let go = "circle";
infoEl.textContent = "Circle goes first!"


// creating cells for game 
function createBoard() {
    startCells.forEach((_cell, index) => {
        const cellEl = document.createElement('div');
        cellEl.classList.add('square');
        cellEl.id = index;
        cellEl.addEventListener('click', addGo)
        gameBoardEl.append(cellEl);
    })
}
createBoard();


// function to target values 
function addGo (e) {
    const goDisplay = document.createElement('div');
    goDisplay.classList.add(go);
    e.target.append(goDisplay);
    go = go === 'circle' ? 'cross' : 'circle';
    infoEl.textContent = `It is now ${go}'s turn!`;
    e.target.removeEventListener('click', addGo);
    checkScore();
}


// function to check who's winning 
function checkScore() {
    const allSquares = document.querySelectorAll('.square');
    const winningCombos = [
        [0,1,2], [3,4,5], [6,7,8],
        [0,3,6], [1,4,7], [2,5,8],
        [0,4,8], [2,4,6]
    ];

    winningCombos.forEach(array => {
        const circleWins = array.every(cell =>
        allSquares [cell].firstChild?.classList.contains('circle'))
        if (circleWins) {
        infoEl.textContent = "Circle Wins 😍!";
        // to remove event listener 
        allSquares.forEach(square => square.replaceWith(square.cloneNode(true)))
        }
    });

    winningCombos.forEach(array => {
        const crossWins = array.every(cell =>
        allSquares [cell].firstChild?.classList.contains('cross'))
        if (crossWins) {
        infoEl.textContent = "Cross Wins 😍!";
        // to remove event listener 
        allSquares.forEach(square => square.replaceWith(square.cloneNode(true)))
        }
    });
};


//refresh the window 
restartButton.addEventListener('click', () => {
    location.reload()
});





