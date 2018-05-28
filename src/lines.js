import _ from 'underscore';

const SIZE = 800;

const lines = (p) => {
  p.setup = () => {
    const canvas = p.createCanvas(SIZE, SIZE);
    canvas.parent('sketch');
    window.p = p;
  }

  p.draw = () => {
    p.rotate(-1 * Math.PI / 2);
    p.translate(-300, 50);

    p.background("#FFF");
    p.stroke('#000');
    p.strokeWeight(1);
    p.noLoop();

    _.range(1000).forEach((i) => {
      const rotation = p.randomGaussian() * .01;
      const translateX = p.randomGaussian() * 5;
      const translateY = p.randomGaussian() * 5;
      console.log(rotation);
      p.rotate(rotation);
      p.translate(translateX, translateY);
      perlinLine(p);
    });
  }

  p.mousePressed = () => {};
}

export default lines;

const LINE = [0, 0, 5, 2, 8, 40, 3, 45, 0, 47];

const SCALE = 12;

const point = (index) => ([LINE[index * 2], LINE[index * 2 + 1]]);

const perlinLine = (p) => {
  _.range(LINE.length / 2 - 1).forEach(
    (i) => {
      p.line(
        point(i)[0] * SCALE,
        point(i)[1] * SCALE,
        point(i + 1)[0] * SCALE,
        point(i + 1)[1] * SCALE,
      )
    }
  );
}
