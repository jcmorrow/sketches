import _ from "underscore";

const SIZE = 2000;
const SPEED = 0.01;
const PARTICLE_COUNT = 4;
const ATTRACTOR_COUNT = 2;

class Attractor {
  constructor() {
    this.position = window.p.createVector(
      400 + Math.random() * (SIZE - 800),
      400 + Math.random() * (SIZE - 800)
    );
  }

  attract = particle => {
    particle.accelerate(this.position);
  };

  draw = () => {
    // window.p.stroke(0, 0, 0);
    // window.p.strokeWeight(10);
    // window.p.point(this.position.x, this.position.y);
  };
}

class Particle {
  constructor() {
    this.acceleration = window.p.createVector();
    this.position = window.p.createVector(800, 800);
    this.velocity = window.Vector.random2D();
    this.velocity.setMag(Math.random() * 20);
  }

  accelerate = point => {
    const direction = window.Vector.sub(point, this.position).div(1000);
    let magnitude = direction.magSq();
    direction.setMag(magnitude);
    this.acceleration = direction;
  };

  update = () => {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
  };

  draw = () => {
    window.p.stroke(
      5.0 / this.acceleration.magSq(),
      0,
      this.velocity.magSq() * 255.0,
      7.0 / this.acceleration.magSq()
    );
    window.p.strokeWeight(this.acceleration.magSq() * 100);
    window.p.point(this.position.x, this.position.y);
  };
}

const attraction = p => {
  p.setup = () => {
    window.p = p;
    const canvas = p.createCanvas(SIZE, SIZE);
    canvas.parent("sketch");

    p.background(253, 255, 250);

    this.attractors = [];
    for (let i = 0; i < ATTRACTOR_COUNT; i++) {
      this.attractors.push(new Attractor());
    }
    this.particles = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      this.particles.push(new Particle());
    }
  };

  p.draw = () => {
    // p.clear();
    this.attractors.forEach(attractor => {
      attractor.draw();
      this.particles.forEach(particle => {
        attractor.attract(particle);
        particle.update();
        particle.draw();
      });
    });
  };
};

export default attraction;
