
function drawSquare(x, y, containerSize) {
    const square = document.createElementNS("http://www.w3.org/2000/svg",'rect');
    const size = containerSize/10;
    square.setAttribute("width", size);
    square.setAttribute("height", size);

    square.setAttribute("data-x", `${x}`);
    square.setAttribute("data-y", `${y}`);
    square.setAttribute("x", x * size);
    square.setAttribute("y", y * size);

    return square;
}

function drawGrid(size, parent) {
    if(parent.querySelector("svg")) {
        parent.querySelector("svg").remove();
    }
    const svg = document.createElementNS("http://www.w3.org/2000/svg", 'svg');

    const container = document.createElementNS("http://www.w3.org/2000/svg",'g');

    container.setAttribute('fill', "white");
    container.setAttribute('stroke', "black");
    container.setAttribute('stroke-width', "1");

    svg.appendChild(container);

    svg.setAttribute("width", size);
    svg.setAttribute("height", size);
    svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    //svg.setAttribute("viewBox", "0 0 500 500")

    for(let i = 0; i < 10; i++) {
        for(let j = 0; j < 10; j++) {
            const square = drawSquare(i, j, size);
            container.appendChild(square);
        }
    }
    parent.append(svg)
}

function drawFleet(fleet, grid) {
    fleet.forEach(shipObj => {
        for(const [x, y] of shipObj.shipCoordinates) {
            const square = grid.querySelector(`rect[data-x='${x}'][data-y='${y}']`)
            square.setAttribute("fill", "green");
            //square.setAttribute("stroke", "green");
        }
    })
}

function drawAttacks(attacks, grid) {
    for(const [[x, y], hit] of attacks) {
        const square = grid.querySelector(`rect[data-x='${x}'][data-y='${y}']`);
        if(hit) {
            square.setAttribute("fill", "red");
        } else {
            square.setAttribute("fill", "blue");
        }
    }
}

export {
    drawGrid,
    drawFleet,
    drawAttacks
}