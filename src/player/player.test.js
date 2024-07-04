const Player = require("./player").Player;
const ComputerPlayer = require("./player").ComputerPlayer;

describe('Player', () => {
    it("Should be defined", () => {
        expect(Player).toBeDefined();
    })

    describe("randomizeShips", () => {
        

        it("Should create a random fleet", () => {
            const player = new Player();
            player.randomizeShips();
            expect(player.board.fleet.length).toBeGreaterThan(1);
        })

        it("Should have a complete fleet", () => {
            const player = new Player();
            const fleet = [[1, 5], [2, 4], [3, 3], [4, 2]];
            for(let i = 0; i < 100; i++) {
                player.randomizeShips();
                for(const [quantity, length] of fleet) {
                    const numberOfShips = player.board.fleet.filter(shipObj => shipObj.ship.length === length).length;
                    expect(numberOfShips).toEqual(quantity);
                }
            }
        })
    })
})

describe("RandomPlayer", () => {
    describe("randomAttack", () => {
        it("Should return a valid random attack", () => {
            const player = new ComputerPlayer();

            expect(player.randomAttack()).toHaveLength(2)
        })

        it("Should receive attacks", () => {
            const player = new ComputerPlayer();
            player.board.placeShip(3, [3, 4])

            expect(player.board.receiveAttack([3, 4])).toBe(true)
            expect(player.board.receiveAttack([4, 4])).toBe(true)
            expect(player.board.attacks[0][1]).toBe(true)
            expect(player.board.attacks[1][1]).toBe(true)
        })
    })
})