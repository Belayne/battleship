import('./style.css')
import { Player, ComputerPlayer } from './player/player'
import { drawGrid, drawFleet, drawAttacks } from './draw'


function Game(){
    const firstPlayerGrid = document.querySelector('#firstPlayerGrid');
    const secondPlayerGrid = document.querySelector("#secondPlayerGrid")
    const randomizeBtn = document.querySelector("#randomizeBtn");
    const startBtn = document.querySelector("#startBtn");
    const playerOne = new Player("Player");
    const playerTwo = new ComputerPlayer();
    let currentPlayer = playerOne;
    let activePlayer = playerOne;
    let inactivePlayer = playerTwo;

    const renderPlayerBoard = () => {
        firstPlayerGrid.querySelector("h2").textContent = activePlayer.name;
        drawGrid(500, firstPlayerGrid);
        drawFleet(activePlayer.board.fleet, firstPlayerGrid)
        drawAttacks(activePlayer.board.attacks, firstPlayerGrid);
    }

    const renderEnemyBoard = () => {
        secondPlayerGrid.querySelector("h2").textContent = inactivePlayer.name;
        drawGrid(500, secondPlayerGrid, true);
        drawAttacks(inactivePlayer.board.attacks, secondPlayerGrid);
        
    }

    const render = () => {
        renderPlayerBoard();
        renderEnemyBoard();
    }

    const getUserClick = (e) => {
        if(e.target.tagName == "rect") {
            if(!e.target.classList.contains("attacked")) {
                playRound([+e.target.getAttribute("data-x"), +e.target.getAttribute("data-y")]);
            }
        }
    }

    const start = () => {
        render();
        secondPlayerGrid.addEventListener("click", getUserClick);
        randomizeBtn.removeEventListener("click", handleRandomBtn);
        randomizeBtn.classList.add("disabled");
        startBtn.removeEventListener("click", start);
        startBtn.classList.add("disabled");
    }

    const reset = () => {
        playerOne.reset();
        playerTwo.reset();
        secondPlayerGrid.removeEventListener("click", getUserClick);
        startBtn.classList.remove("disabled")
        randomizeBtn.classList.remove("disabled")
        init();
    }

    const checkWin = () => {
        const win = playerOne.board.isFleetSunk() || playerTwo.board.isFleetSunk();
        return win;
    }

    const gameOver = (winnerName) => {
        const winOverlay = document.createElement("div");
        const restartBtn = document.createElement("button");
        restartBtn.textContent = "Reset";

        restartBtn.addEventListener("click", () => {
            reset();
            winOverlay.remove();
        })

        winOverlay.id = "winOverlay";

        const winnerMessage = document.createElement("h2");
        winnerMessage.textContent = winnerName + " wins!"
        winOverlay.appendChild(winnerMessage);
        winOverlay.appendChild(restartBtn)
        document.querySelector("#container").append(winOverlay)
    }

    const playRound = (attack) => {
        currentPlayer = playerOne;

        inactivePlayer.board.receiveAttack(attack);
        render();

        if(checkWin()) {
            gameOver(currentPlayer.name);
            return;
        }

        currentPlayer = playerTwo;

        const computerAttack = playerTwo.randomAttack();
        playerOne.board.receiveAttack(computerAttack);
        render();

        if(checkWin()) {
            gameOver(currentPlayer.name);
            return;
        }

    }

    const handleRandomBtn = () => {
        playerOne.randomizeShips();
        render();
    }

    function init(){
        playerOne.randomizeShips();
        playerTwo.randomizeShips();
        randomizeBtn.addEventListener("click", handleRandomBtn);
        startBtn.addEventListener("click", start);

        render();
    }

    return {
        init
    }
}

const game = Game();
game.init();




    


