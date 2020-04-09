import { Vector2D } from "./Vector2D";
import { Size } from "./Size";
import { DrawableObject } from "./DrawableObject";

export abstract class Rectangle extends DrawableObject {
    abstract coords : Vector2D;
    abstract size : Size;

    generateCenter(compareObject : DrawableObject) : Vector2D{
        let halfWidth : number = this.coords.x + (this.size.width / 2);
        let halfHeight : number = this.coords.y + (this.size.height / 2);
        return new Vector2D(halfWidth, halfHeight);
    }

    generateColisionVerticies(compareObject : DrawableObject | null) : Array<Vector2D>
    {
        let results = new Array<Vector2D>();
        
        results.push(this.coords);
        results.push(new Vector2D(this.coords.x, this.coords.y + this.size.height));
        results.push(new Vector2D(this.coords.x + this.size.width, this.coords.y));
        results.push(new Vector2D(this.coords.x + this.size.width, this.coords.y + this.size.height));
        
        return results;
    }
}