import React, { Component } from "react";

import UIfx from "uifx";
import tickAudio from './audio-assets/tick.mp3';

const tick = new UIfx(
  tickAudio,
  {
    volume: 0.1,
    throttleMs: 50
  }
);

export default class App extends Component {
  state = {
    value: 0
  };

  render() {
    return (
      <div style={{ margin: 16 }}>
        <h2>Advanced</h2>
        <code>
          <pre
            style={{ padding: 16, background: "white" }}
          >{`import UIfx from './uifx'
import tickMp3 from './my-sounds/beep.mp3'

const tick = new UIfx(
  tickMp3,
  {
    volume: 0.9, // value must be between 0.0 ⇔ 1.0
    throttleMs: 50
  }
)

// temporarily change volume
tick.play(0.5)                   // plays 0.5 volume
tick.play()                      // reverts back to 0.1 volume

// permanently change volume
tick.setVolume(0.2).play()       // plays 0.2 volume
tick.play()                      // plays 0.2 volume



/**************
 * using uifx *
 **************/

// Example in vanilla JS
<input onchange="tick.play()" type="range"/>

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
