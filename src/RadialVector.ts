import { Vector2D } from "./Vector2D";

export class RadialVector {
    private _degrees : number = 0;
    radius : number = 0;

    get degrees()
    {
        return this._degrees;
    }

    set degrees(value: number)
    {
        this._degrees = value % 360;
    }

    constructor(degrees : number = 0, radius : number = 0)
    {
        this._degrees = degrees;
        this.radius = radius;
    }

    addDegrees(value : number) : void {
        this.degrees = this._degrees + value;
    }

    fromVector2D(srcVector: Vector2D): Vector2D {
        let vector : Vector2D = new Vector2D(srcVector.x, srcVector.y);
        let rad : number = (this._degrees * Math.PI)/180
        vector.x += Math.cos(rad) * this.radius;
        vector.y += Math.sin(rad) * this.radius * -1;
        return vector;
    }
}