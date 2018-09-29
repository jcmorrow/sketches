import _ from "underscore";

const LINKS_COUNT = 1000;
const MAX_LENGTH = 10;
const RADIUS = 4;
const SIZE = 800;
const TIME_SCALE = 0.001;

class Link {
  constructor(l) {
    this.angle = 0;
    this.length = Math.random() * MAX_LENGTH;
    this.next = l;
  }

  draw(p, time) {
    if (this.next) {
      p.ellipse(0, 0, RADIUS, RADIUS);
      p.push();

      this.angle = p.noise(this.length, time);
      p.rotate(p.PI * this.angle);

      p.line(0, RADIUS / 2, 0, this.next.length - RADIUS / 2);
      p.translate(0, this.next.length);
      this.next.draw(p, time);
      p.pop();
    }
  }
}

const spinningPerlins = p => {
  p.setup = () => {
    p = p;
    const canvas = p.createCanvas(SIZE, SIZE);
    canvas.parent("sketch");

    for (let i = 0; i < LINKS_COUNT; i++) {
      this.link = new Link(this.link);
    }

    this.time = 0;
  };

  p.draw = () => {
    p.clear();
    p.stroke(0, 0, 0, 100);
    p.translate(SIZE / 2, SIZE / 2);
    this.link.draw(p, this.time);
    this.time = this.time + TIME_SCALE;
  };
};

export default spinningPerlins;
