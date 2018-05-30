import React, { Component } from 'react';
import { Button ,DatePicker} from 'antd';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  onChange=(e)=>{
    console.log(e._d.getTime());
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Button type="primary">Primary</Button>
        <DatePicker onChange={this.onChange} />
      </div>
    );
  }
}

export default App;
