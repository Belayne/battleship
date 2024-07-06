
function drawSquare(x, y, containerSize) {
    const square = document.createElementNS("http://www.w3.org/2000/svg",'rect');
    const size = containerSize/11;
    square.setAttribute("width", size);
    square.setAttribute("height", size);
    square.setAttribute("ry", size / 11);
    square.setAttribute("rx", size / 11);
    
    square.setAttribute("data-x", `${x - 1}`);
    square.setAttribute("data-y", `${y - 1}`);
    square.setAttribute("x", x * size);
    square.setAttribute("y", y * size);

    return square;
}

function drawGrid(size, parent, opponent = false) {
    if(parent.querySelector("svg")) {
        parent.querySelector("svg").remove();
    }
    const svg = document.createElementNS("http://www.w3.org/2000/svg", 'svg');

    svg.setAttribute("width", size);
    svg.setAttribute("height", size);
    svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");

    for(let i = 0; i < 11; i++) {
        for(let j = 0; j < 11; j++) {
            if(i === 0 && j != 0) {
                const svgText = drawLetter(j, size)
                svg.appendChild(svgText);
            }

            if(j === 0 && i != 0) {
                const svgText = drawNumber(i, size)
                svg.appendChild(svgText);
            }

            if(i > 0 && j > 0) {
                const square = drawSquare(i, j, size);
                if(opponent) {
                    square.classList.add("opponent");
                }
                svg.appendChild(square);
            }
        }
    }
    parent.append(svg)
}

function drawLetter(x, parentSize) {
    const svgText = document.createElementNS("http://www.w3.org/2000/svg", "text");
    const textLength = parentSize/11;

    svgText.setAttribute("x", x * textLength + textLength/2 - 4)
    svgText.setAttribute("y", textLength / 2)
    svgText.textContent = String.fromCharCode(64 + x);

    return svgText;

}


function drawNumber(y, parentSize) {
    const svgText = document.createElementNS("http://www.w3.org/2000/svg", "text");
    const textLength = parentSize/11;

    svgText.setAttribute("y", y * textLength + textLength/2 + 7)
    svgText.setAttribute("x", textLength / 2)
    svgText.textContent = (y);

    return svgText;

}

function drawFleet(fleet, grid) {
    fleet.forEach(shipObj => {
        for(const [x, y] of shipObj.shipCoordinates) {
            const square = grid.querySelector(`rect[data-x='${x}'][data-y='${y}']`)
            square.classList.add("ship");
            //square.setAttribute("stroke", "green");
        }
    })
}

function drawAttacks(attacks, grid) {
    for(const [[x, y], hit] of attacks) {
        const square = grid.querySelector(`rect[data-x='${x}'][data-y='${y}']`);
        if(hit) {
            square.classList.add("hit");
        } else {
            square.classList.add("miss");
        }
        square.classList.add("attacked")
    }
}

export {
    drawGrid,
    drawFleet,
    drawAttacks
}