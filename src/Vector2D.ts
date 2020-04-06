export class Vector2D {
    public x : number;
    public y : number;

    constructor(xCoord: number = 0, yCoord: number = 0)
    {
        this.x = xCoord;
        this.y = yCoord;
    }

    toString = () : string => {
        return `x: ${this.x}, y: ${this.y}`;
    }
}