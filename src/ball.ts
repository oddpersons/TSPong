import { Vector2D } from "./Vector2D"
import { Color } from "./Color";
import { DrawableObject } from "./DrawableObject";
import { RadialVector } from "./RadialVector";
import { Size } from "./Size";
import { Circle } from "./Circle";

export class Ball extends Circle{
    coords : Vector2D = new Vector2D();
    velocity : RadialVector = new RadialVector(270, 0);
    radius : number = 25;
    color : Color = new Color(255, 0, 0);
    drawableObjects : Array<DrawableObject> = new Array<DrawableObject>();

    constructor(x : number = 100, y: number = 100)
    {
        super();
        this.coords.x = x;
        this.coords.y = y;        
    }

    draw(context : CanvasRenderingContext2D) : void
    {
        context.beginPath();
        context.fillStyle = this.color.toString();
        context.arc(this.coords.x, this.coords.y, this.radius, 0, 2 * Math.PI);
        context.fill();
        context.closePath();
        context.beginPath();
        this.drawableObjects.forEach(p => {
            this.generateColisionVerticies(p).forEach(o => {
                context.fillStyle = new Color(0,0,0).toString();
                context.fillRect(o.x,o.y,5,5)
                //console.log(`Filled rect at ${o.x}, ${o.y}`);
            });
        })
        context.closePath();
        this.hasMoved = false;
    }

    update() : void {
        this.coords = this.velocity.fromVector2D(this.coords);
        this.hasMoved = true;
    }
}