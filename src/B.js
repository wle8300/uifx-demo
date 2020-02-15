import React, { Component } from "react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { okaidia } from 'react-syntax-highlighter/dist/esm/styles/prism';


import UIfx from "./uifx";
import tickAudio from './audio-assets/tick.mp3';

const tick = new UIfx(
  tickAudio,
  {
    volume: 0.1,
    throttleMs: 50
  }
);

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

// permanently change playback speed
tick.setPlaybackRate(0.25).play()    // plays super slow
tick.setPlaybackRate(4).play()       // plays super fast


/**************
 * using uifx *
 **************/

// Example in vanilla JS
<input onchange="tick.play()" type="range"/>

// Example in ReactJS
<input onChange={tick.play} type="range"/>
`;

export default class App extends Component {
  state = {
    volume: 0.50,
    playbackRate: 1,
  };

  onVolumeChange = event => {
    this.setState({ volume: event.target.value });
    const volume = parseFloat(event.target.value);
    tick.setVolume(volume);
    tick.play();
  };

  onPlaybackRateChange = event => {
    this.setState({ playbackRate: event.target.value });
    const rate = parseFloat(event.target.value);
    tick.setPlaybackRate(rate);
    tick.play();
  };

  onPlay = () => {
    tick.play();
  };


  render() {
    return (
      <div style={{ margin: '16px 16px 100px' }}>
        <h2>Advanced</h2>
        <SyntaxHighlighter language="javascript" style={okaidia} customStyle={{padding: 20}}>
          {code}
        </SyntaxHighlighter>
        <div>Volume = {this.state.volume}</div>
        <input
          value={this.state.volume}
          onChange={this.onVolumeChange}
          min="0"
          max="1"
          step="0.01"
          type="range"
        />
        <div>PlaybackRate = {this.state.playbackRate}</div>
        <input
          value={this.state.playbackRate}
          onChange={this.onPlaybackRateChange}
          min="0.25"
          max="5"
          step="0.05"
          type="range"
        />
        <div>
            <button onClick={this.onPlay}>
                Play
            </button>
        </div>
      </div>
    );
  }
}
