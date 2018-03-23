import _ from 'underscore';

const SIZE = 800;

const lines = (p) => {
  p.setup = () => {
    const canvas = p.createCanvas(SIZE, SIZE);
    canvas.parent('sketch');
  }

  p.draw = () => {
  }

  p.mousePressed = () => {};
}

export default lines;
