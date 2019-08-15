import React, { Component } from "react";

import A from "./A";
import B from './B'

export default class App extends Component {
  render() {
    return (
      <div>
        <div>
          <img src={require('./logo.png')} style={{
            width: 68,
            padding: '1em 1em 0',
          }}/>
        </div>
        <h1 style={{ paddingLeft: 16, margin: '10px 0px 0' }}>
          <code>uifx</code>
        </h1>
        <div style={{ paddingLeft: 16 }}>
          <a href="https://github.com/wle8300/uifx">
            https://github.com/wle8300/uifx
          </a>
        </div>
        <div style={{ paddingLeft: 16 }}>
          <a href="https://www.npmjs.com/package/uifx">
            https://www.npmjs.com/package/uifx
          </a>
        </div>
        <div style={{ marginTop: 30, padding: 16 }}>
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
        <B />

      </div>
    );
  }
}
