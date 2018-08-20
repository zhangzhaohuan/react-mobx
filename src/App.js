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


  //类似componentWillReceiveProps:但是必须依赖的数据发生变化时才促发
  disposer = autorun(() => console.log(this.props.test.age))

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
        <p>{this.props.test.age}</p>
      </div>
    );
  }
}

export default App;
