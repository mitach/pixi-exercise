import * as PIXI from 'pixi.js';
import { addBody, addEyes, addLegs } from './bugFactory';

const app = new PIXI.Application({
    width: 800,
    height: 600,
});

document.body.appendChild(app.view as HTMLCanvasElement);

const background = new PIXI.Graphics();
background.beginFill(0xcccccc);
background.drawRect(0, 0, 800, 600);
background.endFill();

const bug = new PIXI.Container();

const legs = addLegs(bug);
addBody(bug);
const [leftPupil, rightPupil] = addEyes(bug);

bug.position.set(100);

app.stage.addChild(background);
app.stage.addChild(bug);

app.ticker.add(update);

function animateEyes(time: number) {
    leftPupil.y = Math.sin(time / 20) * 3;
    rightPupil.y = Math.sin(time / 20) * 3;
}

function animateLegs(time: number) {
    for (let leg = 0; leg < legs.length; leg++) {
    
        if (leg == 0 || leg == 2 || leg == 3 || leg == 5) {
            legs[leg].rotation = (Math.PI / 2) + Math.sin(time / 5) * (Math.PI / 12)
        } else if (leg == 1 || leg == 4) {
            legs[leg].rotation = (Math.PI / 2) - Math.sin(time / 5) * (Math.PI / 12);
        }
    }
}

let elapsed = 0;

function update(dt: number) {
    elapsed += dt;

    animateEyes(elapsed);
    animateLegs(elapsed);
}