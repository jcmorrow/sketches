export const fractalTriangle = ({p, time, size, x = 0, y = 0}) => {
  if (size < 2) { return; }
  p.triangle(x, y, x + .5 * size, y + size, x + size, y);

  if (p.noise(x, y, time) > .5) { return; }

  const newSize = size / 2.0;
  fractalTriangle({p, time, size: newSize, x, y});
  fractalTriangle({p, time, size: newSize, x: x + newSize, y});
  fractalTriangle({ p, size: newSize, time, x: x + .5 * newSize, y: y + newSize });
  fractalTriangle({ p, size: newSize, time, x: x + .5 * newSize, y: y - newSize });
}
