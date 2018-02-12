import { lineAnimator } from './line-animator';

export const fractalSquare = ({p, time, size, x = 0, y = 0}) => {
  if (size < 5) { return; }
  const noise = p.noise(x, y, time);
  if (noise > .5) { return; }

  shadedSquare({p, size, x, y});

  const newSize = size / 2.0;
  fractalSquare({p, time, size: newSize, x, y});
  fractalSquare({p, time, size: newSize, x: x + newSize, y});
  fractalSquare({p, time, size: newSize, x: x + newSize, y: y + newSize});
  fractalSquare({p, time, size: newSize, x, y: y + newSize});
}

export const shadedSquare = ({p, size, x = 0, y = 0}) => {
  const stepSize = size / 10.0;
  p.rect(x, y, size, size);
  var anchorPoint = stepSize;
  while(anchorPoint <= size) {
    p.line(x, y + anchorPoint, x + anchorPoint, y);
    anchorPoint = anchorPoint + stepSize;
  }
  anchorPoint = stepSize;
  while(anchorPoint <= size) {
    p.line(x + anchorPoint, size + y, size + x, y + anchorPoint);
    anchorPoint = anchorPoint + stepSize;
  }
}

export const traceSquare = ({p, x, y, size, frame, frames}) => {
  if (size < 2) { return; }
  if (p.noise(x, y) < .4) { return; }
  if (frame <= frames) {
    const down = lineAnimator({
      p,
      xFrom: x,
      yFrom: y,
      xTo: x,
      yTo: y + size,
      frame: frame,
      frames: frames,
    });
    const right = lineAnimator({
      p,
      xFrom: x,
      yFrom: y + size,
      xTo: x + size,
      yTo: y + size,
      frame: frame,
      frames: frames,
    });
    const up = lineAnimator({
      p,
      xFrom: x + size,
      yFrom: y + size,
      xTo: x + size,
      yTo: y,
      frame: frame,
      frames: frames,
    });
    const left = lineAnimator({
      p,
      xFrom: x + size,
      yFrom: y,
      xTo: x,
      yTo: y,
      frame: frame,
      frames: frames,
    });
  } else {
    const newSize = size / 2.0;
    traceSquare({p, size: newSize, x, y, frame: frame - frames, frames});
    traceSquare({p, size: newSize, x: x + newSize, y, frame: frame - frames, frames});
    traceSquare({p, size: newSize, x: x + newSize, y: y + newSize, frame: frame - frames, frames});
    traceSquare({p, size: newSize, x, y: y + newSize, frame: frame - frames, frames});
  }
};
