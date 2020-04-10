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

    constructor(x : number = 100, y: number = 100)
    {
        super();
        this.coords.x = x;
        this.coords.y = y;        
    }

    update() : void {
        this.coords = this.velocity.fromVector2D(this.coords);
        this.hasMoved = true;
        let collisions = this.collisionCheck(this.drawableObjects);
        if(collisions.length > 0)
        {
            //console.log('collsision from ball!');
        }
    }
}