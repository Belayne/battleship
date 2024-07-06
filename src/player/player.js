const Gameboard = require('../gameboard/gameboard').Gameboard;

class Player{
    constructor(name) {
        this.name = name;
        this.board = new Gameboard();
    }

    randomizeShips() {
        this.board.fleet = [];
        const fleet = [[1, 5], [2, 4], [3, 3], [4, 2]];
        for(const [quantity, length] of fleet) {
            for(let i = 0; i < quantity; i++) {
                try {
                    const x = Math.floor(Math.random() * 10);
                    const y = Math.floor(Math.random() * 10);
                    const vertical = !!Math.floor(Math.random());
                    this.board.placeShip(length, [x, y], vertical);
                }
                catch (error){
                    i--;
                }
            } 
        }
    }

    reset() {
        this.board.fleet = [];
        this.board.attacks = [];
    }

}

class ComputerPlayer extends Player {
    constructor() {
        super("Opponent");
        this.playedCoordinates = [];
    }

    randomAttack() {
        const attack = {};
        do {
            attack.x = Math.floor(Math.random() * 10);
            attack.y = Math.floor(Math.random() * 10);
        }while (this.playedCoordinates.some(played => played[0] == attack.x && played[1] == attack.y));

        this.playedCoordinates.push([attack.x, attack.y]);

        return [attack.x, attack.y];

    }

    reset() {
        super.reset();
        this.playedCoordinates = [];
    }
}

module.exports = {
    Player,
    ComputerPlayer
}