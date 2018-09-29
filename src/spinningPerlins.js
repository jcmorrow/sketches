import _ from "underscore";

const LINKS_COUNT = 1000;
const SIZE = 800;
const MAX_LENGTH = 20;
const MAX_ANGLE = 3.1456;
const RADIUS = 4;
const TIME_SCALE = 0.001;

const randomAngle = () => Math.PI * Math.random() * 2.0;
const randomGroup = () => (Math.random() > 0.5 ? 0 : 1);

class Link {
  constructor(l) {
    this.next = l;
    this.length = Math.random() * MAX_LENGTH;
  }

  translate(p) {
    window.p.translate(0, this.length);
  }

  draw(p, time) {
    window.p.ellipse(0, 0, RADIUS, RADIUS);
    if (this.next) {
      window.p.push();

      window.p.rotate(window.p.PI * window.p.noise(this.length, time));

      window.p.line(0, RADIUS / 2, 0, this.next.length - RADIUS / 2);
      this.next.translate(window.p);
      this.next.draw(window.p, time);
      window.p.pop();
    }
  }
}

const spinningPerlins = p => {
  p.setup = () => {
    p.frameRate(10);
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
    p.push();
    p.translate(SIZE / 2, SIZE / 2);
    this.link.translate(p);
    this.link.draw(p, this.time);
    p.pop();
    this.time = this.time + TIME_SCALE;
  };
};

export default spinningPerlins;
