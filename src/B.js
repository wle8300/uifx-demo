import React, { Component } from "react";

import UIfx from "uifx";

const tick = new UIfx({
  asset: require('./audio-assets/tick.mp3'),
  volume: 0.1,
  throttleMs: 50
});

export default class App extends Component {
  state = {
    value: 0
  };

  render() {
    return (
      <div style={{ margin: 16 }}>
        <h2>Setting volume and throttle</h2>
        <code>
          <pre
            style={{ padding: 16, background: "white" }}
          >{`import UIfx from './uifx'
import tickMp3 from './my-sounds/beep.mp3'

const tick = new UIfx({
  asset: tickMp3,
  volume: 0.1, // value must be between 0.0 ⇔ 1.0
  throttleMs: 50
})

// Example in ReactJS
<input onChange={tick.play} type="range"/>
`}</pre>
        </code>
        <div>{this.state.value}</div>
        <input
          value={this.state.value}
          onChange={this.onChange}
          min="0"
          max="100"
          step="5"
          type="range"
        />
      </div>
    );
  }

  onChange = event => {
    this.setState({ value: event.target.value }, tick.play);
  };
}
