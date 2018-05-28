import _ from 'underscore';

const perlin = (p) => {
  window.p5 = p;
  p.setup = () => {
    const canvas = p.createCanvas(700, 700);
    canvas.parent('sketch');

    p.stroke(200, 200, 200);

    this.time = 0;
  }

  const perlinLine = (p, x, y, time) => {
    const noise = p.noise(x, y, time);

    p.rotate(noise);

    line(p, x, y, noise * 360);
  };

  const line = (p, x, y, angle) => {
    p.line(x, y, p.sin(angle) * 10 +  x, p.cos(angle) * 10 + y);
  };

  p.draw = () => {
    p.clear();
    p.translate(350, 350);
    p.background(0, 0, 100);
    this.time = this.time + .0005;

    _.range(50).forEach((x) => {
      _.range(50).forEach((y) => {
        perlinLine(p, 100 + x * 5, 100 + y * 5, this.time);
      });
    });
  }

  p.mousePressed = () => {
  };
}

export default perlin;
