import _ from 'underscore';

const perlin = (p) => {
  window.p5 = p;
  p.setup = () => {
    p.background(0, 0, 100);

    const canvas = p.createCanvas(700, 700);
    canvas.parent('sketch');
    this.time = 0;
  }

  const perlinLine = (p, x, y, time) => {
    const noise = p.noise(x, y, time);
    p.rotate(noise);
    // p.line(x, y, x + 10, y + 10);
    line(p, x, y, noise * 360);
  };

  const line = (p, x, y, angle) => {
    p.line(x, y, p.sin(angle) * 10 +  x, p.cos(angle) * 10 + y);
  };

  p.draw = () => {
    p.stroke(200, 200, 200);
    this.time = this.time + .01;
    _.range(50).map((x) => {
      _.range(50).map((y) => {
        perlinLine(p, x * 10, y * 10, this.time);
      });
    });
    p.clear();
  }

  p.mousePressed = () => {
  };
}

export default perlin;
