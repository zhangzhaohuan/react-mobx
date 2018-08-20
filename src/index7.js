/**
 * 截流函数throttle
 */

import React, { Component } from 'react'
import ReactDOM from 'react-dom';

export default class Throttle extends Component {

  componentDidMount() {
    window.addEventListener('scroll', this.throttle(this.handle, 5000))
  }

  throttle(func, delay) {
    var timer = null;
    var startTime = Date.now();
    return function () {
      var curTime = Date.now();
      var remaining = delay - (curTime - startTime);
      var context = this;
      var args = arguments;
      clearTimeout(timer);
      if (remaining <= 0) {
        func.apply(context, args);
        startTime = Date.now();
      } else {
        timer = setTimeout(func, remaining);
      }
    }
  }

  handle() {
    console.log(Math.random());
  }
  render() {
    return (
      <div style={{height:'1000px'}}>
        throttle
      </div>
    )
  }
}
ReactDOM.render(
  <Throttle />
  , document.getElementById('root'))