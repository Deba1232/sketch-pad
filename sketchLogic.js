let drawArea = document.querySelector('.draw-area');

function sketchLogic(cellCount) {

    let divs = drawArea.querySelectorAll('div');
    divs.forEach((div) => {
        drawArea.removeChild(div);
    });

    for (i = 0; i < cellCount * cellCount; i++) {
        let divNode = document.createElement('div');
        drawArea.appendChild(divNode);
    }

    let cells = drawArea.querySelectorAll('div');
    let cellDimension = drawArea.clientHeight / cellCount;
    console.log(cells.length);

    cells.forEach((cell) => {
        cell.style.height = `${cellDimension}px`;
        cell.style.width = `${cellDimension}px`;
        cell.style.backgroundColor = `${canvasColor.value}`;
    });

    let mouseUpEvent = true;

    drawArea.addEventListener('mousedown', (e) => {
        e.target.style.backgroundColor = '#000000';
        mouseUpEvent = false;
    });
    drawArea.addEventListener('mouseover', (e) => {
        if (mouseUpEvent === false) {
            e.target.style.backgroundColor = '#000000';
        }
    });
    drawArea.addEventListener('mouseout', (e) => {
        if (mouseUpEvent === false) {
            e.target.style.backgroundColor = '#000000';
        }
    });
    drawArea.addEventListener('mouseup', (e) => {
        mouseUpEvent = true;
    });
}