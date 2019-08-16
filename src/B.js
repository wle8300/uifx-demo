import React, { Component } from "react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { okaidia } from 'react-syntax-highlighter/dist/esm/styles/prism';


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

    const code = `import UIfx from './uifx'
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
`

    return (
      <div style={{ margin: '16px 16px 100px' }}>
        <h2>Advanced</h2>
        <SyntaxHighlighter language="javascript" style={okaidia} customStyle={{padding: 20}}>
          {code}
        </SyntaxHighlighter>
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
