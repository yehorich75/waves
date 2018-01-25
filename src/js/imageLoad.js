import 'pixi.js';
import {TimelineMax} from 'gsap';

export default class ImageLoad {
  constructor($wrapper) {

    this.wrapper = $wrapper;
    this.width = $wrapper.width();
    this.height = $wrapper.height();

    this.app = new PIXI.Application(this.width, this.height,{backgroundColor: 0x000000});

    this.wrapper.append(this.app.view);
    
    this.container = new PIXI.Container();
    this.app.stage.addChild(this.container);
  }

  startAnimation() {

  }

  hover() {
        
  }
}
