import React, { Component } from "react";
import p5 from "p5";
import fractals from "./fractals";
import perlin from "./perlin";
import lines from "./lines";
import noise from "./noise";
import roofs from "./roofs";
import spiral from "./spiral";
import spinningPerlins from "./spinningPerlins";
import friends from "./friends";
import attraction from "./attraction";
import life from "./life";
import sequence from "./sequence";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div id="sketch" />
      </div>
    );
  }
}

window.Vector = p5.Vector;
new p5(sequence);

export default App;
