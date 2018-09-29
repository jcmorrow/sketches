import _ from "underscore";

const SIZE = 800;
const radius = 100;
const SPEED = 0.01;

const randomAngle = () => Math.PI * Math.random() * 2.0;

const randomGroup = () => (Math.random() > 0.5 ? 0 : 1);

class Friend {
  constructor(position, groupNumber) {
    this.position = position;
    this.groupNumber = groupNumber;
  }

  update = others => {
    others.forEach(other => {
      if (this.groupNumber === other.groupNumber) {
        this.moveTowards(other.position, others.length);
      } else {
      }
    });
  };

  moveTowards = (position, population) => {
    this.position = window.Vector.lerp(
      this.position,
      position,
      0.1 / population
    );
  };

  draw = () => {
    window.p.ellipse(this.position.x, this.position.y, 10, 10);
  };
}

const friends = p => {
  p.setup = () => {
    p.frameRate(1);
    window.p = p;
    const canvas = p.createCanvas(SIZE, SIZE);
    canvas.parent("sketch");
    this.friends = _
      .range(3)
      .map(
        () =>
          new Friend(window.p.createVector(0, radius).rotate(randomAngle()), 1)
      );
    this.friends = this.friends.concat(
      _
        .range(5)
        .map(
          () =>
            new Friend(
              window.p.createVector(0, radius).rotate(randomAngle()),
              0
            )
        )
    );
    window.population = this.friends.length;
  };

  p.draw = () => {
    p.translate(SIZE / 2.0, SIZE / 2.0);
    this.friends.forEach(friend => {
      friend.draw();
      friend.update(this.friends);
    });
  };
};

export default friends;
