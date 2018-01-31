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
    mean + variance * p.randomGaussian()
  )

  p.draw = () => {
    p.fill(75, 100, 100, .1);
    _.range(20).map((i) => {

      const topXExtend = Math.abs(gauss(0, 100));
      const topWidth = this.minimumWidth + topXExtend;
      const rightTopOffset = -1 * Math.abs(gauss(0.1 * topXExtend, 1.0))

      const bottomXExtend = Math.abs(gauss(0, 100));
      const bottomWidth = this.minimumWidth + bottomXExtend;
      const rightBottomOffset = Math.abs(gauss(0.1 * bottomXExtend, 1.0))

      p.beginShape();
      p.vertex(
        this.leftX,
        this.topY,
      );
      p.vertex(
        this.leftX + this.minimumWidth,
        this.topY,
      );
      p.vertex(
        this.leftX + topWidth,
        this.topY + rightTopOffset,
      );
      p.vertex(
        this.leftX + bottomWidth,
        this.topY + rightTopOffset + this.rectHeight + rightBottomOffset,
      );
      p.vertex(
        this.leftX + this.minimumWidth,
        this.topY + this.rectHeight,
      );
      p.vertex(
        this.leftX,
        this.topY + this.rectHeight,
      );
      p.endShape(p.CLOSE);
      p.noLoop();
    })
  }

  p.mousePressed = () => {
    p.clear();
    p.loop();
  };
}

export default sketch;
