let canvasColor = document.querySelector('.draw-space-initialization .bg-color');

canvasColor.addEventListener('input', () => {
    refreshSketchArea();
    sketchPadWithGrid(slider.value);
});

let eraser = document.querySelector('.eraser button');
let isEraserButtonClicked = false;

eraser.addEventListener('click' , (e) =>{
    if(isEraserButtonClicked === false){
        e.target.style.backgroundColor = '#000000';
        e.target.style.color = '#ffffff';
        eraserLogic();
        isEraserButtonClicked = true;
    }
    else{
        console.log(isEraserButtonClicked);
        e.target.style.backgroundColor = '#ffffff';
        e.target.style.color = '#000000';
        drawLogic();
        isEraserButtonClicked = false;
    }
});

let slideContainer = document.querySelector('.draw-space-initialization .slidecontainer');
let textNode = document.createElement('p');
slideContainer.insertBefore(textNode, slideContainer.children[0]);

let slider = slideContainer.querySelector('.slider');
textNode.textContent = `Grid Size: ${slider.value} x ${slider.value}`;
sketchPadWithGrid(slider.value);

slider.addEventListener('input', (e) => {
    textNode.textContent = `Grid Size: ${e.target.value} x ${e.target.value}`;
});
slider.addEventListener('change', (e) => {
    refreshSketchArea();
    sketchPadWithGrid(e.target.value);
});

let gridToggleButton = document.querySelector('.slidecontainer button');
let isGridToggleButtonClicked = false;

gridToggleButton.addEventListener('click', (e) => {
    if (isGridToggleButtonClicked === false){
        e.target.style.backgroundColor = '#ffffff';
        e.target.style.color = '#000000';
        refreshSketchArea();
        sketchPadWithoutGrid(slider.value);
        isGridToggleButtonClicked = true;
    }
    else{
        e.target.style.backgroundColor = '#000000';
        e.target.style.color = '#ffffff';
        refreshSketchArea();
        sketchPadWithGrid(slider.value);
        isGridToggleButtonClicked = false;
    }
});

let resetButton = document.querySelector('.reset button');
resetButton.addEventListener('click', () =>{
    location.reload();
});