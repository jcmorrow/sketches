import React, { Component } from 'react';
import p5 from 'p5';
import sketch from './sketch';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div id='sketch'/>
      </div>
    );
  }
}

new p5(sketch)

export default App;
