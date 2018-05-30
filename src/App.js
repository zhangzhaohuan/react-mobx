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
        <Button type="primary">Primary</Button>
        <DatePicker onChange={this.onChange} />
      </div>
    );
  }
}

export default App;
