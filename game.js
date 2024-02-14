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
    // console.log(originalBoard)
}


function turnClick(e){
    // console.log(e.target.id)
    turn(e.target.id,humanPlayer)
}

function turn(squareId,player){
    // boxId = document.querySelector("#id");
    originalBoard[squareId] = player;
	document.getElementById(squareId).innerText = player;

}
// let array = []

// array.push(cells)
// console.log(array)