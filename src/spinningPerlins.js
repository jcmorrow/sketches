import _ from "underscore";

const LINKS_COUNT = 100;
const MAX_LENGTH = 20;
const RADIUS = 20;
const SIZE = 2000;
const TIME_SCALE = 0.001;

class Link {
  constructor(l) {
    this.length = Math.random() * MAX_LENGTH;
    this.next = l;
    this.angle = 0;
  }

  draw(p, time, currentPoint) {
    if (this.next) {
      const noise = p.noise(this.length, time, this.angle * TIME_SCALE);
      this.angle = noise / 2.0;
      // p.ellipse(0, 0, this.length, this.length);
      p.push();

      p.rotate(p.PI * this.angle);

      p.stroke(255 * (1 - this.angle));
      p.line(0, 0, 0, this.next.length);
      p.translate(0, this.next.length);
      this.next.draw(p, time, currentPoint);
      p.pop();
    }
  }
}

const spinningPerlins = p => {
  p.setup = () => {
    window.p = p;
    const canvas = p.createCanvas(SIZE, SIZE);
    canvas.parent("sketch");

    for (let i = 0; i < LINKS_COUNT; i++) {
      this.link = new Link(this.link);
    }

    this.time = 0;
  };

  p.draw = () => {
    p.clear();
    // p.stroke(0, 0, 0, 25);
    // p.noStroke();
    p.frameRate(50);
    p.fill(255, 255, 255);
    p.translate(SIZE / 2, SIZE / 2);
    this.link.draw(p, this.time);
    this.time = this.time + TIME_SCALE;
  };
};

export default spinningPerlins;
