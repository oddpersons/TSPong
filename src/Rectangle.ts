import { Vector2D } from "./Vector2D";
import { Size } from "./Size";
import { DrawableObject } from "./DrawableObject";
import { Circle } from "./Circle";

export abstract class Rectangle extends DrawableObject {
    abstract coords : Vector2D;
    abstract size : Size;
    drawableObjects : Array<DrawableObject> = new Array<DrawableObject>();

    draw(context: CanvasRenderingContext2D): void {
        context.beginPath();
        context.fillStyle = this.color.toString();
        context.rect(this.coords.x, this.coords.y, this.size.width, this.size.height);
        context.fill();
        context.closePath();
        //context.beginPath();
        //this.generateColisionVerticies(null).forEach(o => {
        //    context.fillRect(o.x,o.y,5,5)
        //});
        //context.closePath();
        this.hasMoved = false;
    }

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

    collisionCheck(gameObjects: Array<DrawableObject>) : Array<DrawableObject> {
        let collisions = new Array<DrawableObject>();
        if(this.hasMoved === true)
        {
            collisions = gameObjects.filter(o => {
                //look at center + diameter and see if it can hit the box before checking all 8 possible impact points?
                let ret = o.generateColisionVerticies(this).filter(cv => {
                    return this.pointColisionCheck(cv);
                });
                return ret.length > 0;
            });
        }
        return collisions;
    }

    pointColisionCheck(v : Vector2D) : boolean {
        //See if this point is in the box
        if( v.x > this.coords.x && 
            v.x < this.coords.x + this.size.width &&
            v.y > this.coords.y && 
            v.y < this.coords.y + this.size.height
            ){
                return true;
            }
        return false;
    }
}