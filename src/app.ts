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

const bug = new PIXI.Container();

const legTexture = PIXI.Texture.from('assets/leg.png');
legTexture.defaultAnchor.set(1, 0.25);

const legs = [
    new PIXI.Sprite(legTexture),
    new PIXI.Sprite(legTexture),
    new PIXI.Sprite(legTexture),
    new PIXI.Sprite(legTexture),
    new PIXI.Sprite(legTexture),
    new PIXI.Sprite(legTexture),
];

for (let leg = 0; leg < legs.length; leg++) {
    legs[leg].rotation = Math.PI / 2;

    if (leg == 0 || leg == 1 || leg == 2) {
        legs[leg].scale.set(0.3, 0.3);
    } else if (leg == 3 || leg == 4 || leg == 5) {
        legs[leg].scale.set(-0.3, 0.3);
    }

    if (leg == 0) {
        legs[leg].position.set(-25, -20);
    } else if (leg == 1) {
        legs[leg].position.set(-10, -20);
    } else if (leg == 2) {
        legs[leg].position.set(5, -15);
    } else if (leg == 3) {
        legs[leg].position.set(-25, 20);
    } else if (leg == 4) {
        legs[leg].position.set(-10, 20);
    } else if (leg == 5) {
        legs[leg].position.set(5, 15);
    }
}

for (let leg of legs) {
    bug.addChild(leg);
}

bug.position.set(100);

app.stage.addChild(background);
app.stage.addChild(eyes);
app.stage.addChild(bug);

app.ticker.add(update);

function animateEyes(time: number) {
    leftPupil.y = Math.sin(time / 20) * 3;
    rightPupil.y = Math.sin(time / 20) * 3;
}

let elapsed = 0;

function update(dt: number) {
    elapsed += dt;

    animateEyes(elapsed);
}