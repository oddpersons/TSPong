import { Vector2D } from "./Vector2D";
import { DrawableObject } from "./DrawableObject";
import { Color } from "./Color";
import { Size } from "./Size";
import { Rectangle } from "./Rectangle";

export class Paddle extends Rectangle {
    coords : Vector2D = new Vector2D(25, 25);
    size : Size = new Size(30, 5);
    color : Color = new Color(0, 0, 255);
    EventMap : Map<string, () => void> = new Map<string, () => void>();
    keys : Map<string, boolean> = new Map<string,boolean>();

    update() : void {
        this.EventMap.forEach((value: () => void, name: string) => 
            {
                let key = this.keys.get(name);
                if(key != undefined && key.valueOf() === true){
                    let f = value.bind(this);
                    f();
                }
            }
        );

        let collisions = this.collisionCheck(this.drawableObjects);
        if(collisions.length > 0)
        {
            console.log('collsision from paddle!');
        }
    }

    moveUp() : void {
        this.coords.y -= 5;
        this.hasMoved = true;
    }
    moveDown() : void {
        this.coords.y += 5;
        this.hasMoved = true;
    }
}