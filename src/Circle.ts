import { DrawableObject } from "./DrawableObject";
import { RadialVector } from "./RadialVector";
import { Vector2D } from "./Vector2D";
import { Rectangle } from "./Rectangle";
import { Color } from "./Color";

export abstract class Circle extends DrawableObject {
    abstract velocity : RadialVector;
    abstract radius : number;
    drawableObjects : Array<DrawableObject> = new Array<DrawableObject>();

    generateCenter(compareObject : DrawableObject) : Vector2D{
        return this.coords;
    }

    draw(context : CanvasRenderingContext2D) : void
    {
        context.beginPath();
        context.fillStyle = this.color.toString();
        context.arc(this.coords.x, this.coords.y, this.radius, 0, 2 * Math.PI);
        context.fill();
        context.closePath();
/*        context.beginPath();
        this.drawableObjects.forEach(p => {
            this.generateColisionVerticies(p).forEach(o => {
                context.fillStyle = new Color(0,0,0).toString();
                context.fillRect(o.x,o.y,5,5)
                //console.log(`Filled rect at ${o.x}, ${o.y}`);
            });
        })
        context.closePath();
*/
        this.hasMoved = false;
    }

    generateColisionVerticies(compareObject : DrawableObject | null) : Array<Vector2D>
    {
        let results : Array<Vector2D>;
        let remotePoints : Array<Vector2D>;

        if(compareObject === this)
        {
            return new Array<Vector2D>();
        }

        if(compareObject === null)
        {
            results = new Array<Vector2D>()
            results.push(this.coords);
            return results;
        }
        
        remotePoints = compareObject.generateColisionVerticies(this);
        results = remotePoints.map(x => {
            let v : Vector2D; 
            let rv = new RadialVector(((Math.atan2((this.coords.y - x.y), (this.coords.x - x.x)) + Math.PI) * 180)*-1/Math.PI, this.radius);
            v = rv.fromVector2D(this.coords);
            return v;
        });
        results.push((new RadialVector(0, this.radius)).fromVector2D(this.coords));
        results.push((new RadialVector(90, this.radius)).fromVector2D(this.coords));
        results.push((new RadialVector(180, this.radius)).fromVector2D(this.coords));
        results.push((new RadialVector(270, this.radius)).fromVector2D(this.coords));
        
        return results;
    }

    collisionCheck(gameObjects: Array<DrawableObject>) : Array<Vector2D[]> {
        let collisions = new Array<Vector2D[]>();
        if(this.hasMoved === true)
        {
            //look at center + diameter or bounding box and see if it can hit the box before checking all 8 possible impact points?
            collisions = gameObjects.flatMap<Vector2D[]>(o => {
                let mr : Array<Vector2D> = new Array<Vector2D>();
                if(o instanceof Circle)
                {
                    
                }
                else if (o instanceof Rectangle)
                {
                    mr = this.generateColisionVerticies(o).filter(cv => {
                        let ret =  o.pointColisionCheck(cv);
                        return ret;
                    });
                }
                return mr;
            }).filter(v => v !== undefined);
        }
        return collisions;
    }
}