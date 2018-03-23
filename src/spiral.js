import _ from 'underscore';

const size = 800;

const spiral = (p) => {
  p.setup = () => {
    const canvas = p.createCanvas(size, size);
    canvas.parent('sketch');

    this.i = 0;
  }

  p.draw = () => {
    p.background(244, 248, 252);
    p.translate(size / 2, size / 2);

    recursiveSpiral(
      Math.atan2(p.mouseY - size / 2, p.mouseX - size / 2) / 2,
      // Math.sqrt((p.mouseX - size / 2) ** 2 + (p.mouseY - size / 2) ** 2) / 2,
    )


  }

  const recursiveSpiral = (angle, length=1) => {
    p.push();
    p.rotate(angle);
    p.line(0, 0, length, length);
    p.translate(length, length);
    if (length < 300) {
      recursiveSpiral(angle, length + .5);
    }
    p.pop()
  }

  p.mousePressed = () => {
    p.loop();
    p.noLoop()
  };
}

export default spiral;
