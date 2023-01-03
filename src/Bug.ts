import * as PIXI from 'pixi.js';
import { addBody, addEyes, addLegs } from './bugFactory';

export class Bug {
    public container: PIXI.Container;
    public legs: PIXI.Sprite[];
    public pupils: PIXI.Graphics[];
    public speed: number;

    constructor (x, y, direction, speed) {
        this.container = new PIXI.Container();
        this.legs = addLegs(this.container);
        addBody(this.container);
        this.pupils = addEyes(this.container);
        this.container.position.set(x, y);
        this.container.rotation = direction;
        this.speed = speed;
    }

    animateLegs(time: number) {
        for (let leg = 0; leg < this.legs.length; leg++) {
    
            if (leg == 0 || leg == 2 || leg == 3 || leg == 5) {
                this.legs[leg].rotation = (Math.PI / 2) + Math.sin(time / 5) * (Math.PI / 12)
            } else if (leg == 1 || leg == 4) {
                this.legs[leg].rotation = (Math.PI / 2) - Math.sin(time / 5) * (Math.PI / 12);
            }
        }
    }

    animateEyes(time: number) {
        this.pupils[0].y = Math.sin(time / 20) * 3;
        this.pupils[1].y = Math.sin(time / 20) * 3;
    }

    get position() {
        return this.container.position;
    }

    get direction() {
        return this.container.rotation;
    }

    set direction(num) {
        this.container.rotation = num
    }
}