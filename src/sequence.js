const SIZE = 1500;

const BEZIER_CONTROL_POINT_TANGENT_COEFFICIENT =
  (4.0 / 3.0) * (Math.sqrt(2) - 1);
const RADIUS = 7;
const DIAMETER = RADIUS * 2;
const MAX = 70;

const sequence = p => {
  window.p = p;

  p.setup = () => {
    const canvas = p.createCanvas(SIZE, SIZE);
    canvas.parent("sketch");

    this.cursor = 0;
    this.step = 1;
    this.visited = new Set();

    p.noFill();
  };

  const halfCircle = (from, to) => {
    const up = this.step % 2 === 0 ? -1 : 1;
    const right = from > to ? -1 : 1;

    const radius = Math.abs(to - from) * RADIUS;

    const startX = from * DIAMETER;
    const startY = 0;

    const midX = startX + radius * right;
    const midY = radius * up;

    const endX = to * DIAMETER;
    const endY = 0;

    p.bezier(
      startX,
      startY,
      startX,
      midY * BEZIER_CONTROL_POINT_TANGENT_COEFFICIENT,
      midX + -1 * right * radius * BEZIER_CONTROL_POINT_TANGENT_COEFFICIENT,
      midY,
      midX,
      midY
    );
    p.bezier(
      midX,
      midY,
      midX + right * radius * BEZIER_CONTROL_POINT_TANGENT_COEFFICIENT,
      midY,
      endX,
      midY * BEZIER_CONTROL_POINT_TANGENT_COEFFICIENT,
      endX,
      endY
    );
  };

  p.draw = () => {
    p.translate(0, 500);
    this.visited.add(this.cursor);

    const back = this.cursor - this.step;
    const forward = this.cursor + this.step;
    let next;

    if (back > 0 && !this.visited.has(back)) {
      next = back;
    } else {
      next = forward;
    }
    halfCircle(this.cursor, next);
    this.cursor = next;
    this.step++;
    if (this.step > MAX) {
      p.noLoop();
    }
  };
};

export default sequence;
