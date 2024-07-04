import('./style.css')
import { Player, ComputerPlayer } from './player/player'
import { drawGrid, drawFleet, drawAttacks } from './draw'


function Game(){
    const firstPlayerGrid = document.querySelector('#firstPlayerGrid');
    const secondPlayerGrid = document.querySelector("#secondPlayerGrid")
    const playerOne = new Player("Naol");
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
        drawGrid(500, secondPlayerGrid);
        //drawFleet(inactivePlayer.board.fleet, secondPlayerGrid)
        drawAttacks(inactivePlayer.board.attacks, secondPlayerGrid);
        
    }

    const render = () => {
        renderPlayerBoard();
        renderEnemyBoard();
    }

    const start = () => {
        playerOne.randomizeShips();
        playerTwo.randomizeShips();
        render();

        secondPlayerGrid.addEventListener("click", e => {
            if(e.target.tagName == "rect") {
                playRound([+e.target.getAttribute("data-x"), +e.target.getAttribute("data-y")]);
            }
        })
    }

    const playRound = (attack) => {

        inactivePlayer.board.receiveAttack(attack);
        render();

        const computerAttack = playerTwo.randomAttack();
        playerOne.board.receiveAttack(computerAttack);
        render();

    }
    

    return {
        start
    }
}

const game = Game();
game.start();




    


