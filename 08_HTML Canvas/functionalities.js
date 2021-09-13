
const canvas = document.querySelector("#canvas");
const context = canvas.getContext("2d"); // returns 2d canvas context

canvas.width = window.innerWidth; // size up canvas to window size
canvas.height = window.innerHeight;

//context.strokeStyle = `hsl(165, 50%, 50%)`; // color of stroke hue saturation lightness
let hue = 183;
context.lineJoin = "round";
context.lineCap = "round";
context.lineWidth = 10;
//context.globalCompositeOperation = 'multiply';

let isDrawing = false; // true when user is drawing, mousedown
canvas.addEventListener("mousedown", () => isDrawing = true);
canvas.addEventListener("mouseup", () => isDrawing = false);
canvas.addEventListener("mouseout", () => isDrawing = false);

let lastX = 0; // coordinates of the mouse when drawing 
let lastY = 0;

canvas.addEventListener("mousedown", (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY]; // oneliner for lastX = e.offsetX;  lastY = e.offsetY;
});

canvas.addEventListener("mousemove", draw);

function draw(e){
    if(!isDrawing){
        return;
    }

    context.strokeStyle = `hsl(${hue}, 50%, 80%)`;
    
    context.beginPath();
    context.moveTo(lastX, lastY); // previous position mouse
    context.lineTo(e.offsetX, e.offsetY); // actual position of mouse
    context.stroke();
    [lastX, lastY] = [e.offsetX, e.offsetY]; 

    hue++;
    if(hue==360){
        hue = 0;
    }
}