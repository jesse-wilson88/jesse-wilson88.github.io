const canvasElement = document.getElementById("canvas");

const context = canvasElement.getContext("2d");

context.fillStyle = "#0000cc"; // a blue fill color
context.strokeStyle = "#ccc"; // a gray stroke color

context.lineWidth = 4;

// This is the blue square in my notes
context.fillRect(10, 10, 100, 50);

// This is the gray outlined box in my notes
context.strokeRect(10, 100, 100, 50);

// This is the red T in my notes
context.beginPath();
context.moveTo(130, 50);
context.lineTo(180, 50);
context.moveTo(155, 50);
context.lineTo(155, 90);
context.strokeStyle = "#c00";
context.lineWidth = 15;
context.stroke();

// This is the yellow circle in my notes
context.beginPath();
context.arc(200, 200, 30, 0, Math.PI * 2, false);
context.strokeStyle = "#ff0";
context.lineWidth = 4;
context.stroke();

// This is the green colored Hello text in my notes
context.fillStyle = "#0c0"; // a blue fill color
context.font = "bold 26px sans-serif";
context.fillText("Hello", 20, 200);
