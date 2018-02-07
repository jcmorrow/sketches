import _ from 'underscore';

const fractals = (p) => {
  window.p5 = p;
  p.setup = () => {
    this.leftX = 20;
    this.topY = 20;
    this.rectHeight = 600;
    this.rectWidth = 1200;
    p.colorMode(p.HSB);
    p.background(0, 0, 100);

    let canvas = p.createCanvas(this.rectWidth, this.rectHeight);
    canvas.parent('sketch');
  }

  const gauss = (mean, variance) => (
    Math.abs(mean + variance * p.randomGaussian())
  )

  const left = (width) => (this.leftX + width);
  const minWidth = (width) => (this.minimumWidth + width);
  const top = (width) => (this.topY + width);

  const triangle = ({ p, x = 0, y = 0, unit }) => {
    p.triangle(x, y, x + unit, y + unit, x + 2 * unit, y);
  }

  const triangleFill = (p, unit) => {
    let x = 0;
    let y = 0;
    while(x < this.rectWidth) {
      triangle({ p, unit, x });
      x = x + unit * 2;
    }
  }

  p.draw = () => {
    p.noLoop();

    p.strokeWeight(1);
    p.stroke(0, 0, 50, 1);
    [200, 100, 50, 25].map((unit) => (triangleFill(p, unit)));
  }

  p.mousePressed = () => {
    p.clear();
    p.loop();
  };
}

export default fractals;
