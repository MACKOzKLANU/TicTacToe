console.log("hello");

let player = document.getElementById("player");
player.addEventListener("click", setxy);
let xoro = "O";
let gameActive = true;

function setxy() {
    if (gameActive) {
        xoro = (xoro === "X") ? "O" : "X";
        player.innerHTML = xoro;
    }
}

const winningCombos = [
    [1, 2, 3], [4, 5, 6], [7, 8, 9],  
    [1, 4, 7], [2, 5, 8], [3, 6, 9],  
    [1, 5, 9], [3, 5, 7] 
];

const gameBoard = Array(9).fill("-");
const result = document.querySelector(".result");
const buttons = document.querySelectorAll('.game-button');

buttons.forEach((button, index) => {
    button.addEventListener("click", () => makeMove(button, index));
});

function checkWinner() {
    for (const combo of winningCombos) {
        const [a, b, c] = combo;
        if (gameBoard[a - 1] !== "-" && gameBoard[a - 1] === gameBoard[b - 1] && gameBoard[b - 1] === gameBoard[c - 1]) {
            gameActive = false;
            result.innerHTML = gameBoard[a - 1] + " wins!";
            return;
        }
    }

    if (!gameBoard.includes("-")) {
        gameActive = false;
        result.innerHTML = "It's a draw!";
    }
}

function makeMove(button, index) {
    if (gameActive && gameBoard[index] === "-") {
        gameBoard[index] = xoro;
        button.value = xoro;
        button.innerHTML = xoro;
        checkWinner();
        setxy();
    }
}

function reset(){
    location.reload()
}
