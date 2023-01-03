import * as PIXI from 'pixi.js';
import { Bug } from './Bug';

const app = new PIXI.Application({
    width: 800,
    height: 600,
});

document.body.appendChild(app.view as HTMLCanvasElement);

const background = new PIXI.Graphics();
background.beginFill(0xcccccc);
background.drawRect(0, 0, 800, 600);
background.endFill();

app.stage.addChild(background);

const bug = new Bug(400, 300, 0, 0);

app.stage.addChild(bug.container);

app.ticker.add(update);

let elapsed = 0;

function update(dt: number) {
    elapsed += dt;

    bug.animateEyes(elapsed);
    bug.animateLegs(elapsed);
}