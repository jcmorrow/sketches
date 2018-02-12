import React, { Component } from 'react';
import p5 from 'p5';
import fractals from './fractals';
import lineDrawing from './line-drawing';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div id='sketch'/>
      </div>
    );
  }
}

new p5(lineDrawing);

export default App;
