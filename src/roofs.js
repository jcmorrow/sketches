import _ from 'underscore';

const size = 800;
const tileCount = 30;
const tileRows = 15;

const roof = (p) => (
  (x, y, size) => {
    const rotation = Math.random() * Math.PI * 2;
    _.range(tileRows).forEach(
      (row) => {
        _.range(tileCount).forEach(
          (column) => {
            p.push();
            p.translate(x, y);
            p.rotate(rotation);
            p.translate((size - 20) / tileCount * column, (size - 20) / tileRows * row);
            const noise = p.noise(row, column);
            const noiseVector = window.Vector.mult(
              window.Vector.fromAngle(noise * Math.PI * 2),
              noise,
            );
            p.translate(noiseVector.x, noiseVector.y);
            p.rect(0, 0, (size - 20) / tileCount, (size - 20) / tileRows);
            p.pop();
          }
        );
      }
    );
  }
);

const roofs = (p) => {
  p.setup = () => {
    window.p = p;
    const canvas = p.createCanvas(size, size);
    canvas.parent('sketch');
    this.roof = roof(p);
  }

  p.draw = () => {
    this.roof(0, 0, 100);
    this.roof(100, 100, 100);
    this.roof(150, 275, 100);
    this.roof(300, 100, 100);
    p.noLoop();
  }

  p.mousePressed = () => {};
}

export default roofs;
