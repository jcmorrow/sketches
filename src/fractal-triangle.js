import { lineAnimator } from './line-animator';

export const fractalTriangle = ({p, time, size, x = 0, y = 0}) => {
  if (Math.abs(size) < 4) { return; }
  p.triangle(x, y, x + .5 * size, y + size, x + size, y);

  if (p.noise(x, y, time) > .5) { return; }

  const half = size / 2.0;
  fractalTriangle({p, size: half, time, x, y});
  fractalTriangle({p, size: half, time, x: x + half, y});
  fractalTriangle({p, size: half, time, x: x + .5 * half, y: y + half});
  fractalTriangle({p, size: -1 * half, time, x: x + 1.5 * half, y: y + half});
}

export const traceTriangle = ({p, x, y, size, frame, frames}) => {
  if (Math.abs(size) < 3) { return; }
  if (p.noise(x, y) < .3) { return; }
  if (frame <= frames) {
    const half = .5 * size;
    lineAnimator(
      { p, xFrom: x, yFrom: y, xTo: x + half, yTo: y + size, frame, frames }
    );
    lineAnimator(
      { p, xFrom: x + half, yFrom: y + size, xTo: x + size, yTo: y, frame, frames }
    );
    lineAnimator(
      { p, xFrom: x + size, yFrom: y, xTo: x, yTo: y, frame, frames }
    );
  } else {
    const half = size / 2.0;
    traceTriangle({p, size: half, x, y, frame: frame - frames, frames});
    traceTriangle({p, size: half, x: x + half, y, frame: frame - frames, frames});
    traceTriangle({p, size: half, x: x + .5 * half, y: y + half, frame: frame - frames, frames});
    traceTriangle({p, size: -1 * half, x: x + 1.5 * half, y: y + half, frame: frame - frames, frames});
  }
};
