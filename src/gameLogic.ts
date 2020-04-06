import { Ball } from "./Ball";
import { Paddle } from "./Paddle";
import { DrawableObject } from "./DrawableObject";
import { Color } from "./Color";

class GameLogic {
    keys : Map<string, boolean> = new Map();
    drawableObjects : Array<DrawableObject> = new Array<DrawableObject>();
    canvas : HTMLCanvasElement;

    onKeyDown = (e : KeyboardEvent) => { 
        this.keys.set(e.code, true); 
    }
    onKeyUp = (e: KeyboardEvent) => {
        this.keys.set(e.code, false); 
    }


    constructor()
    {
        this.canvas = document.getElementById("gameCanvas") as HTMLCanvasElement;
        if(this.canvas == null)
        {
            throw new Error('Canvas is null');
        }

        let ball : Ball = new Ball();
        this.drawableObjects.push(ball);
    
        let ball2 : Ball = new Ball(200, 200);
        ball2.color.g = 255;
        this.drawableObjects.push(ball2);
    
        let paddle : Paddle = new Paddle();
        paddle.keys = this.keys;
        paddle.EventMap.set("KeyW", paddle.moveUp);
        paddle.EventMap.set("KeyS", paddle.moveDown);

        this.drawableObjects.push(paddle);

        paddle = new Paddle();
        paddle.color = new Color(0, 255, 0);
        paddle.coords.x = this.canvas.width - 25;
        paddle.keys = this.keys;
        paddle.EventMap.set("ArrowUp", paddle.moveUp);
        paddle.EventMap.set("ArrowDown", paddle.moveDown);
        this.drawableObjects.push(paddle);

        window.onkeydown = this.onKeyDown;
        window.onkeyup = this.onKeyUp;
        window.requestAnimationFrame(this.animationFrame);
    }

    animationFrame = (time: number) : void => {
        let context : CanvasRenderingContext2D;

        let ctx = this.canvas.getContext('2d');
        if(ctx == null)
        {
            throw new Error('Could not get 2d context for canvas');
        }
        context = ctx as CanvasRenderingContext2D;
        context.clearRect(0,0, this.canvas.width, this.canvas.height);
        this.drawableObjects.forEach(o => {
            o.update();
            o.draw(context)
        });

        window.requestAnimationFrame(this.animationFrame);
    }
}

let g : GameLogic;
window.onload = function() {
    g = new GameLogic();
}



