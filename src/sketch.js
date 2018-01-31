import _ from 'underscore';

const sketch = (p) => {
  window.p5 = p;

  p.setup = () => {
    this.leftX = 20;
    this.topY = 20;
    this.rectHeight = 260;
    this.minimumWidth = 360;
    p.colorMode(p.HSB);
    p.noStroke()
    p.background(0, 0, 100);

    let canvas = p.createCanvas(600, 300);
    canvas.parent('sketch');
  }

  p.draw = () => {
    _.range(20).map((i) => {
      const actualWidth = this.minimumWidth + 10 * i
      p.fill(0, 0, 50, .1);
      p.rect(this.leftX, this.topY, actualWidth, this.rectHeight);
      p.noLoop();
    })
  }
}

export default sketch;
