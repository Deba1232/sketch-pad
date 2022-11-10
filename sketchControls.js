let canvasColor = document.querySelector('.draw-space-initialization .bg-color');
canvasColor.addEventListener('click', (e) => {
    console.log(e.target.value);
});

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