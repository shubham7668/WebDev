document.getElementById("canvas").addEventListener("click", drawBox);
initCanvas();
document.getElementById("clearCanvas").addEventListener("click", function(e) {
  initCanvas();
});