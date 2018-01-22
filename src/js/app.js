import PIXI from 'pixi.js';

console.log(PIXI);
let app = new PIXI.Application(300,300,{backgroundColor: 0x000000});

document.body.appendChild(app.view);
