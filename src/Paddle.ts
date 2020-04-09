import { Vector2D } from "./Vector2D";
import { DrawableObject } from "./DrawableObject";
import { Color } from "./Color";
import { Size } from "./Size";
import { Rectangle } from "./Rectangle";

export class Paddle extends Rectangle {
    coords : Vector2D = new Vector2D(25, 25);
    size : Size = new Size(30, 5);
    color : Color = new Color(0, 0, 255);
    EventMap : Map<string, () => void> = new Map<string, () => void>();
    keys : Map<string, boolean> = new Map<string,boolean>();

    draw(context: CanvasRenderingContext2D): void {
        context.beginPath();
        context.fillStyle = this.color.toString();
        context.rect(this.coords.x, this.coords.y, this.size.width, this.size.height);
        context.fill();
        context.closePath();
        context.beginPath();
        //this.generateColisionVerticies(null).forEach(o => {
        //    context.fillRect(o.x,o.y,5,5)
        //});
        context.closePath();
        this.hasMoved = false;
    }
    
    update() : void {
        this.EventMap.forEach((value: () => void, name: string) => 
            {
                let key = this.keys.get(name);
                if(key != undefined && key.valueOf() === true){
                    let f = value.bind(this);
                    f();
                }
            }
        );
    }

    moveUp() : void {
        this.coords.y -= 5;
        this.hasMoved = true;
    }
    moveDown() : void {
        this.coords.y += 5;
        this.hasMoved = true;
    }
}