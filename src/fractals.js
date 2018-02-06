import _ from 'underscore';

const fractals = (p) => {
  window.p5 = p;
  p.setup = () => {
    this.leftX = 20;
    this.topY = 20;
    this.rectHeight = 260;
    this.rectWidth = 600;
    p.colorMode(p.HSB);
    p.background(0, 0, 100);

    let canvas = p.createCanvas(600, 300);
    canvas.parent('sketch');
  }

  const gauss = (mean, variance) => (
    Math.abs(mean + variance * p.randomGaussian())
  )

  const left = (width) => (this.leftX + width);
  const minWidth = (width) => (this.minimumWidth + width);
  const top = (width) => (this.topY + width);

  const triangle = (p, unit) => {
    p.triangle(0, 0, unit, unit, 2 * unit, 0);
  }

  const marker = (p, x, y) => {
    p.ellipse(x, y, 5, 5);
  }

  p.draw = () => {
    p.noLoop();
    // p.fill(0, 0, 50, 1);

    p.strokeWeight(1);
    p.stroke(0, 0, 50, 1);
    [200, 100, 50].map((i) => (triangle(p, i)));
  }

  p.mousePressed = () => {
    p.clear();
    p.loop();
  };
}

export default fractals;
