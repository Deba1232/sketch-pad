function sketchLogic(cellCount) {

    let divs = drawArea.querySelectorAll('div');
    divs.forEach((div) => {
        drawArea.removeChild(div);
    });

    for (i = 0; i < cellCount*cellCount; i++) {
        let divNode = document.createElement('div');
        drawArea.appendChild(divNode);
    }

    let cells = drawArea.querySelectorAll('div');
    let cellDimension = drawArea.clientHeight/cellCount;
    console.log(cells.length);

    cells.forEach((cell) => {
        cell.style.height = `${cellDimension}px`;
        cell.style.width = `${cellDimension}px`;
        cell.style.backgroundColor = '#ffff00';
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

let drawArea = document.querySelector('.draw-area');

let slideContainer = document.querySelector('.draw-space-initialization .slidecontainer');
let textNode = document.createElement('p');
slideContainer.insertBefore(textNode, slideContainer.children[0]);

let slider = slideContainer.querySelector('.slider');
textNode.textContent = `Grid Size: ${slider.value} x ${slider.value}`;
sketchLogic(slider.value);

slider.addEventListener('input', (e) => {
    textNode.textContent = `Grid Size: ${e.target.value} x ${e.target.value}`;
});
slider.addEventListener('mouseup', (e) => {
    sketchLogic(e.target.value);
});