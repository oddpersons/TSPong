import { Vector2D } from "./Vector2D";
import { Color } from "./Color";
import { Size } from "./Size";

export abstract class DrawableObject {
    abstract coords : Vector2D;
    abstract color : Color;

    hasMoved : boolean = false;

    abstract draw(context : CanvasRenderingContext2D) : void;
    abstract update() : void;
    abstract generateColisionVerticies(compareObject : DrawableObject | null) : Array<Vector2D>;
    abstract generateCenter(compareObject : DrawableObject) : Vector2D;

    abstract collisionCheck(gameObjects: Array<DrawableObject>) : Array<Vector2D[]>;
}