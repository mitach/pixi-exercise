import * as PIXI from 'pixi.js';

const app = new PIXI.Application({
    width: 800,
    height: 600,
});

document.body.appendChild(app.view as HTMLCanvasElement);

const background = new PIXI.Graphics();
background.beginFill(0xcccccc);
background.drawRect(0, 0, 800, 600);
background.endFill();

const eyes = new PIXI.Container();

const sclera = new PIXI.Graphics();
sclera.beginFill(0xffffff);
sclera.drawCircle(10, 10, 7);
sclera.drawCircle(10, 30, 7);
sclera.endFill();

const leftPupil = new PIXI.Graphics();
leftPupil.beginFill(0x000000);
leftPupil.drawCircle(10, 10, 5);
leftPupil.endFill();

const rightPupil = new PIXI.Graphics();
rightPupil.beginFill(0x000000);
rightPupil.drawCircle(10, 30, 5);
rightPupil.endFill();

eyes.addChild(sclera);
eyes.addChild(leftPupil);
eyes.addChild(rightPupil);

app.stage.addChild(background);
app.stage.addChild(eyes);

app.ticker.add(update);

function update(dt: number) {

}