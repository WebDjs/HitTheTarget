const canvasBg = document.getElementById("beckground-canvas");
const ctxBg = canvasBg.getContext("2d");

const canvasMain = document.getElementById("main-canvas");
const ctxMain = canvasMain.getContext("2d");


Canvas.strokeRectangle(ctxMain, 0, 0, 70, 70, "red");
Canvas.strokeRectangle(ctxBg, 0, 0, 50, 50, "green");