import _ from 'underscore';
import { traceSquare } from './fractal-square';

const lineDrawing = (p) => {
  window.p5 = p;
  p.setup = () => {
    this.leftX = 20;
    this.topY = 20;
    this.rectHeight = 260;
    this.minimumWidth = 360;

    p.colorMode(p.HSB);
    p.background(0, 0, 100);

    let canvas = p.createCanvas(500, 500);
    canvas.parent('sketch');
    this.i = 0;
  }

  const gauss = (mean, variance) => (
    Math.abs(mean + variance * p.randomGaussian())
  )
  const left = (width) => (this.leftX + width);
  const top = (width) => (this.topY + width);

  p.draw = () => {
    p.strokeWeight(.2);
    p.stroke(0, 0, 50, 1);
    traceSquare({
      p,
      x: 10,
      y: 10,
      size: 400,
      frames: 25,
      frame: this.i,
    });
    this.i = this.i + 1;
  }

  p.mousePressed = () => {
  };
}

export default lineDrawing;
