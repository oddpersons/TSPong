import { Ball } from "./ball";

window.onload = function() {
    let canvas = document.getElementById("gameCanvas") as HTMLCanvasElement;
    if(canvas == null)
    {
        console.log('Canvas is null');
        return;
    }
    let dimensions = {
        width: canvas.width,
        height: canvas.height
    }

    let ctx = canvas.getContext('2d');
    if(ctx == null)
    {
        console.log('Could not get 2d context for canvas');
        return;
    }
    let ball : Ball = new Ball();
    ball.draw(ctx);
}