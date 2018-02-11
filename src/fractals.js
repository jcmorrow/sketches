import { fractalSquare, shadedSquare } from './fractal-square';
import { fractalTriangle } from './fractal-triangle';

const fractals = (p) => {
  window.p5 = p;
  p.setup = () => {
    this.leftX = 20;
    this.topY = 20;
    this.rectHeight = 1000;
    this.rectWidth = 1000;
    p.colorMode(p.HSB);
    p.background(0, 0, 100);

    let canvas = p.createCanvas(this.rectWidth, this.rectHeight);
    canvas.parent('sketch');
  }

  var time = 0;

  p.draw = () => {
    // p.noLoop();
    p.strokeWeight(1);
    p.stroke(0, 0, 50, 1);

    time = time + 0.001;
    fractalTriangle({p, size: 650, time});
  }

  p.mousePressed = () => {
    // p.clear();
    // p.loop();
  };
}

export default fractals;
