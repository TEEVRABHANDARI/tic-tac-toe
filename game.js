var originalBoard;

const humanPlayer = 'O';
const computerPlayer ='X';

let winCombos = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [6,4,2],

]

const cells = document.querySelectorAll(".cell")
startGame()


function startGame()
{
    document.querySelector(".endGame").style.display = "none";
    originalBoard = Array.from(Array(9).keys()) //learnt a new way of creating an array
    for (let i = 0; i < cells.length; i++) {
        cells[i].innerHTML = ""
        cells[i].style.removeProperty('background-color')
        cells[i].addEventListener("click", turnClick,false)
    }
    
}


function turnClick(square){
    
    turn(square.target.id,humanPlayer)
}

function turn(squareId,player){
    
    originalBoard[squareId] = player;
	document.getElementById(squareId).innerText = player;
    let gameWon = checkWin(originalBoard,player);
    if (gameWon) gameOver(gameWon)

}

function checkWin(board, player) {
	let plays = board.reduce((a, e, i) => 
		(e === player) ? a.concat(i) : a, []);
	let gameWon = null;
	for (let [index, win] of winCombos.entries()) {
		if (win.every(elem => plays.indexOf(elem) > -1)) {
			gameWon = {index: index, player: player};
			break;
		}
	}
	return gameWon;
}

function gameOver(gameWon) {
	for (let index of winCombos[gameWon.index]) {
		document.getElementById(index).style.backgroundColor =
			gameWon.player == humanPlayer ? "blue" : "red";
	}
	for (var i = 0; i < cells.length; i++) {
		cells[i].removeEventListener('click', turnClick, false);
	}
}