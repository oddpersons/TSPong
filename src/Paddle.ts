import { Vector2D } from "./Vector2D";
import { DrawableObject } from "./DrawableObject";
import { Color } from "./Color";
import { Size } from "./Size";

export class Paddle implements DrawableObject{
    coords : Vector2D = new Vector2D(25, 25);
    size : Size = new Size(30, 5);
    color: Color = new Color(0, 0, 255);

    draw(context: CanvasRenderingContext2D): void {
        context.beginPath();
        context.fillStyle = this.color.toString();
        context.rect(this.coords.x, this.coords.y, this.size.width, this.size.height);
        context.fill();
        context.closePath();
    }
    
    update() : void {
        throw new Error("Method not implemented.");
    }
}