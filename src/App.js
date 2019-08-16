import React, { Component } from "react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { okaidia } from 'react-syntax-highlighter/dist/esm/styles/prism';


import A from "./A";
import B from './B'

export default class App extends Component {
  render() {

    const code = `npm install --save uifx`
    
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
          <SyntaxHighlighter language="shell" style={okaidia} customStyle={{padding: 20}}>
            {code}
          </SyntaxHighlighter>
        </div>
        
        <A />
        <B />

      </div>
    );
  }
}
