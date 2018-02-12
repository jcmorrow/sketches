function* square(magnitude) {
  const successors = {
    'UP': 'RIGHT',
    'RIGHT': 'DOWN',
    'DOWN': 'LEFT',
    'LEFT': 'UP',
  }
  const coords = {
    'UP': [0.0, 0.0],
    'RIGHT': [1.0, 0.0],
    'DOWN': [1.0, 1.0],
    'LEFT': [0.0, 1.0],
  }

  let direction = 'UP';
  let currentMagnitude = magnitude;
  while(true) {
    if (direction === 'LEFT') {currentMagnitude = currentMagnitude / 2}
    direction = successors[direction]
    yield coords[direction].map((c) => (c * currentMagnitude));
  }
}

const clamp = (val, min, max) => (Math.max(min, Math.min(max, val)));

export const lineAnimator  = ({p, xFrom, yFrom, xTo, yTo, frame, frames}) => {
  const step = clamp(frame / frames, 0, 1);

  const deltaX = (xTo - xFrom) * step;
  const deltaY = (yTo - yFrom) * step;

  p.line(xFrom, yFrom, xFrom + deltaX, yFrom + deltaY)
};
