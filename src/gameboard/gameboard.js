const Ship = require("../ship/ship").Ship

class Gameboard {
    constructor() {
        this.fleet = [];    
        this.attacks = []; 
    }

    placeShip(length, coordinates, vertical = false) {
        
        this.#validateLength(length);
        this.#validateCoordinates(coordinates);

        const ship = new Ship(length);
        const shipCoordinates = [];

        for(let i = 0; i < length; i++) {
            let nextCoord = vertical? [coordinates[0], coordinates[1] + i]: [coordinates[0] + i, coordinates[1]];
            this.#validateCoordinates(nextCoord);   //checks if ship goes outside of the board lenghtwise
            shipCoordinates.push(nextCoord);
        }

        this.fleet.push({ship, shipCoordinates});
    }

    receiveAttack(coordinates) {
        const [x, y] = coordinates;
        let hit = false;

        for(const shipObj of this.fleet) {
            for(const [shipX, shipY] of shipObj.shipCoordinates) {
                if(shipX === x && shipY === y) {
                    hit = true;
                    shipObj.ship.hit();

                    this.attacks.push([coordinates, hit])
                    
                    return hit;
                }
            }
        }

        this.attacks.push([coordinates, hit])
        return hit;
    }

    isFleetSunk() {
        const sunk = this.fleet.every(shipObj => shipObj.ship.isSunk())
        return sunk;
    }

    #validateLength(length) {
        if(length > 5 || length < 2) {
            throw new Error("Invalid ship length");
        }
    }

    #validateCoordinates(coordinates) {
        const [x, y] = coordinates;

        if(x < 0 || x > 9 || y < 0 || y > 9) {
            throw new Error("Invalid coordinates (out of range)");
        }

        this.fleet.forEach(shipObj => {
            for(const [shipX, shipY] of shipObj.shipCoordinates){
                if(shipX === x && shipY === y){
                    throw new Error("Invalid coordinates (ship already present)");
                }
            }
        })
    }
  
}

module.exports = {
    Gameboard
}