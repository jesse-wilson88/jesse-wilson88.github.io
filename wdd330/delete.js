function drawCircle(canvas) {
  var context = canvas.getContext("2d");
  context.beginPath();
  context.arc(100, 100, 50, 0, Math.PI * 2, true);
  context.closePath();
  context.strokeStyle = "red";
  context.fillStyle = "blue";
  context.lineWidth = 3;
  context.fill();
  context.stroke();
}

video.addEventListener("loadedmetadata", () => {
  console.log(video.duration);
});

video.addEventListener(
  "pause",
  () => {
    console.log("The video has been paused");
  },
  false
);
