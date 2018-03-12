import _ from 'underscore';

const size = 800;

class Particle {
  constructor(p) {
    this.p = p;
    this.position = this.p.createVector(Math.random() * size, Math.random() * size);
    this.previousPosition = this.position;
    this.velocity = this.p.createVector();
  }

  update = (i) => {
    const noise = this.p.noise(this.position.x * .01, this.position.y * .01, i) * 2 * Math.PI;

    this.acceleration = window.Vector.fromAngle(noise);
    this.velocity.add(this.acceleration.mult(.1));
    this.velocity.limit(3);
    this.position.add(this.velocity.mult(1));

    if (this.position.x < 0) { this.position.x = size; }
    if (this.position.y < 0) { this.position.y = size; }
    if (this.position.x > size) { this.position.x = 0; }
    if (this.position.y > size) { this.position.y = 0; }

    return this;
  }

  render = () => {
    this.p.line(this.previousPosition.x, this.previousPosition.y, this.position.x, this.position.y)
    // this.p.ellipse(this.position.x, this.position.y, 1, 1);
  }
}


const noise = (p) => {

  const resolution = 100;
  const unit = size / resolution;

  p.setup = () => {
    const canvas = p.createCanvas(size, size);
    canvas.parent('sketch');
    this.particles = _.range(5000).map((i) => (new Particle(p)));
    p.stroke('rgba(0,0,0,0.05)');
    this.i = 0;
  }

  p.draw = () => {
    this.i = this.i + 1;
    // p.clear();
    // p.background(255, 255, 255);

    // _.range(resolution).map((x) => {
    //   _.range(resolution).map((y) => {
    //     const noise = p.noise(x * .1, y * .1);
    //     p.push();
    //     p.translate(x * unit, y * unit);
    //     // p.line(
    //     //   0,
    //     //   0,
    //     //   unit * Math.cos(noise * 2 * Math.PI),
    //     //   unit * Math.sin(noise * 2 * Math.PI),
    //     // )
    //     p.pop();
    //   });
    // });

    this.particles.map((particle) => (particle.update().render()));
  }

  p.mousePressed = () => {
    p.loop();
    p.noLoop()
  };
}

export default noise;
