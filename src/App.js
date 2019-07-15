import React, { Component } from "react";

import A from "./A";
import B from './B'

export default class App extends Component {
  render() {
    return (
      <div>
        <h1 style={{ paddingLeft: 16, marginBottom: 0 }}>
          <code>uifx</code>
        </h1>
        <div style={{ paddingLeft: 16 }}>
          Github:{" "}
          <a href="https://github.com/wle8300/uifx">
            https://github.com/wle8300/uifx
          </a>
        </div>
        <div style={{ paddingLeft: 16 }}>
          NPM:{" "}
          <a href="https://www.npmjs.com/package/uifx">
            https://www.npmjs.com/package/uifx
          </a>
        </div>
        <div style={{ padding: 16 }}>
          <h2>Installation</h2>
          <code>
            <pre
              style={{ padding: 16, background: "white" }}
            >{`npm install --save uifx

// or

yarn add uifx
`}</pre>
          </code>
        </div>
        <A />


        <div style={{ padding: 16 }}>
          <h2>Changing volume</h2>
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

//change volume (non-persistent)
tick.play(0.5)                // plays 0.5 volume
tick.play()                   // reverts back to 0.1 volume

//change volume (persistent)
tick.setVolume(0.2).play()    // plays 0.2 volume
tick.play()                   // plays 0.2 volume
`}</pre>
          </code>
        </div>
        <B />

        {/* <D /> */}
        {/* <B /> */}
      </div>
    );
  }
}
