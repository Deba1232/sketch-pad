let drawColor = document.querySelector('.draw-space-initialization .pen-color');
let drawArea = document.querySelector('.draw-area');

function canvasBgColor(){
    return canvasColor.value;
}

function penColor() {
    return drawColor.value;
}

function refreshSketchArea() {
    let divs = drawArea.querySelectorAll('div');
    divs.forEach((div) => {
        drawArea.removeChild(div);
    });
}

function sketchPadWithGrid(cellCount) {

    for (i = 0; i < cellCount*cellCount; i++) {
        let divNode = document.createElement('div');
        drawArea.appendChild(divNode);
    }

    let cells = drawArea.querySelectorAll('div');
    let cellDimension = drawArea.clientHeight/cellCount;

    cells.forEach((cell) => {
        cell.style.boxSizing = 'border-box';
        cell.style.boxShadow = '0 0 1px #000000';
        cell.style.height = `${cellDimension}px`;
        cell.style.width = `${cellDimension}px`;
        cell.style.backgroundColor = canvasBgColor();
    });

}

function sketchPadWithoutGrid(cellCount) {

    for (i = 0; i < cellCount*cellCount; i++) {
        let divNode = document.createElement('div');
        drawArea.appendChild(divNode);
    }

    let cells = drawArea.querySelectorAll('div');
    let cellDimension = drawArea.clientHeight/cellCount;

    cells.forEach((cell) => {
        cell.style.boxSizing = 'border-box';
        cell.style.height = `${cellDimension}px`;
        cell.style.width = `${cellDimension}px`;
        cell.style.backgroundColor = canvasBgColor();
    });
}

let mouseUpEvent = true;

drawArea.addEventListener('mousedown', (e) => {
    e.target.style.backgroundColor = penColor();
    mouseUpEvent = false;
});
drawArea.addEventListener('mouseover', (e) => {
    if (mouseUpEvent === false) {
        e.target.style.backgroundColor = penColor();
    }
});
drawArea.addEventListener('mouseout', (e) => {
    if (mouseUpEvent === false) {
        e.target.style.backgroundColor = penColor();
    }
});
drawArea.addEventListener('mouseup', (e) => {
    mouseUpEvent = true;
});

function drawLogic(){
    let mouseUpEvent = true;
    drawArea.addEventListener('mousedown', (e) => {
        e.target.style.backgroundColor = penColor();
        mouseUpEvent = false;
    });
    drawArea.addEventListener('mouseover', (e) => {
        if (mouseUpEvent === false) {
            e.target.style.backgroundColor = penColor();
        }
    });
    drawArea.addEventListener('mouseout', (e) => {
        if (mouseUpEvent === false) {
            e.target.style.backgroundColor = penColor();
        }
    });
    drawArea.addEventListener('mouseup', (e) => {
        mouseUpEvent = true;
    });
}

function eraserLogic(){
    let mouseUpEvent = true;

    drawArea.addEventListener('mousedown', (e) => {
        e.target.style.backgroundColor = canvasBgColor();
        mouseUpEvent = false;
    });
    drawArea.addEventListener('mouseover', (e) => {
        if (mouseUpEvent === false) {
            e.target.style.backgroundColor = canvasBgColor();
        }
    });
    drawArea.addEventListener('mouseout', (e) => {
        if (mouseUpEvent === false) {
            e.target.style.backgroundColor = canvasBgColor();
        }
    });
    drawArea.addEventListener('mouseup', (e) => {
        mouseUpEvent = true;
    });
}