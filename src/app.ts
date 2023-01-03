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

app.stage.addChild(background);

app.ticker.add(update);

function update(dt: number) {

}