import * as PIXI from 'pixi.js';

export function addLegs(bug: PIXI.Container) {
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

    return legs;
}

export function addBody(bug: PIXI.Container) {
    const body = PIXI.Sprite.from('assets/bug.png');
    body.scale.set(0.3);
    body.rotation = Math.PI / 2;
    body.position.set(45, -30);

    bug.addChild(body);
}

export function addEyes(bug: PIXI.Container) {
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

    eyes.position.set(15, -20);

    bug.addChild(eyes);

    return [leftPupil, rightPupil];
}