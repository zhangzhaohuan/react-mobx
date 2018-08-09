import React, { Component } from 'react';
import { Button, DatePicker } from 'antd';
// import logo from './logo.svg';
import './App.css';
import Test from './components/mobx/test'
import { observer, inject } from 'mobx-react'
import {  autorun } from 'mobx'

@inject('test')
@observer
class App extends Component {
  constructor(props) {
    super(props);
  }


  //props变化自动执行，此时类似componentWillReceiveProps
  // disposer = autorun(() => console.log(this.props))

  onChange = (e) => {
    // console.log(e._d.getTime());
  }

  add = () => {
    const { data } = this.props.test;
    // console.log(data);
  }
  render() {
    return (
      <div className="App">
        <Button type="primary" onClick={this.props.test.addAge}>Primary</Button>
        <DatePicker onChange={this.onChange} />
        <Test />
      </div>
    );
  }
}

export default App;
