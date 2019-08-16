import React, { Component } from "react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { okaidia } from 'react-syntax-highlighter/dist/esm/styles/prism';
import UIfx from "uifx";
import bellAudio from './audio-assets/beep.mp3'

const beep = new UIfx(bellAudio);


export default class App extends Component {
  state = {
    count: 0
  }
  render() {

    const code = `import UIfx from './uifx'
import beepMp3 from './my-sounds/beep.mp3'

const beep = new UIfx(beepMp3)


/**************
 * using uifx *
 **************/

// Vanilla JS
<button onclick="beep.play()">Signup</button>

// React.js
<button onClick={beep.play}>Signup</button>`

    return (
      <div style={{ padding: 16 }}>
        <h2>Basic</h2>
        <SyntaxHighlighter language="jsx" style={okaidia} customStyle={{padding: 20}}>
          {code}
        </SyntaxHighlighter>
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
