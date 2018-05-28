import _ from 'underscore';

const size = 800;
const bounceEfficiency = .05;
const particleCount = 1000;
const noiseFactor = .01;

class Particle {
  constructor(p) {
    this.random = Math.random();
    this.color = `hsla(${Math.floor(this.random * 360)}, 100%, 50%, .2)`;
    this.p = p;
    this.position = this.p.createVector(Math.random() * size, Math.random() * size);
    this.previousPosition = this.position;
    this.velocity = this.p.createVector();
    this.size = bounceEfficiency;
  }

  update = (particles=[], time) => {
    const noise = this.p.noise(this.position.x * noiseFactor, this.position.y * noiseFactor, time) * 2 * Math.PI;

    this.acceleration = window.Vector.fromAngle(noise);
    this.velocity.add(this.acceleration.mult(.1));
    this.velocity.limit(3);
    this.position.add(this.velocity);

    if (this.position.x < 0) { this.position.x = size; }
    if (this.position.y < 0) { this.position.y = size; }
    if (this.position.x > size) { this.position.x = 0; }
    if (this.position.y > size) { this.position.y = 0; }

    // particles.forEach((p, i) => {
    //   if (p === this) {
    //     return;
    //   }
    //   if (window.Vector.sub(this.position, p.position).mag() < bounceRadius) {
    //     if (this.color === p.color) {
    //       this.bounce(p, i);
    //       particles.splice(i, 1);
    //     } else {
    //       this.velocity.rotate(this.random);
    //       p.velocity.rotate(-p.random);
    //     }
    //   }
    // })

    return this;
  }

  bounce = (particle) => {
    this.velocity.add(particle.velocity);
    this.size += particle.size;
  }

  resetVelocity = () => {
    this.velocity.x = 0;
    this.velocity.y = 0;
    this.velocity.z = 0;
  }

  render = () => {
    // this.p.line(this.previousPosition.x, this.previousPosition.y, this.position.x, this.position.y)
    this.p.fill(this.color);
    this.p.stroke(this.color);
    this.p.ellipse(this.position.x, this.position.y, this.size, this.size);
  }
}


const noise = (p) => {
  p.setup = () => {
    window.p = p;
    const canvas = p.createCanvas(size, size);
    canvas.parent('sketch');
    this.particles = _.range(particleCount).map((i) => (new Particle(p)));
    window.vector = this.particles[0].velocity;
    this.time = 0;
  }

  p.draw = () => {
    this.i = this.i + 1;

    this.particles.forEach((particle) => (particle.update(this.particles, this.time).render()));
    this.time += .001;
  }

  p.mousePressed = () => {
    // p.loop();
    // p.noLoop()
  };
}

export default noise;
