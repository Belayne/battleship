const Gameboard = require("./gameboard").Gameboard

describe('Gameboard', () => {
    it("Should be defined", () => {
        expect(Gameboard).toBeDefined();
    })

    it("Should be able to place ships", () => {
        const myBoard = new Gameboard();
        const start = {
            x: 1,
            y: 1
        }
        const end = {
            x: 1,
            y: 4
        }
        myBoard.placeShip(start, end);
        expect(myBoard.fleet.length).toBe(1);
    })

    describe("placeShip", () => {

        it("Should not create ships of invalid length", () => {
            const myBoard = new Gameboard();
            const start = {
                x: 1,
                y: 1
            }
            const end = {
                x: 1,
                y: 7
            }
            expect(() => myBoard.placeShip(start, end)).toThrow(`Invalid ship length`);
        })

        it("Should not allow invalid coordinates", () => {
            const myBoard = new Gameboard();

            const testCases = [
                {
                    start: {x: 4, y: 3},
                    end: {x: 6, y: 5}
                },
                {
                    start: {x: 8, y: 3},
                    end: {x: 12, y: 3}
                }
            ]

            testCases.forEach(test => {
                expect(() => myBoard.placeShip(test.start, test.end)).toThrow("Invalid coordinates");
            })
        })

        it("Should not allow adjacent ships", () => {
            const myBoard = new Gameboard();
            myBoard.placeShip(
                {x:4, y:4}, 
                {x:8, y:4}
            );

            const testCases = [
                {
                    start: {x: 4, y: 4},
                    end: {x: 8, y: 4}
                },
                {
                    start: {x: 5, y:5},
                    end: {x: 8, y: 5}
                },
                {
                    start: {x: 3, y: 3},
                    end: {x: 7, y: 3}
                }
            ]

            testCases.forEach(test => {
                expect(() => myBoard.placeShip(test.start, test.end)).toThrow("Invalid placement");
            })
        })



        
    })
})