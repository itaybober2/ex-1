document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('drawingCanvas');
  const ctx = canvas.getContext('2d');
  const clearButton = document.getElementById('clearButton');

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  let drawing = false;

  function startDrawing(e) {
    drawing = true;
    draw(e);
  }

  function endDrawing() {
    drawing = false;
    ctx.beginPath();
  }

  function draw(e) {
    if (!drawing) return;

    ctx.lineWidth = 5;
    ctx.lineCap = 'round';
    ctx.strokeStyle = 'black';

    ctx.lineTo(e.clientX, e.clientY);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(e.clientX, e.clientY);
  }

  function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }

  canvas.addEventListener('mousedown', startDrawing);
  canvas.addEventListener('mouseup', endDrawing);
  canvas.addEventListener('mousemove', draw);
  clearButton.addEventListener('click', clearCanvas);

  window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });
});