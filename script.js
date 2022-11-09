let drawArea = document.querySelector('.draw-area');
let slideContainer = document.querySelector('.draw-space-initialization .slidecontainer');

let textNode = document.createElement('p');
slideContainer.insertBefore(textNode, slideContainer.children[0]);

let slider = slideContainer.querySelector('.slider');

textNode.textContent = `${slider.value} x ${slider.value}`;
sketchLogic(slider.value);

slider.addEventListener('input', (e) => {
    textNode.textContent = `${e.target.value} x ${e.target.value}`;
});
slider.addEventListener('mouseup', (e) => {
    console.log(`logFromEvent:${e.target.value}`);
    sketchLogic(e.target.value);
});

function sketchLogic(cellCount){

    let flag = 0;
    for (i = 0; i < cellCount*cellCount; i++) {
        let divNode = document.createElement('div');
        drawArea.appendChild(divNode);
        flag++;
    }
    console.log(`forLoop running:${flag}`);
    
    let cells = drawArea.querySelectorAll('div');
    let cellDimension = drawArea.clientHeight/cellCount;
    
    let count = 0;
    cells.forEach((cell) => {
        cell.style.height = `${cellDimension}px`;
        cell.style.width = `${cellDimension}px`;
        cell.style.backgroundColor = '#ffff00';
        count++;
    });
    console.log(`forEachLoopRunning:${count}`);
    
    let mouseUpEvent = true;
    
    drawArea.addEventListener('mousedown', (e) => {
        e.target.style.backgroundColor = '#000000';
        mouseUpEvent = false;
    });
    drawArea.addEventListener('mouseover', (e) => {
        // console.log(`${e.type} ${mouseUpEvent}`);
        if (mouseUpEvent === false) {
            e.target.style.backgroundColor = '#000000';
        }
    });
    drawArea.addEventListener('mouseout', (e) => {
        // console.log(`${e.type} ${mouseUpEvent}`);
        if (mouseUpEvent === false) {
            e.target.style.backgroundColor = '#000000';
        }
    });
    drawArea.addEventListener('mouseup', (e) => {
        mouseUpEvent = true;
    });
}