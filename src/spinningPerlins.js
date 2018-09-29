import _ from "underscore";

const LINKS_COUNT = 1000;
const MAX_LENGTH = 10;
const RADIUS = 10;
const SIZE = 800;
const TIME_SCALE = 0.001;

class Link {
  constructor(l) {
    this.length = Math.random() * MAX_LENGTH;
    this.next = l;
  }

  draw(p, time) {
    if (this.next) {
      const noise = p.noise(this.length, time);
      p.ellipse(0, 0, this.length, this.length);
      p.push();

      p.rotate(p.PI * noise);

      // p.line(0, RADIUS / 2, 0, this.next.length - RADIUS / 2);
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
    // p.stroke(0, 0, 0, 25);
    // p.noStroke();
    p.fill(255, 255, 255);
    p.translate(SIZE / 2, SIZE / 2);
    this.link.draw(p, this.time);
    this.time = this.time + TIME_SCALE;
  };
};

export default spinningPerlins;
