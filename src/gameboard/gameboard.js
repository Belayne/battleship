const Ship = require("../ship/ship").Ship

class Gameboard {
    constructor() {
        this.fleet = [];
        this.missed = [];
    }

    placeShip(start, end) {
        const length = end.x - start.x || end.y - start.y;

        this.#checkLength(length);
        this.#checkCoordinates(start, end);
        
        const ship = new Ship(length);

        let coordinates = [];
        
        for(let i = 0; i < length; i++) {
            if(start.x === end.x) {
                coordinates.push([start.x, start.y + i])
            }
            else {
                coordinates.push([start.x + i, start.y])
            }
        }

        this.#checkAdjacency(coordinates);

        this.fleet.push({
            ship,
            coordinates
        });
    }

    #checkAdjacency(coordinates) {
      coordinates.forEach(el => {
        this.fleet.forEach(ship => {
            ship.coordinates.forEach(coord => {
                if(Math.abs(coord[0] - el[0]) < 2 && Math.abs(coord[1] - el[1]) < 2) {
                    throw new Error("Invalid placement");
                }
            })
        })
      })
    }

    #checkLength(length) {
        if(length > 4 || length < 2) {
            throw new Error(`Invalid ship length`)
        }
    }
    
    #checkCoordinates(start, end) {
        if( start.x > 10 || start.x < 1 ||
            start.y > 10 || start.y < 1 ||
            end.x > 10 || end.x < 1 ||
            end.y > 10 || end.y < 1) {
                throw new Error("Invalid coordinates");
            }
    
            if(start.x != end.x && start.y != end.y) {
                throw new Error("Invalid coordinates");
            }
        }
    
}

module.exports = {
    Gameboard
}