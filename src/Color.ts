export class Color {
    private _r : number = 0;
    private _g : number = 0;
    private _b : number = 0;

    constructor (r: number = 0, g: number = 0, b: number = 0) {
        this.r = r;
        this.g = g;
        this.b = b;
    }

    public get r() : number{
        return this._r;
    }

    public set r(value : number) {
        if(value < 0 || value > 255)
        {
            throw new Error('Invalid color value');
        }
        this._r = value;
    }

    public get g() : number{
        return this._g;
    }

    public set g(value : number) {
        if(value < 0 || value > 255)
        {
            throw new Error('Invalid color value');
        }
        this._g = value;
    }
    
    public get b() : number{
        return this._b;
    }

    public set b(value : number) {
        if(value < 0 || value > 255)
        {
            throw new Error('Invalid color value');
        }
        this._b = value;
    }

    public toString() : string {
        return `rgb(${this._r}, ${this._g}, ${this._b})`;
    }
}