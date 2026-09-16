console.log("ScribblePaint98 JavaScript is connected!");

const canvas = document.getElementById("paintCanvas");
const ctx = canvas.getContext("2d");

const brushSizeInput = document.getElementById("brushSize");
const brushSizeValue = document.getElementById("brushSizeValue");
const brushColorInput = document.getElementById("brushColor")

const penButton = document.getElementById("pen");
const eraserButton = document.getElementById("eraser");

canvas.width = canvas.clientWidth;
canvas.height = canvas.clientHeight;

let brushColor = "black";
let isDrawing = false;
let isErasing = false;

let brushSize = 5;
brushSizeInput.addEventListener("input", (event) => {
    brushSize = brushSizeInput.value;
    brushSizeValue.textContent = brushSize + " px";
});

brushColorInput.addEventListener("input", (event) => {
    brushColor = brushColorInput.value;
});

penButton.addEventListener("click", () => {
    isErasing = false;
});
eraserButton.addEventListener("click", () => {
    isErasing = true;
});

canvas.addEventListener("mousedown", (event) => {
  if (isErasing) {
    ctx.globalCompositeOperation ="destination-out";
  } else {
    ctx.globalCompositeOperation = "source-over";
  }

    isDrawing = true;
    ctx.beginPath();
    ctx.moveTo(event.offsetX, event.offsetY);

    ctx.lineWidth = brushSize;
    ctx.strokeStyle = brushColor;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    ctx.lineTo(event.offsetX + 0.01, event.offsetY);
    ctx.stroke();
});

canvas.addEventListener("mouseup", () => {
    isDrawing = false;
    ctx.closePath();
});

canvas.addEventListener("mousemove", (event) => {
    if (isDrawing) {
        ctx.lineTo(event.offsetX, event.offsetY);
        ctx.stroke();
    }
})