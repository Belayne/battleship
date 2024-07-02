class Ship {
    constructor(length) {
        this.length = length;
        this.hits = 0;
    }

    hit() {
        this.hits++;
    }

    isSunk() {
        const sunk = this.hits >= this.length? true: false;
        return sunk;
    }

}

module.exports = {
    Ship
}