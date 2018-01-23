import 'pixi.js';
import {TimelineMax} from 'gsap';

let app = new PIXI.Application({width: 300, height: 300, backgroundColor: 0x000000});

document.body.appendChild(app.view);

let container = new PIXI.Container();
app.stage.addChild(container);

let bg = PIXI.Sprite.fromImage('img/534x800.jpg');
bg.width = 300;
bg.height = 300;
bg.position.x = 0;
bg.position.y = 0;
container.addChild(bg);

let displacementSprite = PIXI.Sprite.fromImage('img/displacement.jpg');
let displacementFilter = new PIXI.filters.DisplacementFilter(
  displacementSprite
);

displacementFilter.scale.set(1e4);

app.stage.addChild(displacementSprite);

container.filters = [displacementFilter];

$('body').on('click', function() {
  let tl = new TimelineMax();
  tl.to(displacementFilter.scale,2,{x:1,y:1});
});
