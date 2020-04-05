import { Ball } from "./Ball";
import { Paddle } from "./Paddle";

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

    let ball2 : Ball = new Ball(200, 200);
    ball2.color.g = 255;
    ball2.draw(ctx);

    let paddle : Paddle = new Paddle();
    paddle.draw(ctx);
}