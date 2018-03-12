import React, { Component } from 'react';
import p5 from 'p5';
import fractals from './fractals';
import perlin from './perlin';
import noise from './noise';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div id='sketch'/>
      </div>
    );
  }
}

window.Vector = p5.Vector;
new p5(noise);

export default App;
