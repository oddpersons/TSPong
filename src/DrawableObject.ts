import { Vector2D } from "./Vector2D"
import { Color } from "./Color";

export abstract class DrawableObject {
    abstract coords : Vector2D;
    abstract color : Color;

    abstract draw(context : CanvasRenderingContext2D) : void;
    abstract update() : void;
}