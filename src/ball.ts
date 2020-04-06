import { Vector2D } from "./Vector2D"
import { Color } from "./Color";
import { DrawableObject } from "./DrawableObject";
import { RadialVector } from "./RadialVector";

export class Ball implements DrawableObject{
    coords : Vector2D = new Vector2D();
    velocity : RadialVector = new RadialVector(270, 5);
    radius : number = 25;
    color : Color = new Color(255, 0, 0);

    constructor(x : number = 100, y: number = 100)
    {
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
    }

    update() : void {
        this.coords = this.velocity.fromVector2D(this.coords);
    }
}