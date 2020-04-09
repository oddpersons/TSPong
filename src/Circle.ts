import { DrawableObject } from "./DrawableObject";
import { RadialVector } from "./RadialVector";
import { Vector2D } from "./Vector2D";

export abstract class Circle extends DrawableObject {
    abstract velocity : RadialVector;
    abstract radius : number;

    generateCenter(compareObject : DrawableObject) : Vector2D{
        return this.coords;
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
            let slope : number = (x.x - this.coords.x) / (x.y - this.coords.y);
            console.log(`angle ${slope}`)
            let rv = new RadialVector((Math.atan(slope) * 180)/Math.PI, this.radius);
            v = rv.fromVector2D(this.coords);

            return v;
        });
        
        return results;
    }
}