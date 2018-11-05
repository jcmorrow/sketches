const SIZE = 1000;

const BEZIER_CONTROL_POINT_TANGENT_COEFFICIENT =
  (4.0 / 3.0) * (Math.sqrt(2) - 1);
const RADIUS = 1;
const DIAMETER = RADIUS * 2;

const sequence = p => {
  window.p = p;

  p.setup = () => {
    const canvas = p.createCanvas(SIZE, SIZE);
    canvas.parent("sketch");

    this.cursor = 0;
    this.step = 1;
    this.visited = new Set();
  };

  const halfCircle = (from, to) => {
    console.log(from, to);
    const radius = (to - from) * RADIUS;
    console.log("Radius: ", radius);
    const startX = from * DIAMETER;
    const startY = 0;
    const midX = startX + radius;
    const midY = -1 * radius;
    const endX = to * DIAMETER;

    p.bezier(
      startX,
      0,
      startX,
      midY * BEZIER_CONTROL_POINT_TANGENT_COEFFICIENT,
      midX - radius * BEZIER_CONTROL_POINT_TANGENT_COEFFICIENT,
      midY,
      midX,
      midY
    );
    p.bezier(
      midX,
      midY,
      midX + radius * BEZIER_CONTROL_POINT_TANGENT_COEFFICIENT,
      midY,
      endX,
      midY * BEZIER_CONTROL_POINT_TANGENT_COEFFICIENT,
      endX,
      0
    );
  };

  p.draw = () => {
    p.translate(0, 500);
    p.noFill();

    p.line(0, 0, 1000, 0);

    for (let i = 0; i < 200; i++) {
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
      console.log(this.cursor);
    }

    p.noLoop();
  };
};

export default sequence;
