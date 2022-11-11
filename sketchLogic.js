let drawArea = document.querySelector('.draw-area');

function canvasBgColor(){
    return canvasColor.value;
}

function penColor() {
    return drawColor.value;
}

function sketchLogic(cellCount) {

    for (i = 0; i < cellCount*cellCount; i++) {
        let divNode = document.createElement('div');
        drawArea.appendChild(divNode);
    }

    let cells = drawArea.querySelectorAll('div');
    let cellDimension = drawArea.clientHeight/cellCount;
    // console.log(`noOfCells: ${cells.length}`);

    cells.forEach((cell) => {
        cell.style.boxSizing = 'border-box';
        cell.style.boxShadow = '0 0 1px #000000';
        cell.style.height = `${cellDimension}px`;
        cell.style.width = `${cellDimension}px`;
        cell.style.backgroundColor = canvasBgColor();
    });

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

function refreshSketchArea() {
    let divs = drawArea.querySelectorAll('div');
    divs.forEach((div) => {
        drawArea.removeChild(div);
    });
}