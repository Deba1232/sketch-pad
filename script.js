let drawArea = document.querySelector('.draw-area');
let slider = document.querySelector('.draw-space-initialization .slidecontainer');

let cellCount = 24;
// drawArea.innerHTML = '';

for (i = 0; i < cellCount * cellCount; i++) {
    let divNode = document.createElement('div');
    drawArea.appendChild(divNode);
}

let cells = drawArea.querySelectorAll('div');
let cellDimension = drawArea.clientHeight / cellCount;

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

slider.innerHTML += '<p>24*24</p>';