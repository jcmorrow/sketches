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
