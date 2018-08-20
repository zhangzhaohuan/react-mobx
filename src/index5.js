/**
 * react16.3后生命周期
 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Father extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState, props) => ({
      count: prevState.count + 1
    }))
  }

  render() {
    return (
      <div style={{ border: "1px solid blue" }}>
        <Child count={this.state.count} handleClick={this.handleClick} />
      </div>
    )
  }
}
class Child extends Component {
  constructor(props) {
    console.log('constructor');
    super(props);
    this.state={
      count:10
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('getDerivedStateFromProps');
    return {
      count: nextProps.count * 2,
    };
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate');
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate');
    return 'aa';
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate');
    console.log(snapshot);
  }

  render() {
    console.log('render');
    return (
      <div style={{ margin: "15px", border: "1px solid red" }}>
        子元素:
        <br />
        父组件属性count值: {this.props.count}
        <br />
        <span onClick={() => this.props.handleClick()}
          style={{ display: "inline-block", padding: "3px 5px", color: "#ffffff", background: "green", borderRadius: "3px", cursor: "pointer" }}
        >click me</span>
      </div>
    )
  }
}
ReactDOM.render(
  (
    <Father />
  )
  , document.getElementById('root'))