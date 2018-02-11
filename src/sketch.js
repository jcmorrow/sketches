import _ from 'underscore';

const sketch = (p) => {
  window.p5 = p;
  p.setup = () => {
    this.leftX = 20;
    this.topY = 20;
    this.rectHeight = 260;
    this.minimumWidth = 360;
    p.colorMode(p.HSB);
    p.noStroke()
    p.background(0, 0, 100);

    let canvas = p.createCanvas(600, 300);
    canvas.parent('sketch');
  }

  const gauss = (mean, variance) => (
    Math.abs(mean + variance * p.randomGaussian())
  )

  const left = (width) => (this.leftX + width);
  const top = (width) => (this.topY + width);


  p.draw = () => {
    p.noLoop();
    p.fill(0, 0, 50, 1);

    p.rect(left(0), top(0), this.minimumWidth + 5, this.rectHeight)

    p.strokeWeight(.2);
    p.stroke(0, 0, 50, 1);
    _.range(1000).map((i) => {
      const topX = left(this.minimumWidth + gauss(25, 50));
      const bottomX = left(this.minimumWidth + gauss(25, 50));
      const bottomY = top(this.rectHeight);
      const meanStartY = p.random(top(0), bottomY);
      const meanFinishY = p.random(top(0), bottomY);
      _.range(8).map((_i) => (
        p.line(
          gauss(topX, 5),
          gauss(meanStartY, 5),
          gauss(bottomX, 5),
          gauss(meanFinishY, 5),
        )
      ))
    });
  }

  p.mousePressed = () => {
    p.clear();
    p.loop();
  };
}

export default sketch;
