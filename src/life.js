import _ from "underscore";

const SIZE = 1000;
const CELL_SIZE = 10;
const NUM_CELLS = SIZE / CELL_SIZE;

const randomButUnlikely = () => Math.random() > 0.3;

const life = p => {
  p.setup = () => {
    p.frameRate(100);
    const canvas = p.createCanvas(SIZE, SIZE);
    canvas.parent("sketch");
    window.cells = _
      .range(NUM_CELLS)
      .map(() => _.range(NUM_CELLS).map(() => [randomButUnlikely(), 0]));
  };

  p.draw = () => {
    window.cells.forEach((row, thisX) => {
      p.push();
      row.forEach((cell, thisY) => {
        let total = 0;

        [-1, 0, 1].forEach(x => {
          [-1, 0, 1].forEach(y => {
            const xToLookAt = thisX + x;
            const yToLookAt = thisY + y;
            if (
              (!x && !y) ||
              xToLookAt < 0 ||
              yToLookAt < 0 ||
              xToLookAt === NUM_CELLS ||
              yToLookAt === NUM_CELLS
            ) {
              return;
            } else if (window.cells[thisX + x][thisY + y][0]) {
              total++;
            }
          });
        });
        if (cell[0]) {
          p.fill(0);
          p.stroke(0);
        } else {
          p.fill(255);
          p.stroke(255);
        }
        p.rect(0, 0, CELL_SIZE, CELL_SIZE);
        p.translate(CELL_SIZE, 0);

        let next;
        if (cell[0]) {
          if (total < 2 || total > 3) {
            next = 0;
          } else {
            next = 1;
          }
        } else {
          if (total === 3) {
            next = 1;
          } else {
            next = 0;
          }
        }
        cell[1] = next;
      });
      p.pop();
      p.translate(0, CELL_SIZE);
    });
    window.cells.forEach(row => {
      row.forEach(cell => {
        cell[0] = cell[1];
      });
    });
  };
};

export default life;
