const Ship = require("./ship").Ship

describe("Ship class", () => {
    it("Should exist", () => {
        //const ship = new Ship();
        expect(Ship).toBeDefined();
    })

    it("Should sink when hit enough times", () => {
        const testCases = [
            {
                length: 5,
                hits: 5,
                expected: true
            },
            {
                length: 3,
                hits: 4,
                expected: true
            }
        ]

        testCases.forEach(test => {
            const ship = new Ship(test.length)
            for(let i = 0; i < test.hits; i++) {
                ship.hit();
            }

            expect(ship.isSunk()).toBe(test.expected);
        })
    })

    it("Should NOT sink when NOT hit enough times", () => {
        const testCases = [
            {
                length: 5,
                hits: 3,
                expected: false
            },
            {
                length: 3,
                hits: 1,
                expected: false
            }
        ]

        testCases.forEach(test => {
            const ship = new Ship(test.length)
            for(let i = 0; i < test.hits; i++) {
                ship.hit();
            }

            expect(ship.isSunk()).toBe(test.expected);
        })
    })
})