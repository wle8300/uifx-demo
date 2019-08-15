import React, { Component } from "react";

import UIfx from "uifx";
import bellAudio from './audio-assets/beep.mp3'

const beep = new UIfx(bellAudio);


export default class App extends Component {
  state = {
    count: 0
  }
  render() {
    return (
      <div style={{ padding: 16 }}>
        <h2>Basic</h2>
        <code>
          <pre
            style={{ padding: 16, background: "white" }}
          >{`import UIfx from './uifx'
import beepMp3 from './my-sounds/beep.mp3'

const beep = new UIfx(beepMp3)



/**************
 * using uifx *
 **************/

// Vanilla JS
<button onclick="beep.play()">Signup</button>

// React.js
<button onClick={beep.play}>Signup</button>`}</pre>
        </code>
        <div>Pressed {this.state.count} times</div>
        <button
          onClick={() => {
            beep.play();
            this.setState({
              count: this.state.count + 1
            });
          }}
        >
          Signup
        </button>
      </div>
    );
  }
}
