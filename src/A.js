import React, { Component } from "react";

import UIfx from "uifx";

const beep = new UIfx({
  asset: require('./audio-assets/beep.mp3')
});

export default class App extends Component {
  state = {
    count: 0
  }
  render() {
    return (
      <div style={{ padding: 16 }}>
        <h2>Create new UIfx</h2>
        <code>
          <pre
            style={{ padding: 16, background: "white" }}
          >{`import UIfx from './uifx'
import beepMp3 from './my-sounds/beep.mp3'

const beep = new UIfx({asset: beepMp3})

beep.play()`}</pre>
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
