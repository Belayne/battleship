const Gameboard = require("./gameboard").Gameboard

describe('Gameboard', () => {
    it("Should be defined", () => {
        expect(Gameboard).toBeDefined();
    })

    describe("placeShip", () => {
        it("Should place a new ship on the board", () => {
            const newBoard = new Gameboard();
            newBoard.placeShip(4, [4, 3]);

            expect(newBoard.fleet.length).toBe(1);
        })

        it("Should store correct coordinates for each ship", () => {
            const newBoard = new Gameboard();
            newBoard.placeShip(2, [4, 3]);
            newBoard.placeShip(2, [5, 3], true);

            expect(newBoard.fleet[0].shipCoordinates).toEqual(expect.arrayContaining([[4,3],[4,4]]));
            expect(newBoard.fleet[1].shipCoordinates).toEqual(expect.arrayContaining([[5,3],[6,3]]));
        })

        it("Should not allow invalid coordinates", () => {
            const newBoard = new Gameboard();
            expect(() => newBoard.placeShip(2, [4, 11])).toThrow("Invalid coordinates (out of range)");
            expect(() => newBoard.placeShip(4, [10, 4], true)).toThrow("Invalid coordinates (out of range)");
            expect(() => newBoard.placeShip(4, [4, 10])).toThrow("Invalid coordinates (out of range)");
        })

        it("Should not allow ships on top of other ships", () => {
            const newBoard = new Gameboard();
            newBoard.placeShip(3, [3, 4]);

            expect(() => newBoard.placeShip(2, [3, 4])).toThrow("Invalid coordinates (ship already present)")
            expect(() => newBoard.placeShip(2, [3, 5])).toThrow("Invalid coordinates (ship already present)")
            expect(() => newBoard.placeShip(2, [3, 6])).toThrow("Invalid coordinates (ship already present)")

        })

        it("Should not allow invalid length", () => {
            const newBoard = new Gameboard();
            expect(() => newBoard.placeShip(7, [4, 3])).toThrow("Invalid ship length");
        })
    })

    describe("receiveAttack", () => {
        it("Should hit if there is a ship", () => {
            const newBoard = new Gameboard();
            newBoard.placeShip(4, [3, 4]);

            expect(newBoard.receiveAttack([3, 4])).toBe(true);
            expect(newBoard.attacks.length).toBe(1);
            expect(newBoard.receiveAttack([3, 5])).toBe(true);
            expect(newBoard.receiveAttack([3, 6])).toBe(true);
        })

        it("Should not hit if there is no ship", () => {
            const newBoard = new Gameboard();
            newBoard.placeShip(4, [3, 4]);

            expect(newBoard.receiveAttack([2, 4])).toBe(false);
            expect(newBoard.attacks.length).toBe(1);
            expect(newBoard.receiveAttack([5, 4])).toBe(false);

        })
    })

    describe("isFleetSunk", () => {
        it("Should tell if the fleet is sunk or not", () => {
            const newBoard = new Gameboard();
            newBoard.placeShip(2, [3, 4]);

            expect(newBoard.isFleetSunk()).toBe(false);
            newBoard.receiveAttack([3, 4]);
            expect(newBoard.isFleetSunk()).toBe(false);
            newBoard.receiveAttack([3, 5]);
            expect(newBoard.isFleetSunk()).toBe(true);

            newBoard.placeShip(2, [4, 4]);
            expect(newBoard.isFleetSunk()).toBe(false);
        })
    })
})