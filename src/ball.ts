import { Vector2D } from "./Vector2D"
import { Color } from "./Color";

export class Ball {
    coords : Vector2D = new Vector2D();
    velocity : Vector2D = new Vector2D();
    //src : string = "";
    color : Color = new Color(255, 0, 0);
    model : Path2D = new Path2D();

    constructor()
    {
        this.model.arc(100, 35, 25, 0, 2 * Math.PI);
    }

    draw(context : CanvasRenderingContext2D)
    {
        //backup fillstyle
        let oldFillStyle = context.fillStyle;
        context.fillStyle = this.color.toString();
        context.fill(this.model);
        //restore fill style
        context.fillStyle = oldFillStyle;
    }
}