let drawArea = document.querySelector('.draw-area');
let slider = document.querySelector('.slider');

let cellCount = 200;
drawArea.innerHTML = '';

for (i = 0;i < cellCount * cellCount;i++){
    let divNode = document.createElement('div');
    drawArea.appendChild(divNode);
}

let cells = drawArea.querySelectorAll('div');
let cellDimension = drawArea.clientHeight / cellCount;

cells.forEach((cell) => {
    cell.style.height = `${cellDimension}px`;
    cell.style.flexBasis = `${cellDimension}px`;
    cell.style.backgroundColor = '#ffff00';
});

let mouseState = 'mousup';

drawArea.addEventListener('mouseover',function(e){
    console.log(e.type);
    
    if (mouseState==='mousedown'){
        e.target.style.background = '#000000';
    }

    // else{
    //     e.target.style.background = '#ffffcc';
    // }
});
drawArea.addEventListener('mouseout', function (e) {
    console.log(e.type);

    // if (mouseState === 'mousup') {
    //     e.target.style.background = '#ffff00';
    // }
});
drawArea.addEventListener('mousedown', function (e) {
    console.log(e.type);;
    e.target.style.background = '#000000';
    mouseState = 'mousedown';
});
drawArea.addEventListener('mouseup', function (e) {
    console.log(e.type);
    mouseState = 'mousup';
});